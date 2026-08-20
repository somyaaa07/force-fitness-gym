import { useState } from "react";
import PageHero from "../components/PageHero";
import TrainerCard from "../components/TrainerCard";
import { trainers } from "../data/trainers";

const categories = ["All", "Strength", "Weight Loss", "Functional", "Cardio", "Nutrition"];

export default function Trainers() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? trainers : trainers.filter((t) => t.category === active);

  return (
    <>
      <PageHero
        eyebrow="The Floor Team"
        title="Coaches Who"
        highlight="Show Up"
        description="Six certified coaches, each running their own specialty, all invested in the same thing — you actually hitting your goal."
        image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-rajdhani font-bold uppercase tracking-wide text-sm px-5 py-2.5 rounded-md border transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent border-white/15 text-body hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted font-inter mt-10">
              No trainers found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
