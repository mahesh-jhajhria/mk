import React, { useState, useEffect } from "react";

export default function ScrollBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (s / h) * 100 : 0);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(90deg,#a855f7,#6366f1,#06b6d4)",
          transition: "width 0.08s linear",
          boxShadow: "0 0 12px #a855f7",
        }}
      />
    </div>
  );
}
