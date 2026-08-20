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

const hexClip = "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Since Day One"
        title="More Than Just A"
        highlight="Gym"
        description="Fitness isn't a destination for us — it's the whole point. We built a floor where coaching actually means something and a recovery spa so the work you put in doesn't go to waste."
        image="/AboutBanner.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="See Our Programs"
        secondaryBtnLink="/programs"
      />

      {/* Brand story — hex-clipped image, text-led */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="container-x grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
          {/* Hex image */}
          <div className="relative order-2 md:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/37/42/dc/3742dc4b31d2b7cd050256b51292c0f8.jpg"
                  alt="Trainer coaching a member at Force Fitness Gym & Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-surface border border-primary/40 px-4 sm:px-5 py-3 sm:py-4 max-w-[75%] sm:max-w-[230px] shadow-glow">
                <p className="font-teko text-base sm:text-lg text-heading leading-snug">
                  "We built the space we always wished existed."
                </p>
                <p className="font-rajdhani text-xs uppercase tracking-wide text-primary mt-2">
                  — Founder, Force Fitness Gym & Spa
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
              Force Fitness Gym & Spa was built on a simple belief: world-class
              training shouldn't be reserved for a select few. We combined a
              serious training floor with real coaching and a community that
              pushes you further than you'd go alone.
            </p>
            <p className="font-inter text-body">
              Every detail here is designed to remove friction between you
              and your goals. Whether you're chasing your first pull-up or
              your tenth competition, you belong on this floor.
            </p>

            <div className="flex items-center gap-8 mt-2 pt-6 border-t border-white/10">
              <div>
                <div className="font-teko text-4xl font-bold text-heading leading-none">
                  8,500+
                </div>
                <div className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1">
                  Sq.Ft. Facility
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-teko text-4xl font-bold text-heading leading-none">
                  40+
                </div>
                <div className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1">
                  Workout Stations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Why — manifesto rows, not a card grid */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our"
            highlight="Manifesto"
            align="left"
            className="mb-12 sm:mb-14"
          />

          <div className="flex flex-col border-t border-white/10">
            {pillars.map((item, i) => (
              <div
                key={item.title}
                className="group grid sm:grid-cols-[80px_180px_1fr] gap-4 sm:gap-8 items-start sm:items-center py-8 border-b border-white/10"
              >
                <span className="font-teko text-4xl sm:text-5xl font-bold text-white/10 group-hover:text-primary/30 transition-colors duration-300 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 flex items-center justify-center  text-primary shrink-0"
                 
                  >
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-teko text-xl sm:text-2xl font-semibold text-heading uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="font-inter text-sm sm:text-base text-body max-w-xl">
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
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />
                <span
                  className="absolute top-4 left-4 font-teko text-sm font-bold text-white bg-primary w-8 h-8 flex items-center justify-center"
                  style={{ clipPath: hexClip }}
                >
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
                    className="shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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