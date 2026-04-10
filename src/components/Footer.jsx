import React from "react";
import { SOCIAL } from "../data/constants";

export default function Footer() {
  return (
    <footer style={{ padding: "48px 5%", borderTop: "1px solid rgba(124,58,237,0.08)", background: "#f1f5f9", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 200, background: "radial-gradient(ellipse,rgba(124,58,237,0.03),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, position: "relative", zIndex: 1 }}>
        <div>
          <div className="gt" style={{ fontFamily: "'DM Mono',monospace", fontWeight: 900, fontSize: "1.1rem", marginBottom: 4 }}>Manish Kumar</div>
          <div style={{ color: "#64748b", fontSize: "0.75rem", fontFamily: "'DM Mono',monospace" }}>Digital Marketing Manager · OnePixelSoft · Pilani, Rajasthan</div>
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {[[SOCIAL.facebook, "📘"], [SOCIAL.instagram, "📸"], [SOCIAL.linkedin, "💼"]].map(([url, ic]) => (
            <a key={url} href={url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontSize: "1.3rem", opacity: 0.5, transition: "opacity 0.25s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "1"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.5"}>{ic}</a>
          ))}
        </div>
        <div style={{ color: "#475569", fontSize: "0.7rem", fontFamily: "'DM Mono',monospace" }}>© 2026 · Every number on this site is real, verified & earned.</div>
      </div>
      {/* WhatsApp float */}
      <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" className="wa-btn"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 54, height: 54, borderRadius: "50%", background: "#22c55e", fontSize: "1.6rem", boxShadow: "0 6px 30px rgba(34,197,94,0.4)" }}>
        💬
      </a>
    </footer>
  );
}
