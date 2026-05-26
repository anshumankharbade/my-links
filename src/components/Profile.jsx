import logoImg from "/logo.png";

const TAGS = ["Nagpur, India", "Coder", "Creator", "Editor"];

const ANIM = {
  opacity: 0,
  transform: "translateY(14px)",
  animation: "rise 0.7s cubic-bezier(0.2,0,0,1) 0.15s forwards",
};

export default function Profile() {
  return (
    <div
      className="grid gap-7 mb-16 items-start"
      style={{ gridTemplateColumns: "auto 1fr", ...ANIM }}
    >
      {/* Avatar */}
      <div className="relative w-[88px] flex-shrink-0">
        <div
          className="absolute rounded-full border"
          style={{
            inset: -6,
            borderColor: "rgba(200,132,42,0.4)",
            animation: "ring-pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="relative w-[88px] h-[88px] rounded-full border overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2a1f0e, #1a150a)",
            borderColor: "rgba(200,132,42,0.3)",
          }}
        >
          <img
            src={logoImg}
            alt="Anshuman Kharbade"
            className="w-full h-full object-cover"
          />
          {/* subtle radial sheen */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, rgba(232,168,74,0.1), transparent 60%)",
            }}
          />
        </div>
      </div>

      {/* Text */}
      <div className="pt-1">
        <h1
          className="font-serif font-light leading-[1.05] tracking-[-0.02em] mb-[10px]"
          style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#f5f0e8" }}
        >
          Anshuman
          <br />
          <em style={{ color: "#e8a84a" }}>Kharbade</em>
        </h1>

        <p
          className="font-serif text-[15px] font-light leading-[1.65] italic mb-[18px] max-w-[340px]"
          style={{ color: "rgba(245,240,232,0.55)" }}
        >
          Coder, Creator, thinker &amp; occasional oversharer — here's everything you
          need in one place.
        </p>

        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-[0.12em] uppercase px-3 py-[5px] rounded-[2px] border"
              style={{
                borderColor: "rgba(200,132,42,0.35)",
                color: "rgba(232,168,74,0.7)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
