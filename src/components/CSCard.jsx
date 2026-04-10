import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import MCard from "./MCard";

export default function CSCard({ cs: data, idx }) {
  const [open, setOpen] = useState(false);
  const [ref, inV] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inV ? 1 : 0,
        transform: inV ? "none" : "translateY(40px)",
        transition: `opacity 0.7s ease-out ${idx * 0.1}s, transform 0.7s ease-out ${idx * 0.1}s`,
      }}
    >
      <div className="glass lift" style={{ borderRadius: 28, height: "100%", overflow: "hidden", display: "flex", flexDirection: "column", border: `1px solid ${data.color}25` }}>
        {/* Visual Header */}
        <div style={{ height: 160, background: `linear-gradient(135deg, ${data.color}dd, ${data.color}33)`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1, background: "radial-gradient(circle at 70% 30%, white, transparent)" }} />
          <div style={{ fontSize: "5rem", opacity: 0.2, transform: "rotate(-10deg) scale(1.5)" }}>{data.icon}</div>
          <div 
            style={{ 
              position: "absolute", bottom: 16, left: 16, right: 16, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", padding: "10px 16px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: 10
            }}
          >
            <div style={{ fontSize: "1.5rem" }}>{data.icon}</div>
            <div>
              <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", fontWeight: 700 }}>{data.platform.toUpperCase()} STRATEGY</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#fff" }}>{data.title}</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div style={{ fontSize: "0.7rem", color: "#64748b", fontFamily: "'DM Mono',monospace", lineHeight: 1.4 }}>{data.subtitle}</div>
            <div style={{ background: `${data.color}20`, color: data.color, padding: "5px 12px", borderRadius: 50, fontSize: "0.62rem", fontWeight: 800, border: `1px solid ${data.color}40`, whiteSpace: "nowrap" }}>{data.badge}</div>
          </div>

          {/* KPIs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 20 }}>
            {data.metrics.map((m, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "12px" }}>
                <div style={{ fontSize: "0.58rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{m.label}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                  <div style={{ fontSize: "1rem", fontWeight: 900, color: "#e2e8f0" }}>{m.value}</div>
                  <div style={{ fontSize: "0.55rem", color: data.color, fontWeight: 700 }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: "#94a3b8", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: 20 }}>{data.detail}</p>

          {/* Action Toggle */}
          <div style={{ marginTop: "auto" }}>
            <button 
              onClick={() => setOpen(!open)}
              style={{ width: "100%", background: open ? "rgba(255,255,255,0.05)" : "transparent", border: `1px solid ${data.color}40`, padding: "10px", borderRadius: 12, color: data.color, cursor: "pointer", transition: "all 0.3s", fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.05em" }}
            >
              {open ? "CLOSE DETAILS ▲" : "VIEW BREAKDOWN ▼"}
            </button>

            {open && (
              <div style={{ marginTop: 12, background: "rgba(0,0,0,0.2)", borderRadius: 12, padding: 16, animation: "slideDown 0.4s ease" }}>
                {data.breakdown.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, fontSize: "0.75rem", color: "#94a3b8", marginBottom: 6, lineHeight: 1.5 }}>
                    <span style={{ color: data.color, marginTop: 2 }}>🎯</span> {b}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
