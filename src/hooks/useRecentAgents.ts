import { useEffect, useState } from "react";
import { fetchRecentAgents } from "../api/client";
import type { AgentResult } from "../api/types";

export function useRecentAgents(limit = 10) {
  const [agents, setAgents] = useState<AgentResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchRecentAgents(limit);
        if (!cancelled) {
          setAgents(data.agents);
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

  return { agents, error };
}
