import { ClipboardList, Dumbbell, TrendingUp, MessageCircleHeart } from "lucide-react";
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
        image="/servicebanner.png"
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="View Membership"
        secondaryBtnLink="/membership"
      />

      {/* Services list — alternating rows */}
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
                className={`group grid sm:grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8 card-dark p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 ${
                  i % 2 === 1 ? "sm:bg-white/[0.015]" : ""
                }`}
              >
                <div
                  className="w-16 h-16 shrink-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)",
                  }}
                >
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

                <span className="hidden sm:block font-teko text-5xl text-white/5 group-hover:text-primary/20 transition-colors duration-300 justify-self-end">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Started Is"
            highlight="Simple"
            align="center"
            className="mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, i) => (
              <div key={step.title} className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-teko text-4xl font-bold text-primary leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 border border-primary/40 text-primary">
                  <step.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-teko text-xl font-semibold uppercase text-heading leading-none">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-body leading-relaxed">
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
