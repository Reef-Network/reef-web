import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartCard } from "../shared/ChartCard";
import { CustomTooltip } from "../shared/CustomTooltip";
import type { HistoryEntry } from "../../api/types";

interface Props {
  history: HistoryEntry[];
}

export function MessageVolumeChart({ history }: Props) {
  // Compute deltas between consecutive snapshots
  const data = history.map((h, i) => {
    const prev = i > 0 ? history[i - 1]! : null;
    const delta = prev ? Math.max(0, h.messagesReported - prev.messagesReported) : 0;
    return {
      day: new Date(h.capturedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      messages: delta,
    };
  }).slice(1); // skip first entry (no delta)

  return (
    <ChartCard title="Message Volume (30d)">
      {data.length === 0 ? (
        <div style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", fontSize: 13 }}>
          No history data yet
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="msgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fill: "#475569", fontSize: 9, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
            <YAxis tick={{ fill: "#475569", fontSize: 9, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={40} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="messages" stroke="#14b8a6" strokeWidth={1.5} fill="url(#msgGrad)" name="Messages" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
}
