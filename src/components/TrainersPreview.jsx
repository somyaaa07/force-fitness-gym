import { trainers } from "../data/trainers";
import TrainerCard from "./TrainerCard";
import SectionHeading from "./SectionHeading";

export default function TrainersPreview() {
  const featured = trainers.slice(0, 4);

  return (
    <section className="relative py-20 sm:py-28 bg-surface2/60 overflow-hidden">
      {/* faint hex watermark, echoes the card shape without competing */}
      <svg
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] text-primary/[0.04]"
        viewBox="0 0 100 100"
      >
        <polygon points="50,3 93,26 93,74 50,97 7,74 7,26" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <div className="container-x relative flex flex-col items-center">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Coaches Who"
          highlight="Show Up"
          className="mb-14"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 w-full">
          {featured.map((trainer, i) => (
            <div key={trainer.id} className={i % 2 === 1 ? "lg:mt-10" : ""}>
              <TrainerCard trainer={trainer} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}