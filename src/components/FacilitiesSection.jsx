import { amenities, equipmentPartners } from "../data/amenities";
import SectionHeading from "./SectionHeading";

export default function FacilitiesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface2/80 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="The Facility"
            title="What's On"
            highlight="The Floor"
            align="left"
          />

          <div className="flex items-center gap-3 shrink-0 border border-primary/40 bg-primary/10 px-5 py-3">
            <span className="font-teko text-3xl sm:text-4xl font-bold text-primary leading-none">
              8,500+
            </span>
            <span className="font-rajdhani text-xs uppercase tracking-wide text-muted leading-tight">
              Sq.Ft. <br /> Area
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="group relative flex items-center gap-4 border-b border-white/10 py-4 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <a.icon size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-rajdhani font-bold text-heading text-sm uppercase tracking-wide leading-tight">
                  {a.title}
                </h3>
                <p className="font-inter text-xs text-muted mt-0.5">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* brand strip */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <span className="font-rajdhani font-bold uppercase tracking-[0.15em] text-xs sm:text-sm text-muted">
            Our Philosophy
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {equipmentPartners.map((p) => (
              <span
                key={p}
                className="font-teko text-2xl sm:text-3xl font-bold uppercase text-heading/80 tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
