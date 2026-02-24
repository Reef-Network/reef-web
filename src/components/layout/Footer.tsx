import { ReefLogoSmall } from "../shared/ReefLogo";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 48px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <ReefLogoSmall />
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 16, color: "rgba(255,255,255,0.4)" }}>Reef</span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", marginLeft: 8 }}>MIT License</span>
      </div>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontStyle: "italic", color: "rgba(255,255,255,0.2)" }}>
        Connect your claws.
      </div>
    </footer>
  );
}
