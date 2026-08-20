import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { memberships } from "../data/memberships";

export default function MembershipPromoSection() {
  const featured = memberships.find((m) => m.popular) || memberships[0];

  return (
    <section className="relative py-20 sm:py-28 bg-surface2">
      <div className="container-x">
        <div className="relative overflow-hidden border border-white/10 grid lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: featured plan */}
          <div className="bg-surface p-8 sm:p-10 flex flex-col justify-center gap-6 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10">
            <div className="flex items-center justify-between">
              <span className="font-rajdhani font-bold uppercase tracking-widest text-xs text-primary">
                Most Popular
              </span>
              <span className="font-teko text-2xl font-semibold text-heading uppercase">
                {featured.name}
              </span>
            </div>

            <div className="flex items-end gap-1.5">
              <span className="font-teko text-6xl font-bold text-offwhite leading-none tabular-nums">
                {featured.price}
              </span>
              <span className="font-rajdhani text-muted text-sm mb-1">{featured.period}</span>
            </div>

            <ul className="flex flex-col gap-3">
              {featured.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-body font-inter">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center bg-primary/15 text-primary">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                to="/contact"
                className="flex-1 text-center font-rajdhani font-bold uppercase tracking-wide py-3.5 bg-primary text-white hover:opacity-90 transition"
              >
                Join Now
              </Link>
              <Link
                to="/membership"
                className="flex-1 inline-flex items-center justify-center gap-2 font-rajdhani font-bold uppercase tracking-wide py-3.5 border border-white/15 text-offwhite hover:border-primary hover:text-primary transition-colors"
              >
                Compare Plans
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: banner image + copy */}
          <div className="relative min-h-[320px] lg:min-h-[420px] p-8 sm:p-12 flex flex-col justify-end order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop"
              alt="Force Fitness Gym & Spa training floor"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

            <div className="relative flex flex-col gap-4">
              <span className="eyebrow">Membership</span>
              <h2 className="section-heading">
                Your Only Limit Is <span className="text-primary">You</span>
              </h2>
              <p className="font-inter text-body text-sm max-w-sm">
                Pick a plan that fits how you train — upgrade, downgrade or
                freeze it anytime, no lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
