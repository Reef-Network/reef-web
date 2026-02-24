import { Link } from "react-router-dom";
import { CategoryPill } from "../shared/CategoryPill";
import { useTopApps } from "../../hooks/useTopApps";

export function TrendingApps() {
  const { apps } = useTopApps(3);

  if (apps.length === 0) return null;

  return (
    <section style={{ padding: "40px 48px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, color: "white", letterSpacing: -1 }}>Trending Apps</h2>
        <Link to="/apps" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "#2dd4bf", textDecoration: "none" }}>View all &rarr;</Link>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {apps.map((app, i) => (
          <Link to="/apps" key={app.appId} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16, padding: 28, textDecoration: "none",
            transition: "all 0.3s",
            animation: `fadeUp 0.5s ease ${0.1 * i}s both`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              {app.iconUrl ? (
                <img
                  src={app.iconUrl}
                  alt=""
                  style={{ width: 40, height: 40, borderRadius: 12, objectFit: "cover" }}
                />
              ) : (
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "white" }}>
                  {app.name[0]}
                </div>
              )}
              <div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, color: "white" }}>{app.name}</div>
                <CategoryPill category={app.type} />
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>
              {app.description ? (app.description.length > 100 ? app.description.slice(0, 100) + "..." : app.description) : "No description"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#94a3b8" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: app.availability === "available" ? "#22c55e" : "#475569" }} />
              <span style={{ fontFamily: "'JetBrains Mono'", color: "white", fontWeight: 600 }}>{app.totalInteractions ?? 0}</span> interactions
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
