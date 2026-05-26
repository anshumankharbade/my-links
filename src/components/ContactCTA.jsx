import { useState } from "react";

export default function ContactCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="mailto:anshumankharbade28@gmail.com"
      className="flex items-center justify-between gap-5 flex-wrap p-7 rounded-[4px] border mb-12"
      style={{
        background: hovered ? "rgba(200,132,42,0.12)" : "rgba(200,132,42,0.07)",
        borderColor: hovered ? "rgba(200,132,42,0.4)" : "rgba(200,132,42,0.2)",
        textDecoration: "none",
        transition: "background 0.25s, border-color 0.25s",
        opacity: 0,
        animation: "rise 0.7s cubic-bezier(0.2,0,0,1) 0.45s forwards",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <h3
          className="font-serif text-[22px] font-light italic mb-1"
          style={{ color: "#f5f0e8" }}
        >
          Let's work together
        </h3>
        <p
          className="font-mono text-[11px] tracking-[0.05em]"
          style={{ color: "rgba(245,240,232,0.4)" }}
        >
          Replies within 24h
        </p>
      </div>

      <div
        className="font-mono text-[10px] tracking-[0.15em] uppercase flex items-center gap-2 border px-[18px] py-[10px] rounded-[2px] whitespace-nowrap"
        style={{
          color: "#e8a84a",
          borderColor: "rgba(200,132,42,0.4)",
          background: hovered ? "rgba(200,132,42,0.2)" : "transparent",
          transition: "background 0.25s",
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
        Get in touch
      </div>
    </a>
  );
}
