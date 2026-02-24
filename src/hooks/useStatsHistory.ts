import { useEffect, useState } from "react";
import { fetchStatsHistory } from "../api/client";
import type { HistoryEntry } from "../api/types";

export function useStatsHistory(days = 30) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchStatsHistory(days);
        if (!cancelled) {
          setHistory(data.history);
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
  }, [days]);

  return { history, error };
}
