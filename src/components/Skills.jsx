import React from "react";
import FadeIn from "./FadeIn";
import { SKILLS_LIST } from "../data/constants";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "130px 5%", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="section-tag">MY SKILLS</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em" }}>Core <span className="gt">Competencies</span></h2>
          </div>
        </FadeIn>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="g2">
          {SKILLS_LIST.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.08}>
              <div className="glass lift" style={{ borderRadius: 24, padding: "34px 30px", border: `1px solid ${s.color}25` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: "1.6rem" }}>{s.icon}</span>
                    <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>{s.name}</span>
                  </div>
                  <span style={{ fontFamily: "'DM Mono',monospace", color: s.color, fontWeight: 900 }}>{s.level}%</span>
                </div>
                {/* Progress bar */}
                <div style={{ height: 8, background: "rgba(255,255,255,0.05)", borderRadius: 10, overflow: "hidden" }}>
                  <div className="skill-fill" style={{ width: `${s.level}%`, height: "100%", background: `linear-gradient(90deg,${s.color},#6366f1)`, boxShadow: `0 0 15px ${s.color}50` }} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
