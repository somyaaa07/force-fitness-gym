import { Dumbbell, Award, Snowflake, HeartPulse, Coffee } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Coaches Who Coach",
    description: "Certified, on the floor, watching your form — not just swiping you in at the door.",
  },
  {
    icon: Dumbbell,
    title: "Zero Wait Time",
    description: "40+ stations of strength and cardio gear so peak hour never means a queue.",
  },
  {
    icon: Snowflake,
    title: "Built-In Recovery",
    description: "Steam, sauna and ice bath included — recovery isn't sold as an add-on here.",
  },
  {
    icon: HeartPulse,
    title: "On-Site Physio",
    description: "Injury care on-site, so a tweak doesn't turn into three weeks off.",
  },
  {
    icon: Coffee,
    title: "Cafe & Lounge",
    description: "Grab a protein shake or unwind in the lounge before you head back out.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Members"
          highlight="Stay"
          align="left"
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          
          
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative border border-white/10 bg-surface p-6 flex flex-col gap-3  transition-all duration-300"
            >
              

              <r.icon size={22} strokeWidth={1.75} className="text-primary" />
              <h3 className="font-rajdhani font-bold text-heading uppercase tracking-wide text-sm">
                {r.title}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-body leading-relaxed">
                {r.description}
              </p>

            </div>
            
          ))}
        </div>
   

        {/* full-width featured banner */}
        <div className="relative overflow-hidden border border-white/10 min-h-[240px] sm:min-h-[300px] mt-5 sm:mt-6 group">
          <img
            src="https://i.pinimg.com/1200x/f1/5f/74/f15f74a6029b7a076c31da6bc6de4ad4.jpg"
            alt="Member training at Force Fitness Gym "
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-center p-7 sm:p-10 gap-2 max-w-sm">
            <span className="font-teko text-5xl sm:text-6xl font-bold text-primary leading-none">
              8,500+
            </span>
            <p className="font-rajdhani text-sm uppercase tracking-[0.15em] text-heading/90">
              Sq. Ft. Of Training Floor — Built To Never Feel Crowded
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
