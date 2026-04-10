import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Nav from "./components/Nav";
import HERO from "./components/Hero";
import ABOUT from "./components/About";
import VISION from "./components/Vision";
import SKILLS from "./components/Skills";
import EXPERIENCE from "./components/Experience";
import RESULTS from "./components/Results";
import CLIENTS from "./components/Clients";
import CONTACT from "./components/Contact";
import FOOTER from "./components/Footer";
import ScrollBar from "./components/ScrollBar";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      style={{ 
        fontFamily: "'Syne',sans-serif", 
        background: "#f8fafc", 
        color: "#1e293b", 
        overflowX: "hidden", 
        cursor: "default" 
      }}
    >
      <ScrollBar />
      <Nav scrolled={scrolled} onGo={go} />
      
      <main>
        <HERO onGo={go} />
        <ABOUT />
        <VISION />
        <SKILLS />
        <EXPERIENCE />
        <RESULTS onGo={go} />
        <CLIENTS />
        <CONTACT onGo={go} />
      </main>

      <FOOTER />
    </div>
  );
}
