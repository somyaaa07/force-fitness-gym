import { Target, Eye, Building2, ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To give every member the coaching, tools and accountability they need to become their strongest self — not someday, starting now.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A training floor where showing up is the standard, not the exception — every single day, without excuses.",
  },
  {
    icon: Building2,
    title: "Why Force Fitness",
    desc: "Certified coaches, a floor built for real training, and a community that notices when you skip a session.",
  },
];

const facilities = [
  {
    title: "Strength Zone",
    desc: "45+ workout stations across a full range of strength and cardio equipment.",
    image:
      "https://i.pinimg.com/1200x/b5/07/dd/b507dd22388cf5c8a589d937e5250580.jpg",
  },
  {
    title: "Recovery Suite",
    desc: "Steam, sauna and ice bath therapy to help you recover faster between sessions.",
    image:
      "https://i.pinimg.com/1200x/b6/1e/4c/b61e4c19d13c419be7cd2f3bc31f667d.jpg",
  },
  {
    title: "Wellness & Lounge",
    desc: "On-site physiotherapy, an in-house cafe and a lounge area to unwind after training.",
    image:
      "https://i.pinimg.com/736x/a0/24/9b/a0249b22274c201a439d011b9168ef43.jpg",
  },
];

const stats = [
  { value: "8,500+", label: "Sq.Ft. Facility" },
  { value: "40+", label: "Workout Stations" },
  { value: "10+", label: "Certified Coaches" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Since Day One"
        title="More Than A"
        highlight="Gym"
        description="Fitness isn't a destination for us — it's the whole point. We built a floor where coaching actually means something and a recovery spa so the work you put in doesn't go to waste."
        image="/aboutbanner3.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="See Our Programs"
        secondaryBtnLink="/programs"
      />

      {/* Brand story — offset frame, text-led */}
      <section className="py-10 sm:py-24 overflow-hidden">
        <div className="container-x grid md:grid-cols-[1fr_1.05fr] gap-14 md:gap-16 items-center">
          {/* Image with layered offset frame instead of a shaped mask */}
          <div className="relative order-2 md:order-1">
            <div className="relative max-w-lg mx-auto">
              {/* <div
                className="absolute -bottom-4 -left-4 w-full h-full border border-primary/40"
                aria-hidden="true"
              /> */}
              <div className="relative aspect-[4/5] w-full overflow-hidden ">
                <img
                  src="https://i.pinimg.com/1200x/37/42/dc/3742dc4b31d2b7cd050256b51292c0f8.jpg"
                  alt="Trainer coaching a member at Force Fitness Gym"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 sm:-right-8 bg-surface border border-primary/40 px-4 sm:px-5 py-3 sm:py-4 max-w-[78%] sm:max-w-[230px] shadow-glow">
                <p className="font-teko text-base sm:text-lg text-heading leading-snug">
                  "We built the space we always wished existed."
                </p>
                <p className="font-rajdhani text-xs uppercase tracking-wide text-primary mt-2">
                  — Founder, Force Fitness Gym
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="section-heading">
              Fitness Is A <span className="text-primary">Lifestyle</span>,
              Not A Phase
            </h2>
            <p className="font-inter text-body">
              Force Fitness Gym was built on a simple belief: world-class
              training shouldn't be reserved for a select few. We combined a
              serious training floor with real coaching and a community that
              pushes you further than you'd go alone.
            </p>
            <p className="font-inter text-body">
              Every detail here is designed to remove friction between you
              and your goals. Whether you're chasing your first pull-up or
              your tenth competition, you belong on this floor.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-2 pt-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && (
                    <div className="w-px h-10 bg-white/10 hidden sm:block" />
                  )}
                  <div>
                    <div className="font-teko text-4xl font-bold text-heading leading-none">
                      {stat.value}
                    </div>
                    <div className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Why — bordered panels with a top accent rule */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our"
            highlight="Manifesto"
            align="left"
            className="mb-12 sm:mb-14"
          />

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((item, i) => (
              <div
                key={item.title}
                className="group relative flex flex-col gap-5 bg-surface border border-white/10 p-7 sm:p-8 pt-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                {/* top accent rule, expands on hover */}
                <span className="absolute top-0 left-0 h-[3px] w-10 bg-primary/50 group-hover:w-full transition-all duration-500" />

                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-teko text-sm text-muted tracking-widest mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-teko text-2xl sm:text-3xl font-semibold text-heading uppercase leading-tight">
                  {item.title}
                </h3>

                <p className="font-inter text-sm sm:text-base text-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 sm:py-24">
        <div className="container-x flex flex-col items-center">
          <SectionHeading
            eyebrow="Our Space"
            title="Built For"
            highlight="Real Training"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6 w-full">
            {facilities.map((f, i) => (
              <div
                key={f.title}
                className="group relative overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />

                {/* same ghost-numeral device used in the manifesto, for a consistent signature */}
                <span className="absolute top-3 left-4 font-teko text-5xl font-bold text-white/20 group-hover:text-primary/40 transition-colors duration-300 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-0 p-6 w-full flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-teko text-2xl font-semibold text-offwhite uppercase leading-none">
                      {f.title}
                    </h3>
                    <p className="font-inter text-xs text-body mt-1.5 max-w-[220px]">
                      {f.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}