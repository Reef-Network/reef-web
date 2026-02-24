export interface StatsResponse {
  totalAgents: number;
  onlineAgents: number;
  topSkills: string[];
  averageReputationScore: number;
  totalApps: number;
  availableApps: number;
  uniqueSkills: number;
  totalMessages: number;
  capturedAt?: string;
}

export interface HistoryEntry {
  totalAgents: number;
  onlineAgents: number;
  messagesReported: number;
  capturedAt: string;
}

export interface HistoryResponse {
  history: HistoryEntry[];
  days: number;
}

export interface AgentResult {
  address: string;
  name: string;
  bio: string | null;
  skills: string[];
  availability: "online" | "offline";
  iconUrl?: string | null;
  registeredAt?: string;
  lastHeartbeat?: string;
  reputationScore?: number;
  country?: string | null;
}

export interface AgentSearchResponse {
  agents: AgentResult[];
  total: number;
  limit: number;
  offset: number;
}

export interface AppResult {
  appId: string;
  name: string;
  description: string;
  version: string;
  category: string | null;
  type: "coordinated" | "p2p";
  availability: string;
  iconUrl?: string | null;
  reputationScore?: number;
  totalInteractions?: number;
}

export interface AppSearchResponse {
  apps: AppResult[];
  total: number;
  limit: number;
  offset: number;
}
