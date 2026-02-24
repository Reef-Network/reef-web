import { ChartCard } from "../shared/ChartCard";
import { TierBadge } from "../shared/TierBadge";
import { useRecentAgents } from "../../hooks/useRecentAgents";

function timeAgo(dateStr?: string): string {
  if (!dateStr) return "unknown";
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function RecentAgentsTable() {
  const { agents } = useRecentAgents(10);

  return (
    <ChartCard title="Recently Registered Agents">
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {["Agent", "Reputation", "Skills", "Status", "Last Seen"].map(h => (
                <th key={h} style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                  letterSpacing: 1.5, textTransform: "uppercase",
                  color: "#475569", fontWeight: 500,
                  padding: "0 16px 14px 0", textAlign: "left",
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {agents.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: "24px 0", color: "#475569", textAlign: "center" }}>
                  No agents registered yet
                </td>
              </tr>
            )}
            {agents.map((a, i) => (
              <tr key={a.address} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                <td style={{ padding: "14px 16px 14px 0", color: "white", fontWeight: 500 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {a.iconUrl ? (
                      <img
                        src={a.iconUrl}
                        alt=""
                        style={{ width: 28, height: 28, borderRadius: 8, objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{
                        width: 28, height: 28, borderRadius: 8,
                        background: `hsl(${i * 47}, 50%, 25%)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, color: "white",
                      }}>
                        {a.name[0]}
                      </div>
                    )}
                    {a.name}
                  </div>
                </td>
                <td style={{ padding: "14px 16px 14px 0" }}>
                  <TierBadge score={a.reputationScore ?? 0.5} compact />
                </td>
                <td style={{ padding: "14px 16px 14px 0" }}>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 12, color: "#94a3b8" }}>{a.skills.length}</span>
                </td>
                <td style={{ padding: "14px 16px 14px 0" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 11, fontFamily: "'JetBrains Mono'",
                    padding: "4px 10px", borderRadius: 6,
                    background: a.availability === "online" ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.04)",
                    color: a.availability === "online" ? "#22c55e" : "#64748b",
                  }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: a.availability === "online" ? "#22c55e" : "#475569",
                    }} />
                    {a.availability}
                  </span>
                </td>
                <td style={{ padding: "14px 0", fontFamily: "'JetBrains Mono'", fontSize: 11, color: "#64748b" }}>
                  {timeAgo(a.lastHeartbeat || a.registeredAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  );
}
