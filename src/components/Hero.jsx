import React from "react";
import Particles from "./Particles";
import Typewriter from "./Typewriter";
import { HERO_TAGS } from "../data/constants";

export default function Hero({ onGo }) {
  return (
    <section 
      id="home" 
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 5% 40px"
      }}
    >
      <Particles />
      <div className="mesh" style={{ position: "absolute", inset: 0 }} />
      {/* Orbs */}
      <div 
        className="ornament" 
        style={{ width: 600, height: 600, background: "radial-gradient(circle,rgba(168,85,247,0.12),transparent 70%)", top: "-10%", right: "-10%" }} 
      />
      <div 
        className="ornament" 
        style={{ width: 400, height: 400, background: "radial-gradient(circle,rgba(6,182,212,0.1),transparent 70%)", bottom: "5%", left: "-5%" }} 
      />
      <div 
        className="ornament" 
        style={{ width: 300, height: 300, background: "radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)", top: "50%", left: "30%" }} 
      />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 980, width: "100%" }}>
        {/* Status pill */}
        <div 
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.35)",
            borderRadius: 50,
            padding: "8px 22px",
            marginBottom: 36,
            animation: "glowPulse 4s ease-in-out infinite"
          }}
        >
          <div 
            style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "shimmer 2s ease-in-out infinite" }} 
          />
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.7rem", color: "#c084fc", letterSpacing: "0.18em" }}>
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Name */}
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", color: "#64748b", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 12 }}>
          Hello, I'm
        </div>
        <h1 className="hero-h" style={{ fontSize: "5.5rem", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 16 }}>
          <span className="gt">Manish Kumar</span>
        </h1>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#334155", marginBottom: 8, letterSpacing: "-0.02em" }}>
          YOUR <span style={{ color: "#c084fc" }}>DIGITAL MARKETING</span> EXPERT
        </h2>
        <div style={{ fontSize: "1.1rem", fontFamily: "'DM Mono',monospace", minHeight: "1.8em", marginBottom: 10 }}>
          <Typewriter texts={["Meta Ads Expert 📘", "GMB Specialist 📍", "Lead Generation Pro 🎯", "SEO Strategist 🔍", "Organic Growth Hacker 🌱", "Performance Marketer ⚡"]} />
        </div>
        <p style={{ color: "#475569", fontSize: "1rem", maxWidth: 580, margin: "12px auto 44px", lineHeight: 1.75 }}>
          "Hello, I'm Manish, your dedicated Digital Marketing and Social Media Strategist." — <strong style={{ color: "#c084fc" }}>5+ years</strong> · <strong style={{ color: "#67e8f9" }}>250+ campaigns</strong> · <strong style={{ color: "#4ade80" }}>12+ brands</strong>
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          <button className="glow-cta" onClick={() => onGo("results")} style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)", border: "none", color: "#fff", padding: "16px 38px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1rem", cursor: "pointer", animation: "glowPulse 3s ease-in-out infinite" }}>
            📊 See Real Results
          </button>
          <button className="glow-cta" onClick={() => onGo("contact")} style={{ background: "transparent", border: "1px solid rgba(168,85,247,0.5)", color: "#e2e8f0", padding: "16px 38px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1rem", cursor: "pointer" }}>
            💬 Let's Talk →
          </button>
        </div>

        {/* Hero stats */}
        <div style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
          {[["3+", "Years Exp"], ["250+", "Campaigns"], ["9.42Cr", "Impressions"], ["₹10.09", "Lowest CPL"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div className="gt" style={{ fontSize: "2.2rem", fontWeight: 900, fontFamily: "'DM Mono',monospace", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: "0.68rem", color: "#475569", letterSpacing: "0.12em", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Scrolling tags */}
        <div className="tag-scroll-wrap">
          <div className="tag-scroll">
            {[...HERO_TAGS, ...HERO_TAGS].map((t, i) => (
              <span key={i} style={{ background: "rgba(168,85,247,0.09)", border: "1px solid rgba(168,85,247,0.22)", borderRadius: 50, padding: "7px 18px", fontSize: "0.75rem", color: "#a78bfa", whiteSpace: "nowrap", fontFamily: "'DM Mono',monospace" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", animation: "float 2.5s ease-in-out infinite", cursor: "pointer" }} onClick={() => onGo("about")}>
        <div style={{ width: 26, height: 44, border: "2px solid rgba(168,85,247,0.4)", borderRadius: 13, display: "flex", justifyContent: "center", paddingTop: 7 }}>
          <div style={{ width: 4, height: 9, background: "linear-gradient(180deg,#a855f7,#06b6d4)", borderRadius: 2 }} />
        </div>
      </div>
    </section>
  );
}
