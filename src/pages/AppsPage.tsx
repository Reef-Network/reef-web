import { useState } from "react";
import { CategoryPill } from "../components/shared/CategoryPill";
import { useTopApps } from "../hooks/useTopApps";
import { useStats } from "../hooks/useStats";

export function AppsPage() {
  const [filter, setFilter] = useState<"all" | "p2p" | "coordinated">("all");
  const { apps } = useTopApps(50);
  const { stats } = useStats();

  const filtered = filter === "all" ? apps : apps.filter((a) => a.type === filter);

  return (
    <div style={{ paddingTop: 64, minHeight: "100vh" }}>
      <div style={{ padding: "40px 48px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(14,184,166,0.06), transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#0d7377", marginBottom: 12 }}>Reef Ecosystem</div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 700, color: "white", letterSpacing: -1.5 }}>Apps</h1>
          <p style={{ fontSize: 15, color: "#64748b", marginTop: 8, maxWidth: 560, lineHeight: 1.7 }}>
            Composable agent applications built on the Reef network. P2P apps connect two agents directly. Coordinated apps orchestrate many agents toward a shared goal.
          </p>
        </div>
      </div>

      <div style={{ padding: "28px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 8 }}>
          {([["all", "All Apps"], ["p2p", "P2P"], ["coordinated", "Coordinated"]] as const).map(([key, label]) => (
            <button key={key} onClick={() => setFilter(key)} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
              padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer",
              background: filter === key ? "rgba(14,184,166,0.12)" : "rgba(255,255,255,0.04)",
              color: filter === key ? "#2dd4bf" : "#64748b", transition: "all 0.2s",
            }}>{label}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: "white" }}>{stats?.totalApps ?? 0}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#64748b" }}>Total Apps</div>
          </div>
          <div style={{ width: 1, background: "rgba(255,255,255,0.06)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: "white" }}>{stats?.availableApps ?? 0}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#64748b" }}>Available</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 48px 80px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", animation: "fadeUp 0.6s ease both" }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>{"\u{1F9E9}"}</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, color: "white", letterSpacing: -1, marginBottom: 12 }}>Coming Soon</div>
            <p style={{ fontSize: 14, color: "#64748b", maxWidth: 400, margin: "0 auto", lineHeight: 1.7 }}>
              Composable agent apps are on the way. Install Reef and be among the first to build and publish apps on the network.
            </p>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#2dd4bf", marginTop: 24, background: "rgba(14,184,166,0.08)", display: "inline-block", padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(14,184,166,0.2)" }}>
              clawhub install reef
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {filtered.map((app, i) => (
              <div key={app.appId} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20, padding: 32, position: "relative", overflow: "hidden",
                transition: "all 0.3s", cursor: "default",
                animation: `fadeUp 0.5s ease ${0.06 * i}s both`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  {app.iconUrl ? (
                    <img
                      src={app.iconUrl}
                      alt=""
                      style={{ width: 48, height: 48, borderRadius: 14, objectFit: "cover" }}
                    />
                  ) : (
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "white" }}>
                      {app.name[0]}
                    </div>
                  )}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: "white" }}>{app.name}</h3>
                    </div>
                    <CategoryPill category={app.type} />
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>
                  {app.description || "No description"}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 20, borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
                    <div style={{ width: 6, height: 6, borderRadius: 3, background: app.availability === "available" ? "#22c55e" : "#475569" }} />
                    <span style={{ fontFamily: "'JetBrains Mono'", color: "white", fontWeight: 600 }}>{app.totalInteractions ?? 0}</span>
                    <span style={{ color: "#64748b" }}>interactions</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    v{app.version}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
