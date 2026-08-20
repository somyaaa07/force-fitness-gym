export default function TrainerCard({ trainer }) {
  return (
    <div className="group flex flex-col items-center text-center gap-4">
      <div className="relative w-40 h-40 sm:w-44 sm:h-44">
        <div
          className="absolute inset-0 bg-primary/20 group-hover:bg-primary transition-colors duration-300"
          style={{ clipPath: "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)" }}
        />
        <div
          className="absolute inset-[6px] overflow-hidden"
          style={{ clipPath: "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)" }}
        >
          <img
            src={trainer.image}
            alt={trainer.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      <div>
        <h3 className="font-teko text-2xl font-semibold text-offwhite uppercase leading-none">
          {trainer.name}
        </h3>
        <p className="font-rajdhani text-sm font-semibold text-primary uppercase tracking-wide mt-1.5">
          {trainer.specialization}
        </p>
        <p className="font-inter text-xs text-muted mt-1">{trainer.experience}</p>
      </div>
    </div>
  );
}
