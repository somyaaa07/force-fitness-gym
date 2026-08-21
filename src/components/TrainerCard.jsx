export default function TrainerCard({ trainer, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href="#"
      className="group relative block aspect-[3/4] w-full overflow-hidden bg-surface2 border border-white/5 hover:border-primary/40 transition-colors duration-300"
    >
      <img
        src={trainer.image}
        alt={trainer.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      />

      {/* base readability scrim, strengthens on hover so text stays legible over color image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-black/95 transition-all duration-500" />

      {/* roster number, top-left */}
      <div className="absolute top-4 left-4 flex items-baseline gap-1 font-rajdhani">
        <span className="text-[11px] font-semibold text-primary tracking-[0.2em]">N°</span>
        <span className="text-[11px] font-semibold text-offwhite/70 tracking-[0.2em]">{num}</span>
      </div>

      {/* specialization tag, top-right, only on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        <span className="font-rajdhani text-[10px] font-bold text-primary uppercase tracking-[0.15em] border border-primary/50 px-2 py-1">
          {trainer.specialization}
        </span>
      </div>

      {/* name plate, bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-teko text-4xl font-semibold text-offwhite uppercase leading-[0.85] tracking-wide">
          {trainer.name}
        </h3>

        {/* specialization always visible on mobile / no-hover, small */}
        <p className="font-rajdhani text-xs font-semibold text-primary uppercase tracking-widest mt-1 group-hover:opacity-0 transition-opacity duration-200">
          {trainer.specialization}
        </p>

        {/* experience, slides up on hover */}
        <p className="font-inter text-xs text-offwhite/70 max-h-0 group-hover:max-h-10 overflow-hidden transition-all duration-500 mt-0 group-hover:mt-2">
          {trainer.experience}
        </p>
      </div>
    </a>
  );
}