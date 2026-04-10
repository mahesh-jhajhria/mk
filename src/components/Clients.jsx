import React from "react";
import FadeIn from "./FadeIn";
import { CLIENTS, TOOLS, RECOMMENDATIONS } from "../data/constants";

export default function Clients() {
  return (
    <>
      {/* ════ CLIENTS ════ */}
      <section id="clients" style={{ padding: "130px 5%", background: "rgba(124,58,237,0.01)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <span className="section-tag">PROJECT PORTFOLIO</span>
              <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f172a" }}>Brands I've <span className="gt">Grown</span></h2>
              <p style={{ color: "#64748b", marginTop: 12, fontSize: "0.88rem" }}>From startups to established brands — across education, retail, healthcare & real estate</p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="g3">
            {CLIENTS.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.05}>
                <div className="glass lift" style={{ borderRadius: 18, padding: "24px 22px", border: `1px solid ${c.color}14`, position: "relative", overflow: "hidden", background: "rgba(255,255,255,0.7)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${c.color},${c.color}50,transparent)` }} />
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${c.color}0a`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, fontSize: "1.4rem", flexShrink: 0 }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 900, marginBottom: 5, fontSize: "1rem", color: "#1e293b" }}>{c.name}</h3>
                  <div style={{ fontSize: "0.72rem", color: "#64748b", marginBottom: 14, lineHeight: 1.5 }}>{c.tag}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {c.tag.split("·").map(t => (
                      <span key={t} style={{ background: `${c.color}08`, border: `1px solid ${c.color}15`, borderRadius: 50, padding: "3px 9px", fontSize: "0.6rem", color: c.color, fontFamily: "'DM Mono',monospace" }}>{t.trim()}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TOOLS ════ */}
      <section style={{ padding: "120px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <span className="section-tag">TOOLBOX</span>
              <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f172a" }}>Tools & <span className="gt">Platforms</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="g4">
            {TOOLS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <div className="glass lift" style={{ borderRadius: 16, padding: "22px 16px", textAlign: "center", border: `1px solid ${t.color}14`, background: "rgba(255,255,255,0.6)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 9 }}>{t.icon}</div>
                  <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "#1e293b", lineHeight: 1.3 }}>{t.name}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════ RECOMMENDATION ════ */}
      <section style={{ padding: "100px 5%", background: "linear-gradient(135deg,rgba(124,58,237,0.03),rgba(6,182,212,0.02))" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-tag">RECOMMENDATION</span>
              <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f172a" }}>What People <span className="gt">Say</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22 }} className="g2">
            {RECOMMENDATIONS.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.12}>
                <div className="glass lift" style={{ borderRadius: 22, padding: "28px 26px", border: `1px solid ${r.color}16`, position: "relative", overflow: "hidden", background: "rgba(255,255,255,0.8)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${r.color},transparent)` }} />
                  <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                    {Array(r.stars).fill(0).map((_, j) => <span key={j} style={{ color: "#f59e0b", fontSize: "1rem" }}>★</span>)}
                  </div>
                  <p style={{ color: "#334155", lineHeight: 1.8, fontSize: "0.85rem", marginBottom: 20, fontStyle: "italic" }}>"{r.quote}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${r.color}0a`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", border: `1px solid ${r.color}15`, color: r.color }}>💼</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#1e293b" }}>{r.name}</div>
                      <div style={{ color: "#64748b", fontSize: "0.72rem", fontFamily: "'DM Mono',monospace" }}>{r.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
