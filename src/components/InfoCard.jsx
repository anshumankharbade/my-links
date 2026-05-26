import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function InfoCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-5 rounded-[4px] border"
      style={{
        background: "rgba(245,240,232,0.03)",
        borderColor: hovered ? "rgba(200,132,42,0.25)" : "rgba(245,240,232,0.08)",
        transition: "border-color 0.25s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="font-mono text-[9px] tracking-[0.18em] uppercase mb-[10px]"
        style={{ color: "rgba(245,240,232,0.28)" }}
      >
        {card.label}
      </div>

      <div
        className="font-serif text-[20px] font-light leading-[1.3]"
        style={{ color: "#f5f0e8" }}
      >
        {card.value}
      </div>

      <div
        className="font-mono text-[10px] mt-[6px]"
        style={{ color: "rgba(245,240,232,0.3)" }}
      >
        {card.sub}
      </div>

      <ProgressBar width={card.width} delay={card.delay} />
    </div>
  );
}
