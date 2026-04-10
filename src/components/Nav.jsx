import React from "react";
import { SOCIAL, NAV } from "../data/constants";

export default function Nav({ scrolled, onGo }) {
  return (
    <nav 
      style={{
        position: "fixed",
        top: 3,
        left: 0,
        right: 0,
        zIndex: 600,
        padding: "0 4%",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(4,4,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.1)" : "none",
        transition: "all 0.5s"
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => onGo("home")}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#a855f7,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 900, color: "#fff", fontFamily: "'DM Mono',monospace", boxShadow: "0 0 20px #a855f750" }}>M</div>
        <div style={{ fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "0.78rem" }}>
          <div style={{ color: "#c084fc", letterSpacing: "0.05em" }}>MANISH KUMAR</div>
          <div style={{ color: "#64748b", fontSize: "0.6rem", letterSpacing: "0.1em" }}>DIGITAL MARKETING</div>
        </div>
      </div>
      {/* Desktop links */}
      <div className="hide-m" style={{ display: "flex", gap: 4 }}>
        {NAV.map(n => (
          <button key={n} className="nav-pill" onClick={() => onGo(n.toLowerCase())} style={{ color: "#94a3b8" }}>
            {n}
          </button>
        ))}
      </div>
      {/* CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <button className="glow-cta" style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)", border: "none", color: "#fff", padding: "9px 20px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.78rem", cursor: "pointer" }}>
            Hire Me 🚀
          </button>
        </a>
      </div>
    </nav>
  );
}
