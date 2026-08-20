import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Aman Sharma",
    tag: "Member since 2024",
    quote:
      "Coaches here watch your form on every set, not just your rep count. Hitting the steam room after leg day is genuinely the reason I show up on the hard days.",
    rating: 5,
    featured: true,
  },
  {
    name: "Priya Nair",
    tag: "Premium Member",
    quote:
      "The floor is spotless, the staff are polite, and it never feels packed even during the 7 PM rush. The spa add-on alone makes the upgrade worth it.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    tag: "Member since 2023",
    quote:
      "I've trained at three gyms around Gaur City — this is the only one where every machine still works a year later.",
    rating: 4,
  },
  {
    name: "Simran Kaur",
    tag: "Member since 2025",
    quote:
      "Signed up for the free trial expecting a sales pitch and instead got an actual assessment and a plan. Been here five months now.",
    rating: 5,
  },
];

// generates a consistent illustrated avatar per name (no real photos needed)
function avatarUrl(name) {
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Member Voices"
            title="What Gaur City"
            highlight="Says"
            align="left"
          />

          <div className="flex items-center gap-4 border border-primary/40 bg-primary/10 px-6 py-4 shrink-0">
            <span className="font-teko text-4xl sm:text-5xl font-bold text-primary leading-none">
              4.7★
            </span>
            <span className="font-rajdhani text-xs uppercase tracking-wide text-muted leading-tight">
              Average <br /> Member Rating
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5">
          {/* featured testimonial */}
          <div className="group relative flex flex-col justify-between p-7 sm:p-9 border border-primary/30 bg-primary/[0.06] min-h-[420px] lg:min-h-full">
            <div className="flex items-start justify-between">
              <Quote size={40} className="text-primary/60" />
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < featured.rating ? "text-primary fill-primary" : "text-white/15"}
                  />
                ))}
              </div>
            </div>

            <p className="font-inter text-lg sm:text-xl text-body leading-relaxed mt-8">
              "{featured.quote}"
            </p>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden bg-white/5 border-2 border-primary/40">
                <img
                  src={avatarUrl(featured.name)}
                  alt={featured.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-rajdhani font-bold text-heading uppercase tracking-wide text-sm leading-none">
                  {featured.name}
                </p>
                <p className="font-inter text-xs text-muted mt-1.5">{featured.tag}</p>
              </div>
            </div>
          </div>

          {/* rest, avatar cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {rest.map((t) => (
              <div
                key={t.name}
                className="group relative flex gap-4 p-5 sm:p-6 border border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors duration-300">
                  <img
                    src={avatarUrl(t.name)}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-rajdhani font-bold text-heading uppercase tracking-wide text-sm leading-none">
                      {t.name}
                    </p>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className={i < t.rating ? "text-primary fill-primary" : "text-white/15"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-inter text-[11px] text-muted mt-1">{t.tag}</p>
                  <p className="font-inter text-[13px] sm:text-sm text-body leading-relaxed mt-2.5 line-clamp-3">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}