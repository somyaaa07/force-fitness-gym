import { useState, useEffect, useRef } from "react";
import { Clock, BarChart3, User, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { programs } from "../data/programs";
import CTASection from "../components/CTASection";

const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

const hexClip = "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)";
const AUTOPLAY_DELAY = 4000; // ms between auto-advances
const RESUME_AFTER = 8000; // ms of no interaction before autoplay resumes

export default function Programs() {
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState(programs[0]?.id);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);

  const filtered =
    active === "All" ? programs : programs.filter((p) => p.difficulty === active);

  // Auto-advance to the next program on a timer
  useEffect(() => {
    if (paused || filtered.length === 0) return;

    const interval = setInterval(() => {
      setOpenId((current) => {
        const idx = filtered.findIndex((p) => p.id === current);
        const next = filtered[(idx + 1) % filtered.length];
        return next?.id;
      });
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [paused, filtered]);

  // Reset to first item whenever the filter changes
  useEffect(() => {
    setOpenId(filtered[0]?.id);
  }, [active]);

  // Pause autoplay on manual interaction, resume after a period of inactivity
  const handleManualToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_AFTER);
  };

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes yfc-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) {
          [style*="yfc-progress"] { animation: none !important; }
        }
      `}</style>

      <PageHero
        eyebrow="The Menu"
        title="Train With A"
        highlight="Plan"
        description="Strength, fat loss, mobility, conditioning — eight coach-led programs, each built to meet you exactly where you are and move you toward what you're actually chasing."
        image="/programsbanner2.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="Discover Our Story"
        secondaryBtnLink="/about"
      />

      {/* Filter bar */}
      <section className="pt-16 sm:pt-24">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-3">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setActive(d)}
                className={`font-rajdhani font-bold uppercase tracking-wide text-sm px-5 py-2.5 border transition-all duration-300 ${
                  active === d
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent border-white/15 text-body hover:border-primary hover:text-primary"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program list — expandable rows, uniform layout */}
      <section className="py-12 sm:py-16">
        <div className="container-x flex flex-col border-t border-white/10">
          {filtered.map((program, i) => {
            const Icon = program.icon;
            const isOpen = openId === program.id;

            return (
              <div key={program.id} className="border-b border-white/10">
                <button
                  onClick={() => handleManualToggle(program.id)}
                  className="w-full grid grid-cols-[56px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-center gap-4 sm:gap-8 py-7 sm:py-8 text-left group"
                >
                  <span className="font-teko text-3xl sm:text-4xl font-bold text-white/15 group-hover:text-primary/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-4">
                    <div
                      className="hidden sm:flex w-12 h-12 items-center justify-center bg-primary/10 text-primary shrink-0"
                      style={{ clipPath: hexClip }}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-teko text-2xl sm:text-4xl font-semibold text-heading uppercase leading-tight">
                        {program.title}
                      </h3>
                      <p className="hidden sm:block font-inter text-sm text-muted mt-1 max-w-md">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={20}
                    className={`text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </button>

                {/* autoplay progress bar — only shows on the active row while autoplay is running */}
          

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid sm:grid-cols-[1fr_1.2fr] gap-6 sm:gap-10 pb-8 sm:pb-10 items-center">
                      <div className="relative h-56 sm:h-72 overflow-hidden border border-white/10">
                        <img
                          src={program.image}
                          alt={program.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col gap-4">
                        <p className="font-inter text-body text-sm sm:text-base leading-relaxed">
                          {program.longDescription}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 border-y border-white/10">
                          <span className="flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-wide text-muted">
                            <Clock size={15} className="text-primary shrink-0" />
                            {program.duration}
                          </span>
                          <span className="flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-wide text-muted">
                            <BarChart3 size={15} className="text-primary shrink-0" />
                            {program.difficulty}
                          </span>
                          <span className="flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-wide text-muted">
                            <User size={15} className="text-primary shrink-0" />
                            {program.trainer}
                          </span>
                        </div>
               
                        <a
                          href="/contact"
                          className="btn-primary w-fit !py-3 text-sm"
                        >
                          Book A Session
                        </a>
                                       {isOpen && !paused && (
                  <div className="h-[2px] w-full bg-white/5 -mt-7 sm:-mt-8 mb-7 sm:mb-8">
                    <div
                      key={program.id}
                      className="h-full bg-primary origin-left"
                      style={{
                        animation: `yfc-progress ${AUTOPLAY_DELAY}ms linear forwards`,
                      }}
                    />
                  </div>
                )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center text-muted font-inter py-16">
              No programs found in this category.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}