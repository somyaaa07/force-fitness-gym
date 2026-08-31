import SectionHeading from "../components/SectionHeading";

const founders = [
  {
    name: "Akash Yadav",
    role: "Co-Founder & Director",
  },
  {
    name: "Sachin Tiwari",
    role: "Co-Founder & Head Coach",
  },
  {
    name: "Harsh Yadav",
    role: "Co-Founder & Community Lead",
  },
];

export default function Founders() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="container-x grid md:grid-cols-[1fr_1.05fr] gap-14 md:gap-16 items-center">
        {/* Image side — single group photo */}
        <div className="relative order-2 md:order-1">
          <div className="relative max-w-lg mx-auto">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src="/founder.jpeg"
                alt="Akash Yadav, Sachin Tiwari and Harsh Yadav, founders of Force Fitness Gym"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 sm:-right-8 bg-surface border border-primary/40 px-4 sm:px-5 py-3 sm:py-4 max-w-[78%] sm:max-w-[230px] shadow-glow">
              <p className="font-teko text-base sm:text-lg text-heading leading-snug">
                "We built the space we always wished existed."
              </p>
              <p className="font-rajdhani text-xs uppercase tracking-wide text-primary mt-2">
                — The Founders
              </p>
            </div>
          </div>
        </div>

        {/* Text side — all three founders */}
        <div className="flex flex-col gap-6 order-1 md:order-2">
          <span className="eyebrow">The People Behind It</span>
          <h2 className="section-heading">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
          <p className="font-inter text-body">
            Force Fitness Gym was started by three people who believed a
            training floor should mean more than machines and mirrors —
            Akash Yadav, Sachin Tiwari and Harsh Yadav each brought a
            different piece of what this place stands for today: real
            coaching, real systems and a community that shows up.
          </p>

          <div className="flex flex-col gap-5 mt-2 pt-6 border-t border-white/10">
            {founders.map((founder) => (
              <div key={founder.name}>
                <h3 className="font-teko text-2xl font-semibold text-heading uppercase leading-none">
                  {founder.name}
                </h3>
                <p className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1.5">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}