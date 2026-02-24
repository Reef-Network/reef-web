interface TooltipPayload {
  color: string;
  name: string;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#0f1d2f", border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 10, padding: "12px 16px", fontSize: 12,
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#64748b", marginBottom: 6 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color, display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ width: 6, height: 6, borderRadius: 3, background: p.color }} />
          {p.name}: <strong style={{ color: "white" }}>{p.value.toLocaleString()}</strong>
        </div>
      ))}
    </div>
  );
}
