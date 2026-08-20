import { Check } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function PricingCard({ plan }) {
  const { name, price, period, popular, features } = plan;

  return (
    <div
      className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 ${
        popular
          ? "bg-surface border-2 border-primary shadow-glow lg:scale-105 z-10"
          : "bg-surface border border-white/10 hover:border-white/25"
      }`}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white font-rajdhani font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
          Most Popular
        </span>
      )}

      <h3
        className={`font-teko text-3xl font-semibold uppercase leading-none ${
          popular ? "text-primary" : "text-heading"
        }`}
      >
        {name}
      </h3>

      <div className="flex items-end gap-1.5 mt-5 mb-1">
        <span className="font-teko text-5xl font-bold text-offwhite leading-none tabular-nums">
          {price}
        </span>
        <span className="font-rajdhani text-muted text-sm mb-1">{period}</span>
      </div>

      <div className="h-px bg-white/10 my-6" />

      <ul className="flex flex-col gap-3.5 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-body font-inter">
            <span
              className={`shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
                popular ? "bg-primary/20 text-primary" : "bg-white/5 text-muted"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
<Link to ="/contact">
      <button
        className={`w-full font-rajdhani font-bold uppercase tracking-wide py-3.5 rounded-md transition-all duration-300 ${
          popular
            ? "bg-primary text-white hover:bg-primaryDark hover:shadow-glow"
            : "bg-transparent border border-white/15 text-offwhite hover:border-primary hover:text-primary"
        }`}
      >
        Choose Plan
      </button>
      </Link>
    </div>
  );
}