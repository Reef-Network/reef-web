interface CategoryPillProps {
  category: "p2p" | "coordinated" | string;
}

export function CategoryPill({ category }: CategoryPillProps) {
  const isP2P = category === "p2p";
  return (
    <span style={{
      fontFamily: "'JetBrains Mono'", fontSize: 10, letterSpacing: 1,
      textTransform: "uppercase", fontWeight: 500,
      padding: "4px 10px", borderRadius: 6,
      background: isP2P ? "rgba(249,112,102,0.1)" : "rgba(14,184,166,0.1)",
      color: isP2P ? "#fb9a8d" : "#2dd4bf",
      border: `1px solid ${isP2P ? "rgba(249,112,102,0.2)" : "rgba(14,184,166,0.2)"}`,
    }}>
      {isP2P ? "P2P" : "Coordinated"}
    </span>
  );
}
