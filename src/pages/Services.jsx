import {
  ClipboardList,
  Dumbbell,
  TrendingUp,
  MessageCircleHeart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { services } from "../data/services";

const process = [
  {
    icon: ClipboardList,
    title: "Free Consultation",
    description:
      "We start with a quick assessment of your goals, schedule and fitness level so every recommendation actually fits you.",
  },
  {
    icon: Dumbbell,
    title: "Custom Plan",
    description:
      "Your trainer builds a training and nutrition plan around the service you pick — no generic templates.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Regular check-ins, measurements and program tweaks keep you moving toward your goal, not stuck on a plateau.",
  },
  {
    icon: MessageCircleHeart,
    title: "Ongoing Support",
    description:
      "Your coach and our team stay in your corner — in the gym, on call, or through the app — for as long as you train with us.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Beyond The Floor"
        title="What We "
        highlight="Offer"
        description="From one-on-one coaching to corporate wellness plans — every service here is run by a certified professional and built around results, not upsells."
        image="/servicebanner2.png"
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="View Membership"
        secondaryBtnLink="/membership"
      />

      {/* Services list — alternating rows, each one now actionable */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything You Need To"
            highlight="Train Smarter"
            align="center"
            className="mb-16"
          />

          <div className="flex flex-col gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group grid sm:grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8 card-dark p-6 sm:p-8 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300 ${
                  i % 2 === 1 ? "sm:bg-white/[0.015]" : ""
                }`}
              >
                <div className="w-16 h-16 shrink-0 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <s.icon
                    size={26}
                    strokeWidth={1.75}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <h3 className="font-teko text-2xl sm:text-3xl font-semibold uppercase text-heading leading-none mb-2">
                    {s.title}
                  </h3>
                  <p className="font-inter text-sm text-body leading-relaxed max-w-2xl">
                    {s.description}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="hidden sm:inline-flex items-center gap-1.5 shrink-0 justify-self-end font-rajdhani font-bold uppercase text-xs tracking-wide text-primary border border-primary/30 rounded-full px-4 py-2.5 hover:bg-primary hover:text-black transition-colors duration-300"
                >
                  Get Started
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>

                {/* mobile-only equivalent, since the grid's third column is hidden below sm */}
                <Link
                  to="/contact"
                  className="sm:hidden inline-flex items-center justify-center gap-1.5 font-rajdhani font-bold uppercase text-xs tracking-wide text-primary border border-primary/30 rounded-full px-4 py-2.5 w-full"
                >
                  Get Started
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — a real connected timeline, not 4 disconnected cards */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Started Is"
            highlight="Simple"
            align="center"
            className="mb-16 sm:mb-20"
          />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-8">
            {/* connecting line — only reads correctly once all 4 steps share one row */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-white/10" />

            {process.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center gap-4"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-surface2 border border-primary/40 flex items-center justify-center text-primary">
                    <step.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-black text-[11px] font-bold font-teko flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-teko text-xl font-semibold uppercase text-heading leading-none">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-body leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}