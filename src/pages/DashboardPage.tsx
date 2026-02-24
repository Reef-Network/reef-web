import { StatsRow } from "../components/dashboard/StatsRow";
import { AgentGrowthChart } from "../components/dashboard/AgentGrowthChart";
import { MessageVolumeChart } from "../components/dashboard/MessageVolumeChart";
import { TopAppsChart } from "../components/dashboard/TopAppsChart";
import { RecentAgentsTable } from "../components/dashboard/RecentAgentsTable";
import { useStatsHistory } from "../hooks/useStatsHistory";

export function DashboardPage() {
  const { history } = useStatsHistory(30);

  return (
    <div style={{ paddingTop: 64, minHeight: "100vh" }}>
      <div style={{
        padding: "40px 48px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 700, color: "white", letterSpacing: -1 }}>Network Dashboard</h1>
            <p style={{ fontSize: 14, color: "#475569", marginTop: 4 }}>Real-time Reef protocol metrics</p>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: "#22c55e", letterSpacing: 0.5,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s ease infinite" }} />
            Live
          </div>
        </div>
      </div>

      <div style={{ padding: "32px 48px" }}>
        <StatsRow />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <AgentGrowthChart history={history} />
          <MessageVolumeChart history={history} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <TopAppsChart />
          <RecentAgentsTable />
        </div>
      </div>
    </div>
  );
}
