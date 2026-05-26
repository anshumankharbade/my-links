export default function ProgressBar({ width, delay }) {
  return (
    <div
      className="mt-3 h-[1.5px] rounded-[1px] overflow-hidden"
      style={{ background: "rgba(245,240,232,0.08)" }}
    >
      <div
        className="h-full rounded-[1px] progress-bar-fill"
        style={{
          width,
          background: "linear-gradient(90deg, #c8842a 0%, #e8a84a 100%)",
          animationDelay: delay,
        }}
      />
    </div>
  );
}
