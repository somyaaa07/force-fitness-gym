export default function BenefitCard({ icon: Icon, title, className = "", ...rest }) {
  return (
    <div
      className={`group card-dark flex flex-col items-center text-center gap-3 px-6 py-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${className}`}
      {...rest}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full border border-primary/40 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className="font-rajdhani font-bold text-heading uppercase tracking-wide text-base">
        {title}
      </h3>
    </div>
  );
}
