import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Experience", "Skills", "Results", "Clients", "Services", "Tools", "Contact"];

/* ─── REAL CLIENT RESULTS (from screenshots) ─── */
const CASE_STUDIES = [
  {
    id: 1,
    client: "NIMBUS Education",
    icon: "🎓",
    color: "#a855f7",
    tag: "Meta Ads · Lead Generation",
    period: "Feb 27 – Mar 28, 2026",
    headline: "450 Leads @ ₹10.09/Lead",
    description: "Managed multiple active campaigns simultaneously. The RRB JE campaign delivered 450 Meta leads at just ₹10.09 per lead — one of the lowest CPLs in the education niche. Total spend across all campaigns was hyper-optimized for maximum ROI.",
    metrics: [
      { label: "RRB JE Campaign Leads", value: "450", sub: "@ ₹10.09/lead", icon: "🎯" },
      { label: "BSTC JE Leads", value: "156", sub: "@ ₹20.08/lead", icon: "📊" },
      { label: "SCi Campaign Leads", value: "81", sub: "@ ₹26.02/lead", icon: "📈" },
      { label: "Total Budget Used", value: "₹7,655", sub: "Across 4 campaigns", icon: "💰" },
    ],
    campaigns: [
      "SCi Leads 18-03-2026 — Active | 81 leads | ₹26.02 CPL | Budget ₹200/day",
      "Bstc Je 17-03-2026 — Active | 156 leads | ₹20.08 CPL | Budget ₹300/day",
      "New Leads RRB JE 17-03-2026 — Active | 450 leads | ₹10.09 CPL | Budget ₹400/day",
      "New Leads Campaign iti 19-03-2026 — 352 leads | ₹2.49 CPL (off)"
    ],
    platform: "meta",
    badge: "🔥 Ultra-Low CPL",
  },
  {
    id: 2,
    client: "BR Publication",
    icon: "📚",
    color: "#3b82f6",
    tag: "SEO · Google Search Console · Analytics",
    period: "Jan 2025 – Feb 2026 (6-Month SEO Growth)",
    headline: "35.2K Clicks & 5.72M Impressions",
    description: "A complete SEO transformation over 6 months. Active users grew 327% (26K → 111K), total sessions went from 33K to 125K, and search impressions skyrocketed from 1.18M to 5.72M — a 385% increase driven by strategic keyword targeting and technical SEO.",
    metrics: [
      { label: "Organic Clicks (After)", value: "35.2K", sub: "Was 11.8K before SEO", icon: "🖱️" },
      { label: "Search Impressions", value: "5.72M", sub: "Was 1.18M — +385%", icon: "👁️" },
      { label: "Active Users", value: "111K", sub: "Was 26K — +327%", icon: "👥" },
      { label: "Total Sessions", value: "125K", sub: "Was 33K — +279%", icon: "📊" },
    ],
    campaigns: [
      "Phase 1 (Jan–Jul 18): 11.8K clicks · 1.18M impressions · Avg CTR 1% · Pos 18.3",
      "Phase 2 (Jul 19–Dec 31): 27K clicks · 4.25M impressions · Avg CTR 0.70% · Pos 8.6",
      "Phase 3 (Jul 19–Feb 10): 35.2K clicks · 5.72M impressions · Avg CTR 0.60% · Pos 8.1",
    ],
    platform: "seo",
    badge: "📈 385% Impression Growth",
  },
  {
    id: 3,
    client: "Best Deals Furniture",
    icon: "🛋️",
    color: "#f59e0b",
    tag: "Google My Business · Local SEO",
    period: "Oct 2025 – Mar 2026",
    headline: "7,139 Profile Views + Local Rankings",
    description: "Optimized GMB profile drove 7,139 business profile views and 2,462 search appearances in 6 months. Top search terms dominated local furniture intent keywords, with 60% of traffic from mobile Google Search.",
    metrics: [
      { label: "Profile Views", value: "7,139", sub: "People viewed GMB", icon: "👁️" },
      { label: "Search Appearances", value: "2,462", sub: "Showed in results", icon: "🔍" },
      { label: "Google Search Mobile", value: "60%", sub: "4,304 visits", icon: "📱" },
      { label: "Google Maps Mobile", value: "33%", sub: "2,368 visits", icon: "🗺️" },
    ],
    campaigns: [
      "Top search term: 'best' — 1,469 searches",
      "Ranked for 'furniture shop near me' — 332 searches",
      "Ranked for 'furniture stores' — 188 searches",
      "60% mobile Google Search · 33% Google Maps mobile",
    ],
    platform: "gmb",
    badge: "📍 Local SEO Win",
  },
  {
    id: 4,
    client: "T4 Toys – Vaishali Nagar",
    icon: "🧸",
    color: "#10b981",
    tag: "Google My Business · Google Ads",
    period: "Jun 2025 – Mar 2026",
    headline: "7,983 GMB Views + 1.1K Ad Clicks",
    description: "Dual-channel approach: GMB optimization generated 7,983 profile views & 1,948 search appearances. Simultaneously, Google Ads drove 1.1K qualified clicks from 46.7K impressions at ₹9.48 avg CPC, spending ₹10.4K total.",
    metrics: [
      { label: "GMB Profile Views", value: "7,983", sub: "Business profile visits", icon: "👁️" },
      { label: "Google Ads Clicks", value: "1.1K", sub: "From 46.7K impressions", icon: "🖱️" },
      { label: "Avg. CPC", value: "₹9.48", sub: "Google Ads efficiency", icon: "💰" },
      { label: "GMB Search Appearances", value: "1,948", sub: "Organic searches", icon: "🔍" },
    ],
    campaigns: [
      "GMB Top terms: 't4' (579), 't4 toys' (297), 't4 toys jaipur' (208), 'toy shop near me' (191)",
      "Google Ads: 1.1K clicks · 46.7K impressions · ₹10.4K total spend",
      "Platform breakdown: 55% Google Search mobile · 38% Google Maps mobile",
    ],
    platform: "google",
    badge: "🎯 Omnichannel Win",
  },
  {
    id: 5,
    client: "Mahalaxmi Jewellers",
    icon: "💍",
    color: "#f59e0b",
    tag: "Google Ads · Search Campaigns",
    period: "Aug 2025 – Mar 2026",
    headline: "815 Clicks · ₹3.21 Avg CPC",
    description: "Highly targeted Google Ads for a premium jewellery brand. Achieved 815 qualified clicks from 16,300 impressions at an ultra-efficient ₹3.21 average CPC. Total spend of only ₹2.62K across 4 campaigns — exceptional budget efficiency.",
    metrics: [
      { label: "Total Clicks", value: "815", sub: "Qualified buyer traffic", icon: "🖱️" },
      { label: "Total Impressions", value: "16.3K", sub: "Search visibility", icon: "👁️" },
      { label: "Avg. CPC", value: "₹3.21", sub: "Cost per click", icon: "💰" },
      { label: "Total Ad Spend", value: "₹2.62K", sub: "Aug 2025–Mar 2026", icon: "📊" },
    ],
    campaigns: [
      "4 campaigns managed (Enabled + Paused)",
      "Jewellery-specific high-intent keyword targeting",
      "Account: Mahalaxmi Jewellers (506-635-8507)",
      "All time period: Aug 20, 2025 – Mar 29, 2026",
    ],
    platform: "google",
    badge: "💎 Budget Efficient",
  },
];

const CLIENTS = [
  { name: "Samyak", services: "SEO, Social Media, GMB", platforms: ["Meta", "GMB", "SEO"], color: "#a855f7" },
  { name: "RBD Publication", services: "Content Strategy, SEO Growth", platforms: ["Meta", "SEO"], color: "#3b82f6" },
  { name: "Mahalaxmi Jewellers", services: "Google Ads, Local SEO, GMB", platforms: ["Google Ads", "GMB"], color: "#f59e0b" },
  { name: "Silver Empire", services: "Social Media, Influencer", platforms: ["Meta", "Influencer"], color: "#6366f1" },
  { name: "Mykaa Fashion", services: "Meta Ads, Content, Reels", platforms: ["Meta", "Reels"], color: "#ec4899" },
  { name: "Boomi Sagun Real Estate", services: "Lead Gen, Google Ads, GMB", platforms: ["Google Ads", "GMB"], color: "#10b981" },
  { name: "Kairab Jaipur", services: "SEO, Social Media", platforms: ["Meta", "SEO", "GMB"], color: "#f97316" },
  { name: "Dentistry by Divya", services: "GMB, Meta Ads, SEO", platforms: ["Meta", "GMB", "SEO"], color: "#06b6d4" },
  { name: "Infusion Notes", services: "Content, Email Marketing", platforms: ["Email", "WhatsApp"], color: "#8b5cf6" },
  { name: "My Pocket Notes", services: "Social Media, WhatsApp", platforms: ["WhatsApp", "Instagram"], color: "#14b8a6" },
  { name: "Space Decor", services: "Meta Ads, Influencer, Reels", platforms: ["Meta", "Influencer"], color: "#a855f7" },
  { name: "Hebstonic", services: "Google Ads, SEO, GMB", platforms: ["Google Ads", "SEO"], color: "#3b82f6" },
];

const SKILLS = [
  { name: "Meta Ads", level: 95, icon: "📱" },
  { name: "Google Ads", level: 90, icon: "🔍" },
  { name: "SEO & Local SEO", level: 88, icon: "📈" },
  { name: "Content Strategy", level: 92, icon: "✍️" },
  { name: "Social Media Mgmt", level: 95, icon: "🌐" },
  { name: "Email Marketing", level: 85, icon: "📧" },
  { name: "WhatsApp Marketing", level: 90, icon: "💬" },
  { name: "Influencer Marketing", level: 82, icon: "🌟" },
  { name: "Lead Generation", level: 93, icon: "🎯" },
  { name: "Analytics & Reporting", level: 87, icon: "📊" },
];

const SERVICES = [
  { icon: "🚀", title: "Digital Marketing", desc: "Full-funnel strategies that drive real business growth across all digital channels." },
  { icon: "🔍", title: "SEO & Local SEO", desc: "Rank higher, get found locally. GMB optimization + on/off-page SEO mastery." },
  { icon: "💻", title: "Website Development", desc: "High-converting, lightning-fast websites built to turn visitors into customers." },
  { icon: "📱", title: "App Development", desc: "Mobile-first apps that solve real problems and delight users." },
  { icon: "📊", title: "Social Media Mgmt", desc: "Consistent brand voice, viral content, and community building at scale." },
  { icon: "🎯", title: "Paid Ads Management", desc: "ROI-focused Meta & Google Ads. Every rupee optimized for results." },
];

const TOOLS = [
  { name: "Google Ads", icon: "🔍", color: "#4285F4" },
  { name: "Meta Ads Manager", icon: "📘", color: "#1877F2" },
  { name: "Google Analytics", icon: "📈", color: "#E37400" },
  { name: "Google My Business", icon: "📍", color: "#34A853" },
  { name: "Keyword Planner", icon: "🗝️", color: "#FBBC05" },
  { name: "Canva", icon: "🎨", color: "#00C4CC" },
  { name: "Mailchimp", icon: "📧", color: "#FFE01B" },
  { name: "WhatsApp Business", icon: "💬", color: "#25D366" },
  { name: "YouTube Studio", icon: "▶️", color: "#FF0000" },
  { name: "Search Console", icon: "🖥️", color: "#458CF5" },
  { name: "Semrush", icon: "🔬", color: "#FF642D" },
  { name: "Ahrefs", icon: "📡", color: "#F17B2C" },
];

const CERTS = [
  { title: "Digital Marketing Masterclass", provider: "Udemy", year: "2022", icon: "🎓", color: "#a855f7" },
  { title: "Meta Social Media Marketing", provider: "Coursera / Meta", year: "2023", icon: "📘", color: "#3b82f6" },
  { title: "Google Ads Certification", provider: "Google Skillshop", year: "2023", icon: "🔍", color: "#10b981" },
];

const INTERESTS = [
  { icon: "✈️", label: "Traveling", desc: "Exploring new cultures and places for creative inspiration." },
  { icon: "🎥", label: "Videography", desc: "Capturing cinematic moments and crafting visual stories." },
  { icon: "📚", label: "Learning", desc: "Always upskilling — new tools, new strategies, new horizons." },
];

/* ─── HOOKS ─── */
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Typewriter({ texts, speed = 80, pause = 2000 }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
        else setCharIdx(c => c + 1);
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) { setDeleting(false); setIdx(i => (i + 1) % texts.length); setCharIdx(0); }
        else setCharIdx(c => c - 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);
  return <span style={{ color: "#a855f7" }}>{display}<span style={{ display: "inline-block", animation: "blink 0.8s infinite", color: "#06b6d4" }}>|</span></span>;
}

function ParticlesBG() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    const particles = Array.from({ length: 75 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.35, dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.2,
    }));
    let animId;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 120)})`; ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.65 }} />;
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => { const s = document.documentElement.scrollTop; const h = document.documentElement.scrollHeight - window.innerHeight; setP(h > 0 ? (s / h) * 100 : 0); };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 9999 }}>
      <div style={{ height: "100%", width: `${p}%`, background: "linear-gradient(90deg,#a855f7,#3b82f6,#06b6d4)", transition: "width 0.1s" }} />
    </div>
  );
}

function FadeIn({ children, delay = 0, direction = "up", style: extraStyle = {} }) {
  const [ref, inView] = useInView();
  const t = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-50px)", right: "translateX(50px)", none: "none" };
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : t[direction], transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...extraStyle }}>
      {children}
    </div>
  );
}

function PlatformBadge({ platform }) {
  const map = {
    meta: { label: "Meta Ads", color: "#4da6ff", bg: "rgba(24,119,242,0.12)", border: "rgba(24,119,242,0.3)" },
    google: { label: "Google Ads", color: "#7fb3f5", bg: "rgba(66,133,244,0.12)", border: "rgba(66,133,244,0.3)" },
    seo: { label: "Search Console", color: "#4ade80", bg: "rgba(52,168,83,0.12)", border: "rgba(52,168,83,0.3)" },
    gmb: { label: "Google My Business", color: "#fbbf24", bg: "rgba(251,188,5,0.12)", border: "rgba(251,188,5,0.3)" },
  };
  const s = map[platform] || map.google;
  return <span style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 50, padding: "4px 14px", fontSize: "0.68rem", color: s.color, fontFamily: "'Space Mono',monospace" }}>{s.label}</span>;
}

function MetricCard({ metric, color, index }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ background: `${color}08`, border: `1px solid ${color}25`, borderRadius: 14, padding: "18px 14px", textAlign: "center", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s` }}>
      <div style={{ fontSize: "1.5rem", marginBottom: 5 }}>{metric.icon}</div>
      <div style={{ fontSize: "1.4rem", fontWeight: 800, color, fontFamily: "'Space Mono',monospace", lineHeight: 1 }}>{metric.value}</div>
      <div style={{ fontSize: "0.72rem", color: "#e2e8f0", fontWeight: 700, marginTop: 5 }}>{metric.label}</div>
      <div style={{ fontSize: "0.63rem", color: "#64748b", marginTop: 3 }}>{metric.sub}</div>
    </div>
  );
}

function CaseStudyCard({ cs, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(50px)", transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s` }}>
      <div style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(20px)", border: `1px solid ${cs.color}22`, borderRadius: 24, overflow: "hidden", transition: "box-shadow 0.4s", boxShadow: expanded ? `0 20px 60px ${cs.color}18` : "none" }}>
        <div style={{ height: 4, background: `linear-gradient(90deg,${cs.color},${cs.color}50,transparent)` }} />
        <div style={{ padding: "30px 28px 26px" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: `${cs.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", flexShrink: 0, border: `1px solid ${cs.color}28` }}>{cs.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#f1f5f9" }}>{cs.client}</h3>
                <span style={{ background: `${cs.color}18`, border: `1px solid ${cs.color}35`, borderRadius: 50, padding: "2px 10px", fontSize: "0.62rem", color: cs.color, fontFamily: "'Space Mono',monospace" }}>{cs.badge}</span>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <PlatformBadge platform={cs.platform} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", color: "#64748b" }}>{cs.period}</span>
              </div>
            </div>
          </div>
          {/* Headline */}
          <div style={{ background: `${cs.color}10`, border: `1px solid ${cs.color}20`, borderRadius: 12, padding: "14px 18px", marginBottom: 18 }}>
            <div style={{ fontSize: "0.6rem", color: "#64748b", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Space Mono',monospace", marginBottom: 4 }}>KEY RESULT</div>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: cs.color }}>{cs.headline}</div>
          </div>
          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, marginBottom: 18 }}>
            {cs.metrics.map((m, i) => <MetricCard key={i} metric={m} color={cs.color} index={i} />)}
          </div>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.75, marginBottom: 14 }}>{cs.description}</p>
          <button onClick={() => setExpanded(e => !e)} style={{ background: "none", border: `1px solid ${cs.color}28`, borderRadius: 50, padding: "8px 18px", color: cs.color, fontSize: "0.72rem", cursor: "pointer", fontFamily: "'Space Mono',monospace", transition: "background 0.3s", letterSpacing: "0.04em" }}
            onMouseEnter={e => { e.currentTarget.style.background = `${cs.color}12`; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; }}>
            {expanded ? "▲ Hide Campaign Details" : "▼ View Campaign Details"}
          </button>
          {expanded && (
            <div style={{ marginTop: 14, borderTop: `1px solid ${cs.color}12`, paddingTop: 14 }}>
              <div style={{ fontSize: "0.65rem", color: "#64748b", letterSpacing: "0.15em", marginBottom: 10, fontFamily: "'Space Mono',monospace" }}>CAMPAIGN BREAKDOWN</div>
              {cs.campaigns.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.8rem", color: "#94a3b8", marginBottom: 8, lineHeight: 1.5 }}>
                  <span style={{ color: cs.color, fontSize: "0.5rem", flexShrink: 0, marginTop: 5 }}>◆</span>{c}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN ─── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [expandedJob, setExpandedJob] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [statsRef, statsInView] = useInView();
  const c1 = useCountUp(250, 2000, statsInView);
  const c2 = useCountUp(12, 2000, statsInView);
  const c3 = useCountUp(5, 2000, statsInView);
  const c4 = useCountUp(572, 2000, statsInView);

  const filterMap = { "All": CASE_STUDIES, "Meta Ads": CASE_STUDIES.filter(c => c.platform === "meta"), "SEO": CASE_STUDIES.filter(c => c.platform === "seo"), "Google Ads": CASE_STUDIES.filter(c => c.platform === "google"), "GMB": CASE_STUDIES.filter(c => c.platform === "gmb") };
  const filtered = filterMap[activeFilter] || CASE_STUDIES;

  const inp = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.2)", borderRadius: 12, padding: "15px 18px", color: "#e2e8f0", fontSize: "0.9rem", outline: "none", fontFamily: "'Syne',sans-serif" };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: "#050508", color: "#e2e8f0", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#0a0a12}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#a855f7,#3b82f6);border-radius:4px}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes glow-pulse{0%,100%{box-shadow:0 0 20px #a855f740}50%{box-shadow:0 0 40px #a855f7,0 0 80px #3b82f640}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .gt{background:linear-gradient(135deg,#a855f7,#3b82f6,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .glass{background:rgba(255,255,255,0.03);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.07)}
        .hover-lift{transition:all 0.4s cubic-bezier(0.4,0,0.2,1)}
        .hover-lift:hover{transform:translateY(-6px)}
        .glow-btn{transition:all 0.3s!important}
        .glow-btn:hover{box-shadow:0 0 28px #a855f770;transform:translateY(-2px)!important}
        .nav-link{position:relative;background:none;border:none;cursor:pointer;font-family:'Syne',sans-serif;font-weight:600;letter-spacing:0.04em;font-size:0.82rem}
        .nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(90deg,#a855f7,#3b82f6);transition:width 0.3s}
        .nav-link:hover::after{width:100%}
        .skill-bar{transition:width 1.5s cubic-bezier(0.4,0,0.2,1)}
        .mesh-bg{background:radial-gradient(ellipse at 20% 50%,#a855f720 0%,transparent 50%),radial-gradient(ellipse at 80% 20%,#3b82f620 0%,transparent 50%),radial-gradient(ellipse at 50% 80%,#06b6d420 0%,transparent 50%)}
        @media(max-width:768px){
          .hero-h{font-size:2.6rem!important}
          .g2{grid-template-columns:1fr!important}
          .g3{grid-template-columns:1fr!important}
          .g4{grid-template-columns:repeat(2,1fr)!important}
          .hide-m{display:none!important}
          .rg{grid-template-columns:1fr!important}
          .exp-card{width:100%!important}
        }
        .wa-float{position:fixed;bottom:24px;right:24px;z-index:1000;animation:float 3s ease-in-out infinite}
        .filter-btn{cursor:pointer;border:none;font-family:'Space Mono',monospace;font-size:0.72rem;letter-spacing:0.05em;transition:all 0.3s}
        .filter-btn:hover{transform:translateY(-1px)}
        .proof-badge{transition:all 0.3s}
        .proof-badge:hover{border-color:rgba(168,85,247,0.4)!important;transform:translateY(-2px)}
      `}</style>

      <ScrollProgress />

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 3, left: 0, right: 0, zIndex: 500, padding: "0 4%", background: scrolled ? "rgba(5,5,8,0.96)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(168,85,247,0.12)" : "none", transition: "all 0.4s", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: "1.05rem" }}>
          <span className="gt">MK</span><span style={{ color: "#a855f7", fontSize: "0.4rem", verticalAlign: "super" }}>●</span>
        </div>
        <div className="hide-m" style={{ display: "flex", gap: 26 }}>
          {NAV_LINKS.map(l => <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="nav-link" style={{ color: "#cbd5e1" }}>{l}</button>)}
        </div>
        <button onClick={() => scrollTo("contact")} className="glow-btn" style={{ background: "linear-gradient(135deg,#a855f7,#3b82f6)", border: "none", color: "#fff", padding: "10px 22px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}>
          Hire Me
        </button>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "0 5%", marginTop: "100px" }}>
        <ParticlesBG />
        <div style={{ position: "absolute", inset: 0 }} className="mesh-bg" />
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,#a855f720,transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,#3b82f620,transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 920 }}>
          <div style={{ display: "inline-block", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 50, padding: "8px 24px", marginBottom: 32, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a855f7", fontFamily: "'Space Mono',monospace" }}>
            ✦ Digital Marketing Expert · Pilani, Rajasthan ✦
          </div>
          <h1 className="hero-h" style={{ fontSize: "4.5rem", fontWeight: 800, lineHeight: 1.05, marginBottom: 16, letterSpacing: "-0.02em" }}>
            I Turn Clicks Into<br /><span className="gt">Customers 🚀</span>
          </h1>
          <div style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: 12, fontFamily: "'Space Mono',monospace", minHeight: "1.5em" }}>
            <Typewriter texts={["SEO Strategist", "Meta & Google Ads Expert", "Growth Hacker", "Lead Generation Pro", "Digital Marketing Manager"]} />
          </div>
          <p style={{ color: "#64748b", fontSize: "0.95rem", maxWidth: 520, margin: "12px auto 44px", lineHeight: 1.7 }}>
            5+ years. 250+ campaigns. Real results — verified by data from Meta, Google & Search Console.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("contact")} className="glow-btn" style={{ background: "linear-gradient(135deg,#a855f7,#3b82f6)", border: "none", color: "#fff", padding: "16px 36px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", animation: "glow-pulse 3s ease-in-out infinite" }}>
              🚀 Let's Work Together
            </button>
            <button onClick={() => scrollTo("results")} className="glow-btn" style={{ background: "transparent", border: "1px solid rgba(168,85,247,0.5)", color: "#e2e8f0", padding: "16px 36px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>
              📊 See Real Results →
            </button>
          </div>
          <div style={{ marginTop: 64, display: "flex", gap: 36, justifyContent: "center", flexWrap: "wrap" }}>
            {[["5+", "Years Exp"], ["250+", "Campaigns"], ["35.2K", "SEO Clicks"], ["₹10.09", "Lowest CPL"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div className="gt" style={{ fontSize: "1.9rem", fontWeight: 800, fontFamily: "'Space Mono',monospace" }}>{n}</div>
                <div style={{ fontSize: "0.68rem", color: "#64748b", letterSpacing: "0.1em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", animation: "float 2s ease-in-out infinite" }}>
          <div style={{ width: 22, height: 38, border: "2px solid rgba(168,85,247,0.4)", borderRadius: 11, display: "flex", justifyContent: "center", paddingTop: 5 }}>
            <div style={{ width: 4, height: 7, background: "#a855f7", borderRadius: 2 }} />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 5%", position: "relative" }}>
        <div style={{ position: "absolute", top: "20%", right: 0, width: 500, height: 500, background: "radial-gradient(circle,#a855f710,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="g2">
          <FadeIn direction="left">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -2, background: "linear-gradient(135deg,#a855f7,#3b82f6,#06b6d4)", borderRadius: 24, zIndex: 0 }} />
              <div className="glass" style={{ position: "relative", zIndex: 1, borderRadius: 22, padding: 44, background: "#0a0a12" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 14 }}>👨‍💼</div>
                <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.68rem", letterSpacing: "0.2em", marginBottom: 7 }}>DIGITAL MARKETING MANAGER</div>
                <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: 7 }}>Manish Kumar</h3>
                <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: 22, fontSize: "0.9rem" }}>OnePixelSoft · Pilani, Rajasthan, India</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["Creative", "Data-Driven", "Results-Focused"].map(t => (
                    <span key={t} style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 50, padding: "5px 14px", fontSize: "0.72rem", color: "#a855f7" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>ABOUT ME</div>
            <h2 style={{ fontSize: "2.7rem", fontWeight: 800, marginBottom: 22, lineHeight: 1.1 }}>The Mind Behind the <span className="gt">Growth</span></h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.9, marginBottom: 18, fontSize: "0.9rem" }}>
              I'm a results-obsessed Digital Marketing Manager with <strong style={{ color: "#e2e8f0" }}>5+ years</strong> of turning brands into digital powerhouses. Currently leading all marketing at <strong style={{ color: "#a855f7" }}>OnePixelSoft</strong>, I blend creativity with data to craft campaigns that convert.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.9, marginBottom: 28, fontSize: "0.9rem" }}>
              The numbers speak for themselves: 450 leads at ₹10.09 each on Meta, 35.2K organic SEO clicks, 7,983 GMB views, and growing. Every rupee tracked. Every result real.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[["📍", "Location", "Pilani, Rajasthan"], ["📞", "Phone", "8949957273"], ["📧", "Email", "manishinpilani@gmail.com"], ["🏢", "Company", "OnePixelSoft"]].map(([ic, l, v]) => (
                <div key={l} className="glass" style={{ borderRadius: 12, padding: 14 }}>
                  <div style={{ fontSize: "1rem", marginBottom: 3 }}>{ic}</div>
                  <div style={{ fontSize: "0.62rem", color: "#64748b", letterSpacing: "0.1em" }}>{l}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#e2e8f0" }}>{v}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "120px 5%", background: "rgba(168,85,247,0.015)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>CAREER TIMELINE</div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>My <span className="gt">Experience</span></h2>
            </div>
          </FadeIn>
          <div style={{ position: "relative" }}>
            <div className="hide-m" style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg,#a855f7,#3b82f6,#06b6d4)", transform: "translateX(-50%)" }} />
            {[
              { period: "2022 – Present", role: "Digital Marketing Manager", company: "OnePixelSoft", icon: "🚀", color: "#a855f7", skills: ["Social Media Strategy & Content", "Lead Generation (Meta + Google Ads)", "GMB Optimization & Local SEO", "On-page & Off-page SEO", "Meta Ads & Google Ads Management", "Influencer & WhatsApp Marketing"] },
              { period: "2021 – 2022", role: "Lead Generation Executive", company: "Previous Role", icon: "🎯", color: "#3b82f6", skills: ["Outbound Lead Generation", "CRM Management", "Cold Outreach Campaigns", "Performance Tracking & Reporting", "Client Relationship Building"] },
            ].map((job, i) => (
              <FadeIn key={i} delay={i * 0.2} direction={i % 2 === 0 ? "left" : "right"}>
                <div style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: 40 }}>
                  <div className="exp-card" style={{ width: "46%", cursor: "pointer" }} onClick={() => setExpandedJob(expandedJob === i ? -1 : i)}>
                    <div className="glass hover-lift" style={{ borderRadius: 18, padding: 28, border: `1px solid ${job.color}28` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                        <div style={{ fontSize: "1.8rem" }}>{job.icon}</div>
                        <div>
                          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: job.color, letterSpacing: "0.1em" }}>{job.period}</div>
                          <h3 style={{ fontSize: "1.05rem", fontWeight: 800 }}>{job.role}</h3>
                          <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{job.company}</div>
                        </div>
                      </div>
                      <div style={{ color: job.color, fontSize: "0.72rem", fontFamily: "'Space Mono',monospace" }}>{expandedJob === i ? "▲ Hide" : "▼ Details"}</div>
                      {expandedJob === i && (
                        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 7 }}>
                          {job.skills.map(s => (
                            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "#94a3b8" }}>
                              <span style={{ color: job.color, fontSize: "0.45rem" }}>◆</span>{s}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "120px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>EXPERTISE</div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>Skills & <span className="gt">Capabilities</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }} className="g2">
            {SKILLS.map((s, i) => {
              const [ref, inView] = useInView();
              return (
                <FadeIn key={s.name} delay={i * 0.07}>
                  <div ref={ref} className="glass" style={{ borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 11 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                        <span style={{ fontSize: "1.3rem" }}>{s.icon}</span>
                        <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{s.name}</span>
                      </div>
                      <span className="gt" style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: "0.85rem" }}>{s.level}%</span>
                    </div>
                    <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                      <div className="skill-bar" style={{ height: "100%", width: inView ? `${s.level}%` : "0%", background: "linear-gradient(90deg,#a855f7,#3b82f6,#06b6d4)", borderRadius: 3 }} />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section style={{ padding: "72px 5%", background: "linear-gradient(135deg,rgba(168,85,247,0.06),rgba(59,130,246,0.06))" }}>
        <div ref={statsRef} style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "center" }} className="g4">
          {[[c1 + "+", "Campaigns Managed"], [c2 + "+", "Brands Handled"], [c3 + "+", "Years Experience"], [c4 / 10 + "M", "Search Impressions"]].map(([n, label], i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div className="glass hover-lift" style={{ borderRadius: 18, padding: 28, border: "1px solid rgba(168,85,247,0.14)" }}>
                <div className="gt" style={{ fontSize: "2.2rem", fontWeight: 800, fontFamily: "'Space Mono',monospace", lineHeight: 1 }}>{statsInView ? n : "0"}</div>
                <div style={{ color: "#64748b", fontSize: "0.73rem", marginTop: 8, letterSpacing: "0.04em" }}>{label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── REAL RESULTS (CASE STUDIES) ──
      ══════════════════════════════════════ */}
      <section id="results" style={{ padding: "130px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "8%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,#a855f712,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "8%", right: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,#3b82f612,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 22 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>VERIFIED CAMPAIGN DATA</div>
              <h2 style={{ fontSize: "3.2rem", fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
                Real Results.<br /><span className="gt">Real Numbers. No BS.</span>
              </h2>
              <p style={{ color: "#64748b", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7, fontSize: "0.9rem" }}>
                Every metric below is pulled directly from Meta Ads Manager, Google Ads, Google Search Console, and Google My Business. These aren't estimates — they're facts.
              </p>
            </div>
          </FadeIn>

          {/* Proof strip */}
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
              {[["📊", "Meta Ads Manager", "450 leads @ ₹10.09/lead"], ["🔍", "Search Console", "35.2K clicks · 5.72M impressions"], ["📍", "Google My Business", "7,983 + 7,139 profile views"], ["🎯", "Google Ads", "1.9K+ clicks across clients"]].map(([ic, tool, stat]) => (
                <div key={tool} className="glass proof-badge" style={{ borderRadius: 12, padding: "11px 18px", display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,0.06)", cursor: "default" }}>
                  <span style={{ fontSize: "1rem" }}>{ic}</span>
                  <div>
                    <div style={{ fontSize: "0.62rem", color: "#a855f7", fontFamily: "'Space Mono',monospace", letterSpacing: "0.08em" }}>{tool}</div>
                    <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Filter */}
          <FadeIn delay={0.15}>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 44 }}>
              {["All", "Meta Ads", "SEO", "Google Ads", "GMB"].map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className="filter-btn"
                  style={{ background: activeFilter === f ? "linear-gradient(135deg,#a855f7,#3b82f6)" : "rgba(255,255,255,0.04)", border: activeFilter === f ? "none" : "1px solid rgba(168,85,247,0.2)", color: activeFilter === f ? "#fff" : "#94a3b8", padding: "9px 20px", borderRadius: 50, boxShadow: activeFilter === f ? "0 0 18px #a855f748" : "none" }}>
                  {f}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Cards */}
          <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {filtered.map((cs, i) => <CaseStudyCard key={cs.id} cs={cs} index={i} />)}
          </div>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 60 }}>
              <div className="glass" style={{ display: "inline-block", borderRadius: 22, padding: "30px 48px", border: "1px solid rgba(168,85,247,0.2)" }}>
                <div style={{ fontSize: "0.7rem", color: "#a855f7", fontFamily: "'Space Mono',monospace", letterSpacing: "0.15em", marginBottom: 10 }}>WANT RESULTS LIKE THESE?</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 18 }}>Let's build your <span className="gt">success story</span></h3>
                <button onClick={() => scrollTo("contact")} className="glow-btn" style={{ background: "linear-gradient(135deg,#a855f7,#3b82f6)", border: "none", color: "#fff", padding: "15px 38px", borderRadius: 50, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>
                  🚀 Start Your Campaign
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section id="clients" style={{ padding: "120px 5%", background: "rgba(168,85,247,0.015)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>PORTFOLIO</div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>Brands I've <span className="gt">Grown</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="g3">
            {CLIENTS.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.05}>
                <div className="glass hover-lift" style={{ borderRadius: 18, padding: 26, border: `1px solid ${c.color}16`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${c.color},${c.color}40)` }} />
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: `${c.color}16`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 13, fontSize: "1.2rem" }}>🏢</div>
                  <h3 style={{ fontWeight: 800, marginBottom: 6, fontSize: "0.95rem" }}>{c.name}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.76rem", marginBottom: 13, lineHeight: 1.6 }}>{c.services}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {c.platforms.map(p => <span key={p} style={{ background: `${c.color}10`, border: `1px solid ${c.color}25`, borderRadius: 50, padding: "3px 9px", fontSize: "0.6rem", color: c.color, fontFamily: "'Space Mono',monospace" }}>{p}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "120px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>WHAT I OFFER</div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>My <span className="gt">Services</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="g3">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="glass hover-lift" style={{ borderRadius: 20, padding: 34, border: "1px solid rgba(168,85,247,0.09)", textAlign: "center" }}>
                  <div style={{ fontSize: "2.8rem", marginBottom: 18, display: "inline-block", animation: `float ${3 + i * 0.3}s ease-in-out infinite` }}>{s.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 11 }}>{s.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools" style={{ padding: "120px 5%", background: "rgba(168,85,247,0.015)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>TOOLBOX</div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>Tools & <span className="gt">Technologies</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="g4">
            {TOOLS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <div className="glass hover-lift" style={{ borderRadius: 14, padding: 22, textAlign: "center", border: `1px solid ${t.color}16` }}>
                  <div style={{ fontSize: "2rem", marginBottom: 9 }}>{t.icon}</div>
                  <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#e2e8f0" }}>{t.name}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTS ── */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>CREDENTIALS</div>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 800 }}>Certifications</h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CERTS.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.15}>
                <div className="glass hover-lift" style={{ borderRadius: 18, padding: 26, display: "flex", alignItems: "center", gap: 20, border: `1px solid ${c.color}18` }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `${c.color}16`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", flexShrink: 0 }}>{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 800, fontSize: "0.98rem", marginBottom: 4 }}>{c.title}</h3>
                    <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{c.provider}</div>
                  </div>
                  <div style={{ fontFamily: "'Space Mono',monospace", color: c.color, fontSize: "0.8rem", flexShrink: 0 }}>{c.year}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERESTS ── */}
      <section style={{ padding: "80px 5%", background: "rgba(168,85,247,0.015)" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <FadeIn><div style={{ textAlign: "center", marginBottom: 52 }}><h2 style={{ fontSize: "2.4rem", fontWeight: 800 }}>Beyond <span className="gt">Work</span></h2></div></FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="g3">
            {INTERESTS.map((it, i) => (
              <FadeIn key={it.label} delay={i * 0.15}>
                <div className="glass hover-lift" style={{ borderRadius: 20, padding: 30, textAlign: "center" }}>
                  <div style={{ fontSize: "2.6rem", marginBottom: 13, display: "inline-block", animation: `float ${2.5 + i * 0.5}s ease-in-out infinite` }}>{it.icon}</div>
                  <h3 style={{ fontWeight: 800, marginBottom: 7 }}>{it.label}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.84rem", lineHeight: 1.6 }}>{it.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 5%", background: "linear-gradient(135deg,rgba(168,85,247,0.06),rgba(59,130,246,0.06))" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }} className="g2">
          <FadeIn direction="left">
            <div style={{ fontFamily: "'Space Mono',monospace", color: "#a855f7", fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 14 }}>GET IN TOUCH</div>
            <h2 style={{ fontSize: "2.9rem", fontWeight: 800, marginBottom: 22, lineHeight: 1.1 }}>Let's Grow Your<br /><span className="gt">Business 🚀</span></h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 36, fontSize: "0.9rem" }}>Ready to get results like the ones above? Let's talk strategy, campaigns, and ROI. I'm just a message away.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["📞", "Phone", "8949957273", "tel:8949957273"], ["📧", "Email", "manishinpilani@gmail.com", "mailto:manishinpilani@gmail.com"], ["📍", "Location", "Pilani, Rajasthan, India", "#"]].map(([ic, l, v, href]) => (
                <a key={l} href={href} style={{ textDecoration: "none" }}>
                  <div className="glass hover-lift" style={{ borderRadius: 14, padding: "17px 20px", display: "flex", alignItems: "center", gap: 14, border: "1px solid rgba(168,85,247,0.1)" }}>
                    <span style={{ fontSize: "1.3rem" }}>{ic}</span>
                    <div>
                      <div style={{ fontSize: "0.62rem", color: "#64748b", letterSpacing: "0.1em" }}>{l}</div>
                      <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: "0.88rem" }}>{v}</div>
                    </div>
                  </div>
                </a>
              ))}
              <a href="https://wa.me/918949957273" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, background: "#25D366", borderRadius: 14, padding: "17px 20px", textDecoration: "none", color: "#fff", fontWeight: 700, fontSize: "0.9rem", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#20b855"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "none"; }}>
                <span style={{ fontSize: "1.3rem" }}>💬</span> Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            {sent ? (
              <div className="glass" style={{ borderRadius: 24, padding: 48, textAlign: "center" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 14 }}>🎉</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: "#64748b", fontSize: "0.9rem" }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="glass" style={{ borderRadius: 24, padding: 38, border: "1px solid rgba(168,85,247,0.15)" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: 26 }}>Send a Message</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} style={inp}
                    onFocus={e => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 16px #a855f718"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }} />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} style={inp}
                    onFocus={e => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 16px #a855f718"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }} />
                  <textarea placeholder="Tell me about your project..." rows={5} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} style={{ ...inp, resize: "vertical" }}
                    onFocus={e => { e.target.style.borderColor = "#a855f7"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(168,85,247,0.2)"; }} />
                  <button onClick={() => { if (formData.name && formData.email) setSent(true); }} className="glow-btn" style={{ background: "linear-gradient(135deg,#a855f7,#3b82f6)", border: "none", color: "#fff", padding: "17px", borderRadius: 12, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", width: "100%" }}>
                    🚀 Send Message
                  </button>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "34px 5%", borderTop: "1px solid rgba(168,85,247,0.1)", textAlign: "center" }}>
        <div className="gt" style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: "1rem", marginBottom: 7 }}>Manish Kumar</div>
        <div style={{ color: "#64748b", fontSize: "0.76rem", marginBottom: 10 }}>Digital Marketing Manager · OnePixelSoft · Pilani, Rajasthan</div>
        <div style={{ color: "#475569", fontSize: "0.7rem" }}>© 2026 Manish Kumar. Every number on this site is real, verified, and earned.</div>
      </footer>

      {/* WhatsApp float */}
      <a href="https://wa.me/918949957273" target="_blank" rel="noreferrer" className="wa-float" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "50%", background: "#25D366", textDecoration: "none", fontSize: "1.6rem", boxShadow: "0 4px 24px #25D36660" }}>💬</a>
    </div>
  );
}
