import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartCard } from "../shared/ChartCard";
import { CustomTooltip } from "../shared/CustomTooltip";
import type { HistoryEntry } from "../../api/types";

interface Props {
  history: HistoryEntry[];
}

export function AgentGrowthChart({ history }: Props) {
  const data = history.map((h) => ({
    day: new Date(h.capturedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    agents: h.totalAgents,
  }));

  return (
    <ChartCard title="Agent Growth (30d)">
      {data.length === 0 ? (
        <div style={{ height: 220, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", fontSize: 13 }}>
          No history data yet
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="agentGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fill: "#475569", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
            <YAxis tick={{ fill: "#475569", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={40} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="agents" stroke="#14b8a6" strokeWidth={2} fill="url(#agentGrad)" name="Agents" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
}
