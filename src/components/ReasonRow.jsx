export default function ReasonRow({
  number,
  icon: Icon,
  title,
  description,
  accent = "primary",
  isActive = false, // new prop — controlled by parent for auto-cycle
}) {
  const accentColorClasses =
    accent === "primary"
      ? "border-primary/50 text-primary"
      : "border-secondary/50 text-secondary";

  const accentActiveClasses =
    accent === "primary"
      ? "group-hover:bg-primary group-hover:text-white"
      : "group-hover:bg-secondary group-hover:text-white";

  return (
    <div
      className={`group relative flex items-start gap-5 py-6 border-t border-white/10 last:border-b transition-colors duration-300 px-2 -mx-2 rounded-md ${
        isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.02]"
      }`}
    >
      {/* accent bar */}
      <span
        className={`absolute left-0 top-0 h-full w-[2px] origin-center transition-transform duration-300 ${
          isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
        } ${accent === "primary" ? "bg-primary" : "bg-secondary"}`}
      />

      {/* number watermark */}
      <span className="hidden sm:block font-teko text-5xl font-semibold text-white/5 leading-none select-none shrink-0 w-14">
        {number}
      </span>

      {/*
      <div
        className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-full border ${accentColorClasses} ${accentActiveClasses} transition-all duration-300`}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div> */}

      <div className="flex flex-col gap-1.5 pt-1">
        <h3 className="font-rajdhani font-bold text-heading uppercase tracking-wide text-lg">
          {title}
        </h3>
        <p className="font-inter text-sm text-body max-w-sm">{description}</p>
      </div>
    </div>
  );
}