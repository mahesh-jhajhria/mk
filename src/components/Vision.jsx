import React from "react";
import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <section id="vision" style={{ padding: "100px 5%", background: "linear-gradient(135deg,rgba(124,58,237,0.02),rgba(6,182,212,0.02))" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-tag">MY VISION</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f172a" }}>What Drives <span className="gt">Me</span></h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="g2">
          <FadeIn dir="left" delay={0.1}>
            <div className="glass lift" style={{ borderRadius: 24, padding: 40, border: "1px solid rgba(124,58,237,0.08)", height: "100%", background: "rgba(255,255,255,0.6)" }}>
              <div style={{ fontSize: "3rem", marginBottom: 20, animation: "float 4s ease-in-out infinite" }}>🎯</div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 14, color: "#1e293b" }}>Mission</h3>
              <p style={{ color: "#334155", lineHeight: 1.8, fontSize: "0.9rem" }}>
                To orchestrate groundbreaking campaigns that defy convention and ignite passion. With a relentless pursuit of innovation and a penchant for captivating storytelling, I craft marketing that moves people — and moves the needle.
              </p>
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.2}>
            <div className="glass lift" style={{ borderRadius: 24, padding: 40, border: "1px solid rgba(6,182,212,0.08)", height: "100%", background: "rgba(255,255,255,0.6)" }}>
              <div style={{ fontSize: "3rem", marginBottom: 20, animation: "float2 3.5s ease-in-out infinite" }}>🚀</div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 14, color: "#1e293b" }}>Goal</h3>
              <p style={{ color: "#334155", lineHeight: 1.8, fontSize: "0.9rem" }}>
                As a visionary Digital Marketing Manager, I aim to propel brands into the digital stratosphere — crafting unforgettable experiences that resonate with audiences worldwide and delivering measurable, repeatable ROI.
              </p>
            </div>
          </FadeIn>
        </div>
        {/* Award */}
        <FadeIn delay={0.3}>
          <div className="award-badge" style={{ marginTop: 32, background: "linear-gradient(135deg,rgba(245,158,11,0.05),rgba(239,68,68,0.05))", border: "1px solid rgba(245,158,11,0.15)" }}>
            <div style={{ fontSize: "3rem", animation: "float 3s ease-in-out infinite", flexShrink: 0 }}>🏆</div>
            <div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", color: "#d97706", letterSpacing: "0.2em", marginBottom: 4 }}>ACHIEVEMENT</div>
              <div style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 4, color: "#1e293b" }}>Outstanding Employee Award</div>
              <div style={{ color: "#475569", fontSize: "0.85rem" }}>Recognized for exceptional performance and dedication at OnePixelSoft — delivering campaigns that consistently exceed expectations and drive real business impact.</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
