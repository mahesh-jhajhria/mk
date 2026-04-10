import React, { useState } from "react";
import FadeIn from "./FadeIn";
import { SOCIAL } from "../data/constants";

export default function Contact({ onGo }) {
  const [form, setForm] = useState({ name: "", email: "", msg: "", phone: "" });
  const [sent, setSent] = useState(false);

  const inp = (extra = {}) => ({
    ...{
      width: "100%",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(168,85,247,0.2)",
      borderRadius: 12,
      padding: "14px 18px",
      color: "#e2e8f0",
      fontSize: "0.88rem",
      outline: "none",
      fontFamily: "'Syne',sans-serif",
      boxSizing: "border-box",
    },
    ...extra,
  });

  return (
    <section id="contact" style={{ padding: "130px 5%", position: "relative", overflow: "hidden" }}>
      <div className="ornament" style={{ width: 500, height: 500, background: "radial-gradient(circle,rgba(124,58,237,0.08),transparent 70%)", top: "-10%", right: "-10%" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="g2">
        <FadeIn dir="left">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: 22, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0f172a" }}>
            Let's Grow Your<br /><span className="gt">Business 🚀</span>
          </h2>
          <p style={{ color: "#334155", lineHeight: 1.8, marginBottom: 36, fontSize: "0.9rem" }}>
            Ready to get results like the ones above? Let's talk strategy, campaigns, and ROI. Your dedicated Digital Marketing Expert is just a message away.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[["📞", "Phone", SOCIAL.phone, `tel:${SOCIAL.phone}`], ["📧", "Email", SOCIAL.email, `mailto:${SOCIAL.email}`], ["📍", "Location", "Pilani, Rajasthan, India", "#"]].map(([ic, l, v, href]) => (
              <a key={l} href={href} style={{ textDecoration: "none" }}>
                <div className="glass lift" style={{ borderRadius: 14, padding: "17px 20px", display: "flex", alignItems: "center", gap: 14, border: "1px solid rgba(0,0,0,0.05)", background: "rgba(255,255,255,0.7)" }}>
                  <span style={{ fontSize: "1.3rem" }}>{ic}</span>
                  <div>
                    <div style={{ fontSize: "0.6rem", color: "#64748b", letterSpacing: "0.12em", fontFamily: "'DM Mono',monospace" }}>{l}</div>
                    <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.88rem" }}>{v}</div>
                  </div>
                </div>
              </a>
            ))}
            <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, background: "#22c55e", borderRadius: 14, padding: "17px 22px", textDecoration: "none", color: "#fff", fontWeight: 800, fontSize: "0.9rem", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(34,197,94,0.3)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#22c55e"; e.currentTarget.style.transform = "none"; }}>
              <span style={{ fontSize: "1.3rem" }}>💬</span> Chat on WhatsApp
            </a>
            {/* Social links */}
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {[[SOCIAL.facebook, "Facebook", "#1877F2", "📘"], [SOCIAL.instagram, "Instagram", "#E1306C", "📸"], [SOCIAL.linkedin, "LinkedIn", "#0A66C2", "💼"]].map(([url, name, c, ic]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", flex: 1 }}>
                  <div className="glass lift" style={{ borderRadius: 12, padding: "12px", textAlign: "center", border: `1px solid ${c}15`, fontSize: "0.8rem", fontWeight: 700, color: c, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "rgba(255,255,255,0.6)" }}>
                    {ic} {name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn dir="right" delay={0.2}>
          {sent ? (
            <div className="glass" style={{ borderRadius: 26, padding: 56, textAlign: "center", border: "1px solid rgba(124,58,237,0.15)", background: "rgba(255,255,255,0.8)" }}>
              <div style={{ fontSize: "4rem", marginBottom: 16, animation: "float 2s ease-in-out infinite" }}>🎉</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 12, letterSpacing: "-0.02em", color: "#1e293b" }}>Message Sent!</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem" }}>I'll get back to you within 24 hours. Looking forward to growing your business!</p>
            </div>
          ) : (
            <div className="glass" style={{ borderRadius: 26, padding: 40, border: "1px solid rgba(0,0,0,0.05)", background: "rgba(255,255,255,0.85)" }}>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", color: "#7c3aed", letterSpacing: "0.2em", marginBottom: 20 }}>SEND A MESSAGE</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} 
                  style={{ ...inp(), background: "#fff", border: "1px solid #e2e8f0", color: "#1e293b" }}
                  onFocus={e => { e.target.style.borderColor = "#7c3aed"; e.target.style.boxShadow = "0 0 12px rgba(124,58,237,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
                <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} 
                  style={{ ...inp(), background: "#fff", border: "1px solid #e2e8f0", color: "#1e293b" }}
                  onFocus={e => { e.target.style.borderColor = "#7c3aed"; e.target.style.boxShadow = "0 0 12px rgba(124,58,237,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
                <input type="tel" placeholder="Phone Number" value={form.phone || ""} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} 
                  style={{ ...inp(), background: "#fff", border: "1px solid #e2e8f0", color: "#1e293b" }}
                  onFocus={e => { e.target.style.borderColor = "#7c3aed"; e.target.style.boxShadow = "0 0 12px rgba(124,58,237,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
                <textarea placeholder="Tell me about your project, goals, and budget..." rows={5} value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))} 
                  style={{ ...inp(), background: "#fff", border: "1px solid #e2e8f0", color: "#1e293b", resize: "vertical" }}
                  onFocus={e => { e.target.style.borderColor = "#7c3aed"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; }} />
                <button className="glow-cta" onClick={() => { if (form.name && form.email) setSent(true); }} style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", border: "none", color: "#fff", padding: "17px", borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", width: "100%" }}>
                  🚀 Send Message
                </button>
                <div style={{ textAlign: "center", fontSize: "0.72rem", color: "#64748b", fontFamily: "'DM Mono',monospace" }}>Usually replies within 2-4 hours</div>
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
