import { API_URL } from "../lib/constants";
import type {
  StatsResponse,
  HistoryResponse,
  AgentSearchResponse,
  AppSearchResponse,
} from "./types";

async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return res.json() as Promise<T>;
}

export function fetchStats(): Promise<StatsResponse> {
  return fetchJSON<StatsResponse>("/stats");
}

export function fetchStatsHistory(days = 30): Promise<HistoryResponse> {
  return fetchJSON<HistoryResponse>(`/stats/history?days=${days}`);
}

export function fetchRecentAgents(limit = 10): Promise<AgentSearchResponse> {
  return fetchJSON<AgentSearchResponse>(`/agents/search?limit=${limit}`);
}

export function fetchTopApps(limit = 10): Promise<AppSearchResponse> {
  return fetchJSON<AppSearchResponse>(
    `/apps/search?sortBy=interactions&limit=${limit}`,
  );
}
