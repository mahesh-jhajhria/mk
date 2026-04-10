import React, { useState } from "react";
import FadeIn from "./FadeIn";
import { EXPERIENCE } from "../data/constants";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "130px 5%", background: "rgba(168,85,247,0.015)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="section-tag">MY JOURNEY</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em" }}>Professional <span className="gt">Timeline</span></h2>
          </div>
        </FadeIn>
        
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg,#a855f720,#a855f7,rgba(168,85,247,0.1))", borderRadius: 1 }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={e.role + i} delay={i * 0.1}>
                <div style={{ position: "relative", paddingLeft: 60 }}>
                  <div style={{ position: "absolute", left: 0, top: 10, width: 38, height: 38, borderRadius: "50%", background: "#07070f", border: "2px solid #a855f7", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, boxShadow: "0 0 15px #a855f740" }}>
                    <span style={{ fontSize: "1.1rem" }}>💼</span>
                  </div>
                  <div className="glass lift" style={{ borderRadius: 24, padding: "32px 36px", border: "1px solid rgba(168,85,247,0.12)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 10 }}>
                      <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 4 }}>{e.role}</h3>
                        <div style={{ color: "#a855f7", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'DM Mono',monospace" }}>{e.company}</div>
                      </div>
                      <div style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 50, padding: "6px 18px", fontSize: "0.72rem", color: "#c084fc", fontWeight: 700, height: "fit-content", fontFamily: "'DM Mono',monospace" }}>
                        {e.period}
                      </div>
                    </div>
                    <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.9rem" }}>
                      {e.points.map((p, j) => (
                        <span key={j} style={{ display: "block", marginBottom: 4 }}>• {p}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
