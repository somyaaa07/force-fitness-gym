import { useState, useRef, useEffect } from "react";
import { Check, X, Plus, Minus, Crown, ShieldCheck, Sparkles, Dumbbell } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import { memberships, comparisonFeatures, membershipFaqs } from "../data/memberships";

const planIcons = { basic: ShieldCheck, premium: Sparkles, ultimate: Dumbbell };

const trustPoints = [
  "No joining fee",
  "Month-to-month, cancel anytime",
  "One-day free trial pass",
];

function parsePrice(price) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group relative rounded-xl p-[1.5px] transition-all duration-500 ${
        open
          ? "bg-gradient-to-r from-primary/70 via-primary/30 to-transparent"
          : "bg-gradient-to-br from-white/10 to-white/[0.03] hover:from-primary/40 hover:to-white/5"
      }`}
    >
      <div className="rounded-[10px] bg-surface overflow-hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center gap-3 sm:gap-5 px-4 sm:px-6 py-4 sm:py-5 text-left"
        >
          <span
            className={`font-teko text-2xl sm:text-3xl md:text-4xl font-semibold leading-none shrink-0 transition-colors duration-300 ${
              open ? "text-primary" : "text-white/10"
            }`}
          >
            {num}
          </span>
          <span
            className={`flex-1 font-rajdhani font-semibold uppercase tracking-wide text-xs sm:text-sm md:text-base transition-colors duration-300 ${
              open ? "text-primary" : "text-heading"
            }`}
          >
            {q}
          </span>
          <span
            className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "bg-primary border-primary text-white"
                : "border-white/20 text-body group-hover:border-primary/60 group-hover:text-primary"
            }`}
          >
            {open ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="font-inter text-sm text-body pl-[2.5rem] sm:pl-[3rem] md:pl-[4.75rem] pr-4 sm:pr-8 md:pr-14 pb-5 -mt-1">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BillingToggle({ annual, setAnnual }) {
  return (
    <div className="relative inline-flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm w-full max-w-[280px] sm:w-auto sm:max-w-none">
      <span
        className="absolute top-1.5 bottom-1.5 w-[calc(45%-4px)] rounded-full bg-primary transition-all duration-300 ease-out"
        style={{ left: annual ? "calc(55% - 25px)" : "6px" }}
      />
      <button
        onClick={() => setAnnual(false)}
        className={`relative z-10 flex-1 sm:flex-none font-rajdhani font-bold uppercase text-xs sm:text-sm tracking-wide px-4 sm:px-6 py-2.5 rounded-full transition-colors duration-300 ${
          !annual ? "text-white" : "text-body hover:text-heading"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setAnnual(true)}
        className={`relative z-10 flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 font-rajdhani font-bold uppercase text-xs sm:text-sm tracking-wide px-4 sm:px-6 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap ${
          annual ? "text-white" : "text-body hover:text-heading"
        }`}
      >
        Annual
        <span
          className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full ${
            annual ? "bg-black/15 text-white" : "bg-primary/15 text-primary"
          }`}
        >
          2 mo free
        </span>
      </button>
    </div>
  );
}

function PlanCard({ plan, annual, selected, onSelect }) {
  const Icon = planIcons[plan.id] || ShieldCheck;
  const monthly = parsePrice(plan.price);
  const displayPrice = annual ? formatINR(monthly * 10) : plan.price;
  const displayPeriod = annual ? "/ year" : plan.period;

  return (
    <div
      onClick={() => onSelect(plan.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(plan.id)}
      className={`relative flex flex-col rounded-xl p-6 sm:p-8 transition-all duration-300 cursor-pointer outline-none ${
        plan.popular
          ? "bg-surface border-2 border-primary shadow-glow z-10"
          : selected
          ? "bg-surface border-2 border-primary/50 hover:border-primary"
          : "bg-surface border border-white/10 hover:border-white/25"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-white font-rajdhani font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
          <Crown size={13} /> Most Popular
        </span>
      )}
      {!plan.popular && selected && (
        <span className="absolute top-5 right-5 flex items-center gap-1 text-[10px] font-rajdhani font-bold uppercase tracking-widest text-primary">
          <Check size={12} strokeWidth={3} /> Selected
        </span>
      )}

      <div
        className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-5 ${
          plan.popular ? "bg-primary text-white" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3
        className={`font-teko text-2xl sm:text-3xl font-semibold uppercase leading-none ${
          plan.popular ? "text-primary" : "text-heading"
        }`}
      >
        {plan.name}
      </h3>

      <div className="flex items-end gap-1.5 mt-5 mb-1 flex-wrap">
        <span className="font-teko text-4xl sm:text-5xl font-bold text-offwhite leading-none tabular-nums">
          {displayPrice}
        </span>
        <span className="font-rajdhani text-muted text-sm mb-1">{displayPeriod}</span>
      </div>
      {annual && (
        <p className="font-inter text-xs text-primary">
          Save {formatINR(monthly * 2)} a year
        </p>
      )}

      <div className="h-px bg-white/10 my-6" />

      <ul className="flex flex-col gap-3.5 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start sm:items-center gap-3 text-sm text-body font-inter">
            <span
              className={`shrink-0 w-5 h-5 flex items-center justify-center rounded-full mt-0.5 sm:mt-0 ${
                plan.popular ? "bg-primary/20 text-primary" : "bg-white/5 text-muted"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link to="/contact" onClick={(e) => e.stopPropagation()}>
        <button
          className={`w-full font-rajdhani font-bold uppercase tracking-wide py-3.5 rounded-md transition-all duration-300 ${
            plan.popular
              ? "bg-primary text-white hover:bg-primaryDark hover:shadow-glow"
              : "bg-transparent border border-white/15 text-offwhite hover:border-primary hover:text-primary"
          }`}
        >
          Choose {plan.name}
        </button>
      </Link>
    </div>
  );
}

export default function Membership() {
  const [annual, setAnnual] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(
    () => memberships.find((p) => p.popular)?.id || memberships[0]?.id
  );

  const faqHalf = Math.ceil(membershipFaqs.length / 2);
  const faqLeft = membershipFaqs.slice(0, faqHalf);
  const faqRight = membershipFaqs.slice(faqHalf);

  const selectedPlan = memberships.find((p) => p.id === selectedPlanId) || memberships[0];
  const SelectedIcon = planIcons[selectedPlan?.id] || ShieldCheck;

  // Sticky bar: appears once user scrolls past the plan cards, hides again near the final CTA
  const [pastCards, setPastCards] = useState(false);
  const [nearFinalCta, setNearFinalCta] = useState(false);
  const cardsSentinelRef = useRef(null);
  const ctaSentinelRef = useRef(null);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      ([entry]) => setPastCards(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    const ctaObserver = new IntersectionObserver(
      ([entry]) => setNearFinalCta(entry.isIntersecting),
      { threshold: 0 }
    );
    if (cardsSentinelRef.current) cardsObserver.observe(cardsSentinelRef.current);
    if (ctaSentinelRef.current) ctaObserver.observe(ctaSentinelRef.current);
    return () => {
      cardsObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  const showSticky = pastCards && !nearFinalCta;
  const selectedMonthly = selectedPlan ? parsePrice(selectedPlan.price) : 0;
  const selectedDisplayPrice = annual
    ? `${formatINR(selectedMonthly * 10)} / year`
    : `${selectedPlan?.price}${selectedPlan?.period}`;

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Pick A Plan, "
        highlight="Not A Contract"
        description="Three straightforward plans, no lock-in, no joining fee. Upgrade, downgrade or freeze whenever your schedule changes — the plan should work around your life, not the other way round."
        image="/membershipbanner3.png"
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/about"
      />

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container-x px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Plans For Every"
            highlight="Commitment"
            align="center"
            className="mb-6"
          />

          {/* Trust points up front, before price anchoring happens */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 mb-8 sm:mb-10 px-4">
            {trustPoints.map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 font-rajdhani text-xs sm:text-sm text-body"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                  <Check size={13} strokeWidth={3} />
                </span>
                {t}
              </span>
            ))}
          </div>

          <div className="flex justify-center mb-10 sm:mb-16 px-4 sm:px-0">
            <BillingToggle annual={annual} setAnnual={setAnnual} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto lg:items-center">
            {memberships.map((plan) => (
              <div
                key={plan.id}
                className={`transition-all duration-300 ${
                  plan.popular
                    ? "lg:-translate-y-4 lg:scale-105 relative z-10 sm:col-span-2 lg:col-span-1"
                    : "opacity-90"
                }`}
              >
                <div className={plan.popular ? "max-w-md mx-auto lg:max-w-none" : ""}>
                  <PlanCard
                    plan={plan}
                    annual={annual}
                    selected={plan.id === selectedPlanId}
                    onSelect={setSelectedPlanId}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center font-inter text-xs text-muted mt-8">
            Tap a plan to select it — you can compare details below and change your mind anytime.
          </p>

          {/* sentinel: sticky bar appears once this scrolls out of view */}
          <div ref={cardsSentinelRef} className="h-px" />
        </div>
      </section>

      {/* Full comparison — table on desktop, switcher + list on mobile */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface2">
        <div className="container-x flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="Compare Every"
            highlight="Plan"
            align="center"
            className="mb-10 sm:mb-14"
          />

          {/* Mobile: plan switcher + vertical feature list (no horizontal scrolling table) */}
          <div className="md:hidden w-full max-w-md mx-auto">
            <div className="flex gap-1.5 mb-6 p-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              {memberships.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`flex-1 font-rajdhani font-bold uppercase text-xs tracking-wide py-2.5 rounded-full transition-colors duration-300 ${
                    selectedPlanId === plan.id ? "bg-primary text-white" : "text-body"
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] divide-y divide-white/10">
              {comparisonFeatures.map((row) => {
                const value = row[selectedPlanId];
                const included = value === true || typeof value === "string";
                return (
                  <div key={row.feature} className="flex items-center justify-between gap-4 px-5 py-4">
                    <span className="font-inter text-sm text-body">{row.feature}</span>
                    {typeof value === "string" ? (
                      <span className="font-rajdhani font-semibold text-sm text-primary shrink-0">
                        {value}
                      </span>
                    ) : (
                      <span
                        className={`shrink-0 inline-flex w-6 h-6 items-center justify-center rounded-full ${
                          included ? "bg-primary/15 text-primary" : "bg-white/5 text-muted/40"
                        }`}
                      >
                        {included ? <Check size={13} /> : <X size={13} />}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: full table, selected column highlighted */}
          <div className="hidden md:block w-full max-w-7xl rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left font-rajdhani text-xs uppercase tracking-wide text-muted font-semibold px-4 sm:px-6 md:px-8 py-5 sm:py-6 w-[34%]">
                    Feature
                  </th>
                  {memberships.map((plan) => (
                    <th
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`text-center px-3 sm:px-4 py-5 sm:py-6 cursor-pointer transition-colors duration-200 ${
                        plan.id === selectedPlanId ? "bg-primary/[0.08]" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {plan.popular && (
                          <span className="flex items-center gap-1 text-[10px] font-rajdhani font-bold uppercase tracking-widest text-primary">
                            <Crown size={11} /> Popular
                          </span>
                        )}
                        <span className="font-teko text-xl sm:text-2xl font-semibold uppercase text-heading leading-none">
                          {plan.name}
                        </span>
                        <span className="font-inter text-[11px] sm:text-xs text-muted">{plan.price}{plan.period}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                    <td className="font-inter text-sm text-body px-4 sm:px-6 md:px-8 py-4">
                      {row.feature}
                    </td>
                    {memberships.map((plan) => {
                      const value = row[plan.id];
                      const included = value === true || typeof value === "string";
                      return (
                        <td
                          key={plan.id}
                          className={`text-center px-3 sm:px-4 py-4 transition-colors duration-200 ${
                            plan.id === selectedPlanId ? "bg-primary/[0.04]" : ""
                          }`}
                        >
                          {typeof value === "string" ? (
                            <span className="font-rajdhani font-semibold text-xs sm:text-sm text-primary">
                              {value}
                            </span>
                          ) : (
                            <span
                              className={`inline-flex w-6 h-6 sm:w-7 sm:h-7 items-center justify-center rounded-full ${
                                included ? "bg-primary/15 text-primary" : "bg-white/5 text-muted/40"
                              }`}
                            >
                              {included ? <Check size={13} /> : <X size={13} />}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ — two columns split into contiguous halves so numbering reads in order */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container-x flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common" highlight="Questions" className="mb-10 sm:mb-12" />
          <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 md:gap-x-14 gap-4">
            <div className="flex flex-col gap-4">
              {faqLeft.map((f, i) => (
                <FaqItem key={f.q} {...f} index={i} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {faqRight.map((f, i) => (
                <FaqItem key={f.q} {...f} index={faqHalf + i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* sentinel: sticky bar hides once the final CTA is in view */}
      <div ref={ctaSentinelRef} className="h-px" />
      <CTASection />

      {/* Persistent selection bar: follows the user through comparison + FAQ */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ease-out ${
          showSticky ? "translate-y-0" : "translate-y-full pointer-events-none"
        }`}
      >
        <div className="container-x pb-4 sm:pb-6">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/85 backdrop-blur-md px-5 sm:px-6 py-4 shadow-2xl">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-primary/15 text-primary">
                <SelectedIcon size={18} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="font-rajdhani font-bold uppercase text-[10px] sm:text-xs text-muted tracking-wide leading-none mb-1">
                  Selected Plan
                </p>
                <p className="font-teko text-lg sm:text-2xl font-semibold text-heading uppercase leading-none truncate">
                  {selectedPlan?.name} · {selectedDisplayPrice}
                </p>
              </div>
            </div>
            <Link to="/contact" className="shrink-0">
              <button className="font-rajdhani font-bold uppercase tracking-wide text-xs sm:text-sm bg-primary text-white px-5 sm:px-6 py-3 rounded-md hover:bg-primaryDark transition-colors whitespace-nowrap">
                Choose Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}