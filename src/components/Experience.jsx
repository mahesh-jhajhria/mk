import React, { useState } from "react";
import FadeIn from "./FadeIn";
import { EXPERIENCE } from "../data/constants";

export default function Experience() {
  const [expJob, setExpJob] = useState(0);

  return (
    <section id="experience" style={{ padding: "130px 5%", background: "rgba(124,58,237,0.02)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="section-tag">WORK EXPERIENCE</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f172a" }}>Career <span className="gt">Timeline</span></h2>
          </div>
        </FadeIn>
        <div style={{ position: "relative" }}>
          <div className="hide-m" style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg,#7c3aed,#6366f1,#06b6d4)", transform: "translateX(-50%)", opacity: 0.15 }} />
          {EXPERIENCE.map((job, i) => (
            <FadeIn key={i} delay={i * 0.15} dir={i % 2 === 0 ? "left" : "right"}>
              <div style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: 40 }}>
                <div className="exp-half" style={{ width: "46%", cursor: "pointer" }} onClick={() => setExpJob(expJob === i ? -1 : i)}>
                  <div className="glass lift" style={{ borderRadius: 22, padding: "28px 26px", border: `1px solid ${job.color}25`, transition: "all 0.4s", background: "rgba(255,255,255,0.7)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: `${job.color}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0, border: `1px solid ${job.color}20` }}>{job.icon}</div>
                      <div>
                        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", color: job.color, letterSpacing: "0.12em", marginBottom: 3 }}>{job.period}</div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 900, letterSpacing: "-0.01em", color: "#1e293b" }}>{job.role}</h3>
                        <div style={{ color: "#64748b", fontSize: "0.8rem", fontFamily: "'DM Mono',monospace" }}>{job.company}</div>
                      </div>
                    </div>
                    <div style={{ color: job.color, fontSize: "0.68rem", fontFamily: "'DM Mono',monospace", letterSpacing: "0.08em" }}>{expJob === i ? "▲ COLLAPSE" : "▼ EXPAND"}</div>
                    {expJob === i && (
                      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8, animation: "slideDown 0.3s ease" }}>
                        {job.points.map((p, j) => (
                          <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.82rem", color: "#334155", lineHeight: 1.5 }}>
                            <span style={{ color: job.color, fontSize: "0.45rem", flexShrink: 0, marginTop: 6 }}>◆</span>{p}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
