import { useEffect, useState } from "react";
import { fetchTopApps } from "../api/client";
import type { AppResult } from "../api/types";

export function useTopApps(limit = 10) {
  const [apps, setApps] = useState<AppResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchTopApps(limit);
        if (!cancelled) {
          setApps(data.apps);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { apps, error };
}
