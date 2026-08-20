export default function StatCard({ number, label, className = "" }) {
  return (
    <div
      className={`bg-black/60 backdrop-blur-md border border-primary/30 rounded-lg px-5 py-4 shadow-glow ${className}`}
    >
      <p className="font-teko text-4xl sm:text-5xl font-semibold text-primary leading-none">
        {number}
      </p>
      <p className="font-rajdhani text-xs sm:text-sm font-semibold tracking-widest text-body uppercase mt-1">
        {label}
      </p>
    </div>
  );
}
