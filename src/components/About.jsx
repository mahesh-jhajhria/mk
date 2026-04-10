import React from "react";
import FadeIn from "./FadeIn";
import { SOCIAL } from "../data/constants";

export default function About() {
  return (
    <section id="about" style={{ padding: "130px 5%", position: "relative", overflow: "hidden" }}>
      <div className="ornament" style={{ width: 500, height: 500, background: "radial-gradient(circle,rgba(168,85,247,0.08),transparent 70%)", top: "10%", right: "-8%" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="g2">
        <FadeIn dir="left">
          {/* Photo card */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -3, background: "linear-gradient(135deg,#a855f7,#6366f1,#06b6d4)", borderRadius: 28, zIndex: 0, animation: "glowPulse 4s ease-in-out infinite" }} />
            <div className="glass" style={{ position: "relative", zIndex: 1, borderRadius: 26, padding: "44px 40px", background: "rgba(4,4,10,0.9)" }}>
              {/* Avatar placeholder with initials */}
              <div style={{ width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg,#a855f7,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.4rem", fontWeight: 900, color: "#fff", marginBottom: 24, fontFamily: "'DM Mono',monospace", boxShadow: "0 0 40px #a855f750" }}>MK</div>
              <div style={{ fontFamily: "'DM Mono',monospace", color: "#a855f7", fontSize: "0.65rem", letterSpacing: "0.25em", marginBottom: 6 }}>DIGITAL MARKETING MANAGER</div>
              <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 6, letterSpacing: "-0.02em" }}>Manish Kumar</h3>
              <div style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: 20, fontFamily: "'DM Mono',monospace" }}>OnePixelSoft · Pilani, Rajasthan 📍</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
                {["Creative", "Data-Driven", "Results-First"].map(t => (
                  <span key={t} style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 50, padding: "5px 16px", fontSize: "0.72rem", color: "#c084fc", fontFamily: "'DM Mono',monospace" }}>{t}</span>
                ))}
              </div>
              {/* Social icons */}
              <div style={{ display: "flex", gap: 10 }}>
                {[[SOCIAL.facebook, "f", "#1877F2"], [SOCIAL.instagram, "in", "#E1306C"], [SOCIAL.linkedin, "li", "#0A66C2"]].map(([url, label, c]) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <div 
                      style={{ width: 38, height: 38, borderRadius: 10, background: `${c}20`, border: `1px solid ${c}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: c, fontFamily: "'DM Mono',monospace", fontWeight: 700, transition: "all 0.25s", cursor: "pointer" }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${c}35`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${c}20`; e.currentTarget.style.transform = "none"; }}
                    >
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn dir="right" delay={0.2}>
          <span className="section-tag">ABOUT ME</span>
          <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: 24, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            The Mind Behind<br />the <span className="gt">Growth</span>
          </h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.85, marginBottom: 20, fontSize: "0.92rem" }}>
            Discover my portfolio where digital strategies transform into success stories. With a flair for innovation and a data-driven approach, I specialize in crafting compelling campaigns that captivate audiences and drive growth.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.85, marginBottom: 32, fontSize: "0.92rem" }}>
            Let's explore the possibilities together and elevate your brand to new heights. Every click tracked. Every rupee justified. Every campaign optimized for maximum ROI.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[["📍", "Location", "Pilani, Rajasthan"], ["📞", "Phone", "+91 8949957273"], ["📧", "Email", "Manishinpilani@gmail.com"], ["🏢", "Company", "OnePixelSoft"], ["💼", "Experience", "3+ Years"], ["🏆", "Award", "Outstanding Employee"]].map(([ic, l, v]) => (
              <div key={l} className="glass lift" style={{ borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(168,85,247,0.09)" }}>
                <div style={{ fontSize: "1rem", marginBottom: 3 }}>{ic}</div>
                <div style={{ fontSize: "0.6rem", color: "#64748b", letterSpacing: "0.12em", fontFamily: "'DM Mono',monospace" }}>{l}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#e2e8f0" }}>{v}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
