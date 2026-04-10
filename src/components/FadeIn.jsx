import React from "react";
import { useInView } from "../hooks/useInView";

export default function FadeIn({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, inView] = useInView();
  const tMap = { 
    up: "translateY(48px)", 
    down: "translateY(-48px)", 
    left: "translateX(-60px)", 
    right: "translateX(60px)", 
    scale: "scale(0.88)", 
    none: "none" 
  };
  
  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ 
        opacity: inView ? 1 : 0, 
        transform: inView ? "none" : tMap[dir], 
        transition: `opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.75s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s` 
      }}
    >
      {children}
    </div>
  );
}
