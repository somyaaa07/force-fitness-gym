import { useState, useEffect, useRef } from "react";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = ["Coaching", "Programming", "Community", "Recovery"];

const stats = [
  { number: "4.7★", label: "Member Rating" },
  { number: "40+", label: "Workout Stations" },
  { number: "15+", label: "Coaches & Staff" },
  { number: "7", label: "Days A Week" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-surface2/60 py-20 sm:py-28">
      <div className="container-x">
        <div
          className={`grid lg:grid-cols-[0.6fr_1fr] gap-10 lg:gap-16 items-start transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left: quote card + stat cards */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <div className="relative bg-surface border border-white/10 p-7 sm:p-8 flex flex-col gap-8">
              <span className="font-teko text-6xl text-primary leading-none">"</span>
              <p className="font-inter text-body text-sm sm:text-base italic">
                Consistency beats intensity. Show up, do the work that's on
                the board, and the results take care of themselves.
              </p>
              <div>
                <p className="font-rajdhani font-bold text-heading uppercase text-sm tracking-wide">
                  Founder's Note
                </p>
                <p className="font-inter text-xs text-muted mt-0.5">
                  Force Fitness Gym , Gaur City 2, Noida
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="border border-white/10 bg-surface p-5">
                  <div className="font-teko text-3xl sm:text-4xl font-bold text-heading tabular-nums">
                    {s.number}
                  </div>
                  <div className="font-rajdhani text-[11px] uppercase tracking-[0.12em] text-muted mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: statement */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <span className="eyebrow">Our Story</span>
            <p className="font-teko text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-heading leading-[1.02]">
              Built for those <span className="text-primary">who put in the work</span>
            </p>
            <p className="font-inter text-body text-sm sm:text-base max-w-xl">
              Force Fitness Gym  opened in Gaur City 2 with one simple
              rule — every program has to earn its place. That's still how
              we run things: real coaching, honest programming, and a
              recovery spa on-site so the work you put in on the floor
              actually sticks.
            </p>
            <p className="font-inter text-body text-sm sm:text-base max-w-xl">
              No fads, no gimmicks — just a floor full of equipment that
              works, coaches who correct your form instead of counting your
              reps, and a spa to put you back together afterward.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-primary border border-primary/40 px-4 py-2"
                >
                  {p}
                </span>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex w-fit items-center gap-2 text-heading font-rajdhani font-bold uppercase text-sm tracking-wide mt-2 border-b-2 border-primary pb-1"
            >
              Read Our Full Story
              <Dumbbell size={15} className="transition-transform group-hover:rotate-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
