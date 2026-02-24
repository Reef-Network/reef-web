interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  delay?: number;
  accent?: boolean;
}

export function StatCard({ label, value, sub, delay = 0, accent = false }: StatCardProps) {
  return (
    <div style={{
      background: accent ? "linear-gradient(135deg, rgba(14,184,166,0.12), rgba(14,184,166,0.04))" : "rgba(255,255,255,0.03)",
      border: `1px solid ${accent ? "rgba(14,184,166,0.2)" : "rgba(255,255,255,0.06)"}`,
      borderRadius: 16, padding: "24px 28px",
      animation: `fadeUp 0.6s ease ${delay}s both`,
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: accent ? "#2dd4bf" : "#64748b", marginBottom: 12 }}>{label}</div>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 36, fontWeight: 700, color: "white", letterSpacing: -1, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 13, color: "#64748b", marginTop: 8 }}>{sub}</div>}
    </div>
  );
}
