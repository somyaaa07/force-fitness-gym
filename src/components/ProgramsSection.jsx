import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { programs } from "../data/programs";
import ProgramCard from "./ProgramCard";
import SectionHeading from "./SectionHeading";

export default function ProgramsSection() {
  const featured = programs.slice(0, 6);

  return (
    <section className="relative py-20 sm:py-28 bg-bg">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Training Menu"
            title="Pick Your"
            highlight="Program"
            align="left"
          />
          <Link
            to="/programs"
            className="group hidden sm:inline-flex items-center gap-2 font-rajdhani font-bold uppercase tracking-wide text-sm text-primary hover:text-heading transition-colors duration-300 shrink-0"
          >
            View Full Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="flex sm:hidden justify-center mt-10">
          <Link
            to="/programs"
            className="group inline-flex items-center gap-2 font-rajdhani font-bold uppercase tracking-wide text-sm text-primary"
          >
            View Full Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
