import { StatCard } from "../shared/StatCard";
import { getTierLabel } from "../shared/TierBadge";
import { useStats } from "../../hooks/useStats";

export function StatsRow() {
  const { stats } = useStats();

  if (!stats) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 28 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16, padding: "24px 28px", height: 110,
          }} />
        ))}
      </div>
    );
  }

  const { totalAgents, onlineAgents, totalMessages, totalApps, availableApps, averageReputationScore: avgReputation = 0.5 } = stats;
  const onlinePct = totalAgents > 0 ? ((onlineAgents / totalAgents) * 100).toFixed(1) : "0";

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 28 }}>
      <StatCard label="Total Agents" value={totalAgents.toLocaleString()} sub={`${onlineAgents} online`} accent />
      <StatCard label="Online Now" value={onlineAgents} sub={`${onlinePct}% of total`} />
      <StatCard label="Total Messages" value={totalMessages.toLocaleString()} />
      <StatCard label="Live Apps" value={totalApps} sub={`${availableApps} available`} />
      <StatCard label="Avg Reputation" value={Math.round(avgReputation * 1000)} sub={getTierLabel(avgReputation)} />
    </div>
  );
}
