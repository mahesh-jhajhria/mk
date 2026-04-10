import React, { useState } from "react";
import FadeIn from "./FadeIn";
import CSCard from "./CSCard";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { ALL_CASES } from "../data/constants";

export default function Results({ onGo }) {
  const [filter, setFilter] = useState("All");
  const [statRef, statIn] = useInView();
  
  const v1 = useCountUp(250, 2000, statIn);
  const v2 = useCountUp(12, 2000, statIn);
  const v3 = useCountUp(5, 2000, statIn);
  const v4 = useCountUp(94, 2000, statIn);

  const filterMap = {
    "All": ALL_CASES,
    "Meta Ads": ALL_CASES.filter(c => c.platform === "meta"),
    "Google Ads": ALL_CASES.filter(c => c.platform === "google"),
    "SEO": ALL_CASES.filter(c => c.platform === "seo"),
    "GMB": ALL_CASES.filter(c => c.platform === "gmb"),
    "Organic": ALL_CASES.filter(c => c.platform === "organic")
  };
  
  const shown = filterMap[filter] || ALL_CASES;

  return (
    <>
      {/* ════ STATS COUNTER ════ */}
      <section style={{ padding: "80px 5%", background: "linear-gradient(135deg,rgba(124,58,237,0.03),rgba(6,182,212,0.02))" }}>
        <div ref={statRef} style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "center" }} className="stat-grid">
          {[[v1 + "+", "Campaigns"], [v2 + "+", "Brands"], [v3 + "+", "Years"], [v4 + "Cr", "Impressions"]].map(([n, l], i) => (
            <FadeIn key={l} delay={i * 0.1}>
              <div className="glass lift" style={{ borderRadius: 20, padding: "32px 20px", border: "1px solid rgba(124,58,237,0.08)", background: "rgba(255,255,255,0.7)" }}>
                <div className="gt" style={{ fontSize: "2.4rem", fontWeight: 900, fontFamily: "'DM Mono',monospace", lineHeight: 1 }}>{statIn ? n : "0"}</div>
                <div style={{ color: "#64748b", fontSize: "0.72rem", marginTop: 8, letterSpacing: "0.08em", fontFamily: "'DM Mono',monospace" }}>{l}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ════ REAL RESULTS ════ */}
      <section id="results" style={{ padding: "130px 5%", position: "relative", overflow: "hidden" }}>
        <div className="ornament" style={{ width: 500, height: 500, background: "radial-gradient(circle,rgba(124,58,237,0.05),transparent 70%)", top: "5%", left: "-8%" }} />
        <div className="ornament" style={{ width: 400, height: 400, background: "radial-gradient(circle,rgba(6,182,212,0.04),transparent 70%)", bottom: "5%", right: "-5%" }} />
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <span className="section-tag">CASE STUDIES · VERIFIED DATA</span>
              <h2 style={{ fontSize: "3.2rem", fontWeight: 900, lineHeight: 1.05, marginBottom: 14, letterSpacing: "-0.03em", color: "#0f172a" }}>
                Real Results.<br /><span className="gt">Real Numbers. Zero BS.</span>
              </h2>
              <p style={{ color: "#475569", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.75, fontSize: "0.9rem" }}>
                Every metric pulled directly from Meta Ads Manager, Google Ads, Search Console, GMB, and Facebook Insights. These are verified campaign results.
              </p>
            </div>
          </FadeIn>

          {/* Proof strip */}
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 38 }}>
              {[[ "📘", "Meta Ads", "9.42Cr impressions + 450 leads" ], [ "🔍", "Google Search Console", "35.2K clicks · 5.72M impressions" ], [ "📍", "Google My Business", "7,983 + 7,139 profile views" ], [ "🎯", "Google Ads", "1.9K+ clicks across clients" ], [ "🌱", "Facebook Insights", "100% organic reach campaigns" ]].map(([ic, tool, stat]) => (
                <div key={tool} className="glass" style={{ borderRadius: 12, padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(0,0,0,0.04)", cursor: "default", transition: "all 0.25s", background: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "none"; }}>
                  <span style={{ fontSize: "1rem" }}>{ic}</span>
                  <div>
                    <div style={{ fontSize: "0.6rem", color: "#7c3aed", fontFamily: "'DM Mono',monospace", letterSpacing: "0.1em" }}>{tool}</div>
                    <div style={{ fontSize: "0.73rem", color: "#64748b" }}>{stat}</div>
                  </div>
                </div>
      <div className="ornament" style={{ width: 600, height: 600, background: "radial-gradient(circle,rgba(6,182,212,0.08),transparent 70%)", top: "20%", left: "-10%" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="section-tag">CASE STUDIES</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: 16, letterSpacing: "-0.03em" }}>Proven <span className="gt">Growth</span></h2>
            <p style={{ color: "#64748b", margin: "0 auto", maxWidth: 600, fontSize: "0.9rem" }}>Data-backed results across various industries including Education, Real Estate, and Retail.</p>
          </div>
        </FadeIn>

        {/* Highlight Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 72 }} className="g4">
          {[["9.42Cr", "Total Impressions", "#a855f7"], ["250+", "Campaigns Managed", "#3b82f6"], ["₹10.09", "Lowest CPL Recorded", "#10b981"], ["100%", "Organic Reach Wins", "#f59e0b"]].map(([v, l, c]) => (
            <FadeIn key={l} delay={0.1}>
              <div className="glass lift" style={{ borderRadius: 20, padding: "26px 20px", textAlign: "center", border: `1px solid ${c}25`, background: "rgba(255,255,255,0.02)" }}>
                <MCard value={v} label={l} color={c} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
          {["All", "Organic", "Meta", "Google", "SEO", "GMB"].map(f => (
            <button key={f} className="filter-btn" onClick={() => setFilter(f.toLowerCase())}
              style={{ padding: "10px 24px", background: filter === f.toLowerCase() ? "rgba(168,85,247,0.15)" : "transparent", border: `1px solid ${filter === f.toLowerCase() ? "#a855f7" : "rgba(168,85,247,0.1)"}`, color: filter === f.toLowerCase() ? "#c084fc" : "#64748b", fontWeight: 700 }}>
              {f}
            </button>
          ))}
        </div>

        {/* Case Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="g2">
          {filtered.map((cs, i) => (
            <FadeIn key={cs.id} delay={i * 0.1}>
              <CSCard data={cs} />
            </FadeIn>
          ))}
        </div>

        {/* CTA Card */}
        <FadeIn delay={0.4}>
          <div className="glass lift" style={{ marginTop: 80, borderRadius: 32, padding: "64px 40px", textAlign: "center", position: "relative", overflow: "hidden", border: "1px solid rgba(168,85,247,0.2)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center,rgba(168,85,247,0.08),transparent 70%)" }} />
            <h3 style={{ fontSize: "2.4rem", fontWeight: 900, marginBottom: 18, position: "relative" }}>Ready to be my next <span className="gt">Success Story?</span></h3>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: 650, margin: "0 auto 36px", position: "relative" }}>Let's build a tailored strategy to scale your brand and dominate your niche using advanced digital tactics.</p>
            <button className="glow-cta" onClick={() => onGo("contact")} style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)", border: "none", color: "#fff", padding: "18px 48px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", cursor: "pointer", position: "relative" }}>
              🚀 Start Your Growth Journey
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
    </>
  );
}
