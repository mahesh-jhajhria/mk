import React from "react";
import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <section id="vision" style={{ padding: "100px 5%", background: "linear-gradient(135deg,rgba(168,85,247,0.04),rgba(6,182,212,0.04))" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-tag">MY VISION</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em" }}>What Drives <span className="gt">Me</span></h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="g2">
          <FadeIn dir="left" delay={0.1}>
            <div className="glass lift" style={{ borderRadius: 24, padding: 40, border: "1px solid rgba(168,85,247,0.12)", height: "100%" }}>
              <div style={{ fontSize: "3rem", marginBottom: 20, animation: "float 4s ease-in-out infinite" }}>🎯</div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 14 }}>Mission</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.9rem" }}>
                To orchestrate groundbreaking campaigns that defy convention and ignite passion. With a relentless pursuit of innovation and a penchant for captivating storytelling, I craft marketing that moves people — and moves the needle.
              </p>
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.2}>
            <div className="glass lift" style={{ borderRadius: 24, padding: 40, border: "1px solid rgba(6,182,212,0.12)", height: "100%" }}>
              <div style={{ fontSize: "3rem", marginBottom: 20, animation: "float2 3.5s ease-in-out infinite" }}>🚀</div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 14 }}>Goal</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.9rem" }}>
                As a visionary Digital Marketing Manager, I aim to propel brands into the digital stratosphere — crafting unforgettable experiences that resonate with audiences worldwide and delivering measurable, repeatable ROI.
              </p>
            </div>
          </FadeIn>
        </div>
        {/* Award */}
        <FadeIn delay={0.3}>
          <div className="award-badge" style={{ marginTop: 32 }}>
            <div style={{ fontSize: "3rem", animation: "float 3s ease-in-out infinite", flexShrink: 0 }}>🏆</div>
            <div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", color: "#f59e0b", letterSpacing: "0.2em", marginBottom: 4 }}>ACHIEVEMENT</div>
              <div style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 4 }}>Outstanding Employee Award</div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Recognized for exceptional performance and dedication at OnePixelSoft — delivering campaigns that consistently exceed expectations and drive real business impact.</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
