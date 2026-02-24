import { useEffect, useState } from "react";
import { fetchStats } from "../api/client";
import type { StatsResponse } from "../api/types";
import { POLL_INTERVAL_MS } from "../lib/constants";

export function useStats() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchStats();
        if (!cancelled) {
          setStats(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      }
    }

    load();
    const iv = setInterval(load, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(iv);
    };
  }, []);

  return { stats, error };
}
