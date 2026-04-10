import React, { useState, useEffect } from "react";

export default function Typewriter({ texts, speed = 75, pause = 2200 }) {
  const [disp, setDisp] = useState("");
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = texts[ti];
    const t = setTimeout(
      () => {
        if (!del) {
          setDisp(cur.slice(0, ci + 1));
          if (ci + 1 === cur.length) setTimeout(() => setDel(true), pause);
          else setCi((c) => c + 1);
        } else {
          setDisp(cur.slice(0, ci - 1));
          if (ci - 1 === 0) {
            setDel(false);
            setTi((i) => (i + 1) % texts.length);
            setCi(0);
          } else setCi((c) => c - 1);
        }
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [ci, del, ti, texts, speed, pause]);

  return (
    <span style={{ color: "#c084fc" }}>
      {disp}
      <span
        style={{
          display: "inline-block",
          animation: "blink 0.8s steps(1) infinite",
          color: "#67e8f9",
        }}
      >
        █
      </span>
    </span>
  );
}
