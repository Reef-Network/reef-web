import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
  span?: number;
}

export function ChartCard({ title, children, delay = 0, span = 1 }: ChartCardProps) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 16, padding: 28,
      gridColumn: span > 1 ? `span ${span}` : undefined,
      animation: `fadeUp 0.6s ease ${delay}s both`,
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#64748b", marginBottom: 24 }}>{title}</div>
      {children}
    </div>
  );
}
