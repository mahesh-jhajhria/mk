import React from "react";
import { useInView } from "../hooks/useInView";

export default function MCard({ m, color, i }) {
  const [ref, inV] = useInView();
  return (
    <div
      ref={ref}
      style={{
        background: `${color}06`,
        border: `1px solid ${color}1c`,
        borderRadius: 16,
        padding: "18px 14px",
        textAlign: "center",
        opacity: inV ? 1 : 0,
        transform: inV ? "none" : "translateY(24px)",
        transition: `opacity 0.5s ease ${i * 0.09}s, transform 0.5s ease ${i * 0.09}s`,
      }}
    >
      <div style={{ fontSize: "1.6rem", marginBottom: 5 }}>{m.icon}</div>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: 900,
          color,
          fontFamily: "'DM Mono',monospace",
          lineHeight: 1.1,
        }}
      >
        {m.value}
      </div>
      <div
        style={{
          fontSize: "0.72rem",
          color: "#475569",
          fontWeight: 700,
          marginTop: 5,
          lineHeight: 1.3,
        }}
      >
        {m.label}
      </div>
      <div style={{ fontSize: "0.62rem", color: "#94a3b8", marginTop: 3 }}>
        {m.sub}
      </div>
    </div>
  );
}
