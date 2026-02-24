import { Link, useLocation } from "react-router-dom";
import { ReefLogoSmall } from "../shared/ReefLogo";
import { GITHUB_URL } from "../../lib/constants";

export function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/apps", label: "Apps" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(6,14,26,0.85)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "0 48px", height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <ReefLogoSmall />
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: "white", letterSpacing: -0.5 }}>Reef</span>
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {navItems.map(({ to, label }) => (
          <Link key={to} to={to} style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
            padding: "8px 16px", borderRadius: 8, textDecoration: "none",
            background: pathname === to ? "rgba(14,184,166,0.12)" : "transparent",
            color: pathname === to ? "#2dd4bf" : "rgba(255,255,255,0.45)",
            transition: "all 0.2s ease",
          }}>{label}</Link>
        ))}
        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.08)", margin: "0 8px" }} />
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500,
          padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(14,184,166,0.3)",
          color: "#2dd4bf", textDecoration: "none", letterSpacing: 0.5,
        }}>GitHub</a>
      </div>
    </nav>
  );
}
