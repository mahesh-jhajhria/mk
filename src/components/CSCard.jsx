import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import MCard from "./MCard";

export default function CSCard({ cs, idx }) {
  const [open, setOpen] = useState(false);
  const [ref, inV] = useInView();
  const platMap = {
    meta: {
      bg: "#1877F220",
      border: "#1877F250",
      color: "#60a5fa",
      label: "Meta Ads",
    },
    google: {
      bg: "#4285F420",
      border: "#4285F450",
      color: "#93c5fd",
      label: "Google Ads",
    },
    seo: {
      bg: "#34A85320",
      border: "#34A85350",
      color: "#4ade80",
      label: "SEO / Search Console",
    },
    gmb: {
      bg: "#FBBC0520",
      border: "#FBBC0550",
      color: "#fbbf24",
      label: "Google My Business",
    },
    organic: {
      bg: "#a855f720",
      border: "#a855f750",
      color: "#c084fc",
      label: "Organic Social",
    },
  };
  const pl = platMap[cs.platform] || platMap.google;

  return (
    <div
      ref={ref}
      style={{
        opacity: inV ? 1 : 0,
        transform: inV ? "none" : "translateY(56px)",
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${idx * 0.1}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${idx * 0.1}s`,
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(24px)",
          border: `1px solid ${cs.color}15`,
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: open ? `0 24px 80px rgba(0,0,0,0.06)` : "0 4px 20px rgba(0,0,0,0.02)",
          transition: "all 0.4s",
        }}
      >
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg,${cs.color},${cs.color}60,transparent)`,
          }}
        />
        <div style={{ padding: "28px 26px 24px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              marginBottom: 18,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: `${cs.color}0a`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.7rem",
                flexShrink: 0,
                border: `1px solid ${cs.color}15`,
              }}
            >
              {cs.icon}
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 7,
                }}
              >
                <h3
                  style={{
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    color: "#0f172a",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cs.title}
                </h3>
                <span
                  style={{
                    background: `${cs.color}0c`,
                    border: `1px solid ${cs.color}25`,
                    borderRadius: 50,
                    padding: "2px 10px",
                    fontSize: "0.6rem",
                    color: cs.color,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  {cs.badge}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    background: pl.bg,
                    border: `1px solid ${pl.border}`,
                    borderRadius: 50,
                    padding: "3px 12px",
                    fontSize: "0.65rem",
                    color: pl.color,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  {pl.label}
                </span>
                <span
                  style={{
                    fontSize: "0.63rem",
                    color: "#64748b",
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  {cs.subtitle}
                </span>
              </div>
            </div>
          </div>
          {/* KPI strip */}
          <div
            style={{
              background: `${cs.color}08`,
              border: `1px solid ${cs.color}14`,
              borderRadius: 12,
              padding: "12px 16px",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: "0.58rem",
                color: "#64748b",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "'DM Mono',monospace",
                marginBottom: 3,
              }}
            >
              KEY RESULT
            </div>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 900,
                color: cs.color,
                letterSpacing: "-0.02em",
              }}
            >
              {cs.badge.replace(/^[^\s]+\s/, "")}
            </div>
          </div>
          {/* Metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 9,
              marginBottom: 16,
            }}
          >
            {cs.metrics.map((m, i) => (
              <MCard key={i} m={m} color={cs.color} i={i} />
            ))}
          </div>
          <p
            style={{
              color: "#334155",
              fontSize: "0.84rem",
              lineHeight: 1.78,
              marginBottom: 14,
            }}
          >
            {cs.detail}
          </p>
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              background: "none",
              border: `1px solid ${cs.color}25`,
              borderRadius: 50,
              padding: "7px 18px",
              color: cs.color,
              fontSize: "0.7rem",
              cursor: "pointer",
              fontFamily: "'DM Mono',monospace",
              transition: "background 0.25s",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = `${cs.color}0a`)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
          >
            {open ? "▲ Hide Breakdown" : "▼ View Breakdown"}
          </button>
          {open && (
            <div
              style={{
                marginTop: 14,
                borderTop: `1px solid ${cs.color}0c`,
                paddingTop: 14,
              }}
            >
              <div
                style={{
                  fontSize: "0.6rem",
                  color: "#64748b",
                  letterSpacing: "0.2em",
                  marginBottom: 10,
                  fontFamily: "'DM Mono',monospace",
                }}
              >
                FULL BREAKDOWN
              </div>
              {cs.breakdown.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    fontSize: "0.8rem",
                    color: "#475569",
                    marginBottom: 7,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: cs.color,
                      fontSize: "0.45rem",
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  >
                    ◆
                  </span>
                  {b}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
