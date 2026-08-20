export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  align = "center",
  className = "",
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="eyebrow relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-[2px] before:bg-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
    </div>
  );
}
