import { useState } from "react";

export default function LinkItem({ link, index }) {
  const [hovered, setHovered] = useState(false);
  const animDelay = `${0.35 + index * 0.07}s`;

  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="link-bar link-glow group relative flex items-center justify-between px-5 py-4 rounded-[4px] border border-white/[0.08] bg-white/[0.03] no-underline overflow-hidden"
      style={{
        opacity: 0,
        transform: hovered ? "translateX(3px)" : "translateY(10px)",
        animation: `rise 0.5s cubic-bezier(0.2,0,0,1) ${animDelay} forwards`,
        transition: "transform 0.25s cubic-bezier(0.2,0,0,1), border-color 0.25s",
        borderColor: hovered ? "rgba(200,132,42,0.3)" : "rgba(255,255,255,0.08)",
        textDecoration: "none",
      }}
    >
      {/* Icon + name */}
      <div className="relative z-10 flex items-center gap-4">
        <div
          className="w-9 h-9 rounded-[3px] flex items-center justify-center flex-shrink-0 border"
          style={{
            background: hovered ? "rgba(200,132,42,0.15)" : "rgba(245,240,232,0.05)",
            borderColor: hovered ? "rgba(200,132,42,0.4)" : "rgba(245,240,232,0.1)",
            transition: "all 0.25s",
          }}
        >
          <span style={{ color: "#f5f0e8" }}>{link.icon}</span>
        </div>

        <div>
          <div
            className="font-serif text-[17px] font-normal tracking-[0.01em]"
            style={{
              color: hovered ? "#f5f0e8" : "rgba(245,240,232,0.85)",
              transition: "color 0.25s",
            }}
          >
            {link.name}
          </div>
          <div
            className="font-mono text-[10px] mt-[1px]"
            style={{
              color: hovered ? "rgba(200,132,42,0.7)" : "rgba(245,240,232,0.3)",
              transition: "color 0.25s",
            }}
          >
            {link.handle}
          </div>
        </div>
      </div>

      {/* Arrow */}
      <span
        className="relative z-10 font-mono text-[13px]"
        style={{
          color: hovered ? "#e8a84a" : "rgba(245,240,232,0.2)",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "all 0.25s",
        }}
      >
        →
      </span>
    </a>
  );
}
