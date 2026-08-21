import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const quickStats = [
  { number: "40+", label: "Workout Stations" },
  { number: "15+", label: "Certified Coaches" },
  { number: "4.7★", label: "Member Rating" },
];

const tickerWords = ["STRENGTH", "RECOVERY", "GYM", "FITNESS", "NOIDA"];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full bg-bg overflow-hidden">
      <style>{`
        @keyframes yfc-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .yfc-ticker-track { animation: yfc-ticker 20s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .yfc-ticker-track { animation: none; } }
      `}</style>

      <div className="relative min-h-[620px] sm:min-h-[720px] lg:min-h-[820px] flex items-center">
        <img
          src="/banner3.png"
          alt="Force Fitness Gym & Spa training floor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent lg:to-bg/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />

        {/* pinned to true left edge, no centered container */}
        <div className="relative w-full pl-6 xs:pl-8 sm:pl-12 lg:pl-20 xl:pl-12 pr-6 -mt-20">
          <div className="flex flex-col gap-5 sm:gap-6 max-w-xl text-left">
            <span
              className={`eyebrow transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Force Fitness Gym · Gaur City 2
            </span>

            <h1
              className={`font-teko font-black uppercase leading-[0.92] text-5xl xs:text-6xl sm:text-7xl lg:text-7xl text-heading transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Train Hard.
              <br />
              <span className="text-primary">Recover</span> Harder.
            </h1>

            <p
              className={`font-inter text-body text-sm sm:text-base max-w-md transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              One roof, two missions: a fully equipped strength floor and a
              full-service recovery spa in the heart of Gaur City 2, Noida.
              Steam, sauna, ice bath and massage — all included.
            </p>

            <div
              className={`flex flex-col xs:flex-row gap-3 xs:gap-4 w-full xs:w-auto transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                to="/membership"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 transition w-full xs:w-auto"
              >
                Start Training
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/gallery"
                className="group inline-flex items-center justify-center gap-2 border border-white/25 hover:border-primary hover:text-primary text-heading font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 transition-colors w-full xs:w-auto"
              >
                <Play size={14} /> Take A Look Inside
              </Link>
            </div>

            <div
              className={`grid grid-cols-3 gap-4 sm:gap-6 pt-6 mt-1 border-t border-white/10 transition-all duration-700 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {quickStats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-teko text-2xl sm:text-4xl font-bold text-heading tabular-nums leading-none">
                    {s.number}
                  </span>
                  <span className="font-rajdhani text-[9px] xs:text-[10px] uppercase tracking-[0.1em] text-muted mt-1.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-primary overflow-hidden">
        <div className="flex whitespace-nowrap py-2.5 xs:py-3 sm:py-3.5 yfc-ticker-track w-max">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => (
            <span
              key={i}
              className="flex items-center font-teko text-sm xs:text-base sm:text-xl md:text-2xl font-bold uppercase text-white tracking-wide px-3 xs:px-4 sm:px-6"
            >
              {w}
              <span className="mx-3.5 xs:mx-4 sm:mx-6 w-1.5 h-1.5 rounded-full bg-black/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}