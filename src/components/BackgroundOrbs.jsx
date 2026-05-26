const orbs = [
  { w: 600, h: 600, bg: "#c8842a", top: -200, right: -100, delay: "0s" },
  { w: 400, h: 400, bg: "#b87a3a", bottom: 0, left: -100, delay: "-10s" },
  { w: 300, h: 300, bg: "#e8a84a", top: "40%", left: "30%", delay: "-5s", opacity: 0.03 },
];

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.w,
            height: orb.h,
            background: orb.bg,
            top: orb.top,
            right: orb.right,
            bottom: orb.bottom,
            left: orb.left,
            filter: "blur(80px)",
            opacity: orb.opacity ?? 0.06,
            animation: `drift 20s ease-in-out infinite alternate ${orb.delay}`,
          }}
        />
      ))}
    </div>
  );
}
