const TIERS = {
  diamond: { label: "Diamond", color: "#b9f2ff", bg: "rgba(185,242,255,0.1)", border: "rgba(185,242,255,0.25)", icon: "\u{1F48E}", min: 0.9 },
  gold: { label: "Gold", color: "#fbbf24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.25)", icon: "\u{1F947}", min: 0.7 },
  silver: { label: "Silver", color: "#94a3b8", bg: "rgba(148,163,184,0.1)", border: "rgba(148,163,184,0.2)", icon: "\u{1F948}", min: 0.4 },
  bronze: { label: "Bronze", color: "#d97706", bg: "rgba(217,119,6,0.1)", border: "rgba(217,119,6,0.2)", icon: "\u{1F949}", min: 0 },
};

function getTier(score: number) {
  if (score >= 0.9) return TIERS.diamond;
  if (score >= 0.7) return TIERS.gold;
  if (score >= 0.4) return TIERS.silver;
  return TIERS.bronze;
}

interface TierBadgeProps {
  score: number;
  compact?: boolean;
}

export function TierBadge({ score, compact = false }: TierBadgeProps) {
  const tier = getTier(score);
  const display = Math.round(score * 1000);
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: compact ? 4 : 6,
      fontSize: compact ? 11 : 12, fontFamily: "'JetBrains Mono'",
      padding: compact ? "3px 8px" : "5px 12px",
      borderRadius: compact ? 5 : 8,
      background: tier.bg, border: `1px solid ${tier.border}`,
      color: tier.color, fontWeight: 500,
    }}>
      {tier.icon} {!compact && <span>{tier.label} &middot;</span>} {display}
    </span>
  );
}

export function getTierLabel(score: number): string {
  return getTier(score).label + " tier";
}
