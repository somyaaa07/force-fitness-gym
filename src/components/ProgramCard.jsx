import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramCard({ program }) {
  const Icon = program.icon;
  return (
    <Link
      to="/programs"
      className="group relative flex flex-col h-[400px] rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="absolute inset-0">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />
      </div>

      <div className="relative flex flex-col flex-1 justify-end p-6">
  
        <h3 className="font-teko text-3xl font-semibold text-offwhite uppercase leading-none">
          {program.title}
        </h3>

        <p className="font-inter text-sm text-body/90 mt-2.5 mb-4 line-clamp-2">
          {program.description}
        </p>

        <span className="inline-flex items-center gap-1.5 font-rajdhani font-bold text-sm uppercase tracking-wide text-primary">
          Learn More
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </span>
      </div>
    </Link>
  );
}