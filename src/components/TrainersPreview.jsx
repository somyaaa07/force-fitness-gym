import { trainers } from "../data/trainers";
import TrainerCard from "./TrainerCard";
import SectionHeading from "./SectionHeading";

export default function TrainersPreview() {
  const featured = trainers.slice(0, 4);

  return (
    <section className="relative py-20 sm:py-28 bg-surface2/60">
      <div className="container-x flex flex-col items-center">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Coaches Who"
          highlight="Show Up"
          className="mb-14"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 w-full">
          {featured.map((trainer, i) => (
            <div key={trainer.id} className={i % 2 === 1 ? "lg:mt-10" : ""}>
              <TrainerCard trainer={trainer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
