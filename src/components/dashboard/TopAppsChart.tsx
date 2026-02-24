import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartCard } from "../shared/ChartCard";
import { CustomTooltip } from "../shared/CustomTooltip";
import { useTopApps } from "../../hooks/useTopApps";

export function TopAppsChart() {
  const { apps } = useTopApps(8);

  const data = apps.map((a) => ({
    name: a.name.length > 18 ? a.name.slice(0, 16) + "..." : a.name,
    interactions: a.totalInteractions ?? 0,
  }));

  return (
    <ChartCard title="Top Apps by Interactions">
      {data.length === 0 ? (
        <div style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", fontSize: 13 }}>
          No apps registered yet
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} layout="vertical" barGap={2}>
            <XAxis type="number" tick={{ fill: "#475569", fontSize: 9, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
            <YAxis dataKey="name" type="category" tick={{ fill: "#94a3b8", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={130} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="interactions" fill="#14b8a6" radius={[0, 4, 4, 0]} barSize={10} name="Interactions" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
}
