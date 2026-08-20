import { memberships } from "../data/memberships";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";

export default function MembershipSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface2">
      <div className="container-x flex flex-col items-center">
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your"
          highlight="Plan"
          align="center"
          className="mb-14"
        />

        <div className="grid sm:grid-cols-3 gap-6 w-full max-w-5xl sm:items-center">
          {memberships.map((plan) => (
            <div
              key={plan.id}
              className={plan.popular ? "sm:-translate-y-3" : "opacity-90"}
            >
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}