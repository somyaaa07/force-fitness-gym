import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-bg overflow-hidden">
      <div className="container-x relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading eyebrow="What We Do" title="Our" highlight="Services" align="left" />
          <Link
            to="/services"
            className="group hidden sm:inline-flex items-center gap-2 font-rajdhani font-bold uppercase tracking-wide text-sm text-primary hover:text-heading transition-colors duration-300 shrink-0"
          >
            View All Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <Link
              to="/services"
              key={s.title}
              className="group relative flex flex-col p-[1px] rounded-2xl"
            >
        {/* gradient border that appears on hover */}
<span
  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  style={{
    background: "linear-gradient(135deg, #A6151A, transparent 60%)",
  }}
/>
              {/* <span className="absolute inset-0 rounded-2xl bg-white group-hover:bg-transparent transition-colors duration-500" /> */}

              <div className="relative flex flex-col h-full p-6 sm:p-7 rounded-2xl bg-[#0d0d0d]">
                <div className="flex items-center justify-between mb-7">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-primary transition-colors duration-300">
                    <s.icon size={19} strokeWidth={1.75} className="text-white/70 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="font-rajdhani font-semibold text-[11px] tracking-[0.25em] text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-teko text-2xl font-semibold uppercase text-white leading-none">
                  {s.title}
                </h3>
                <p className="font-inter text-[13px] text-white/50 leading-relaxed mt-3 flex-1">
                  {s.description}
                </p>

                <span className="inline-flex items-center gap-1.5 font-rajdhani font-bold text-xs uppercase tracking-wide text-white/80 group-hover:text-primary transition-colors duration-300 mt-6">
                  Learn More
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex sm:hidden justify-center mt-10">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-rajdhani font-bold uppercase tracking-wide text-sm text-primary"
          >
            View All Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}