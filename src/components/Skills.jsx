import React from "react";
import FadeIn from "./FadeIn";
import { useInView } from "../hooks/useInView";
import { SKILLS_LIST } from "../data/constants";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "130px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="section-tag">PERSONAL SKILLS</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f172a" }}>Skills & <span className="gt">Expertise</span></h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }} className="g2">
          {SKILLS_LIST.map((s, i) => {
            const [ref, inV] = useInView();
            return (
              <FadeIn key={s.name} delay={i * 0.06}>
                <div ref={ref} className="glass lift" style={{ borderRadius: 16, padding: "20px 22px", border: `1px solid ${s.color}20`, background: "rgba(255,255,255,0.6)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: `${s.color}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{s.icon}</div>
                      <span style={{ fontWeight: 800, fontSize: "0.92rem", color: "#1e293b" }}>{s.name}</span>
                    </div>
                    <span style={{ color: s.color, fontFamily: "'DM Mono',monospace", fontWeight: 700, fontSize: "0.88rem" }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 5, background: "rgba(0,0,0,0.05)", borderRadius: 3, overflow: "hidden" }}>
                    <div className="skill-fill" style={{ height: "100%", width: inV ? `${s.level}%` : "0%", background: `linear-gradient(90deg,${s.color},${s.color}dd)`, borderRadius: 3, boxShadow: `0 0 10px ${s.color}30` }} />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
