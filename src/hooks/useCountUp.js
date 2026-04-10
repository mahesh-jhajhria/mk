import { useState, useEffect } from "react";

export function useCountUp(target, dur = 2000, go = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setV(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [go, target, dur]);
  return v;
}
