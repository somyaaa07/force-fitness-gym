import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: MapPin,
    title: "Find Us",
    body: "1st Floor, Prem Complex, Opposite Gaur City 2, Near Shanti Market, Sector 52, Noida",
  },
  {
    icon: Clock,
    title: "Open Daily",
    body: "5:00 AM – 11:00 PM",
  },
  {
    icon: Phone,
    title: "Call Us",
    body: "+91 93557 47171",
    href: "tel:+919355747171",
  },
];

export default function LocationStrip() {
  return (
    <section className="relative bg-surface2/60 border-y border-white/10">
      <div className="container-x flex flex-col lg:flex-row lg:items-center gap-6 py-2">
        <div className="grid sm:grid-cols-3 flex-1">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`flex items-start gap-4 py-6 px-1 sm:px-6 ${
                i !== 0 ? "sm:border-l border-white/10" : ""
              }`}
            >
              <it.icon size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-rajdhani font-bold text-heading uppercase tracking-wide text-sm">
                  {it.title}
                </p>
                {it.href ? (
                  <a href={it.href} className="font-inter text-sm text-body mt-1 hover:text-primary transition-colors block">
                    {it.body}
                  </a>
                ) : (
                  <p className="font-inter text-sm text-body mt-1 max-w-xs">{it.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pb-6 lg:pb-0 lg:pl-6 lg:border-l border-white/10">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-white font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-3.5 transition-all duration-300 hover:shadow-glow w-full lg:w-fit whitespace-nowrap"
          >
            Get Directions
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
