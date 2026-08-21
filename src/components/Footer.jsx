import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/services", label: "Services" },
  { to: "/membership", label: "Membership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10">
      {/* top strip: CTA banner */}
      <div className="relative bg-primary overflow-hidden">
        <div className="container-x py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-teko text-2xl sm:text-3xl font-semibold uppercase text-white text-center sm:text-left leading-tight">
            Ready to start? Your first session is on us.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-black text-white font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-3.5 hover:bg-black/80 transition whitespace-nowrap"
          >
            Book A Free Tour
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="container-x py-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.7fr_0.9fr_0.9fr] gap-10">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="font-inter text-sm text-muted max-w-xs">
            Where strength and relaxation converge — a full strength floor
            paired with a recovery spa, right here in Gaur City 2.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a
              href="https://www.instagram.com/forcefitness.life/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Force Fitness Gym & Spa on Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-body hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <InstagramIcon size={16} />
            </a>
            {[FacebookIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-body hover:border-primary hover:text-primary transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-rajdhani font-bold text-heading uppercase tracking-wide mb-4">
            Explore
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-inter text-sm text-muted hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-rajdhani font-bold text-heading uppercase tracking-wide mb-4">
            Visit Us
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-muted font-inter">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              1st Floor, Prem Complex, Opposite Gaur City 2, Near Shanti Market, Sector 52, Noida, Uttar Pradesh 201301
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+919355747171" className="hover:text-primary transition-colors">
                +91 93557 47171
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:hello@forcefitnessgym.in" className="hover:text-primary transition-colors">
                hello@forcefitnessgym.in
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-rajdhani font-bold text-heading uppercase tracking-wide">
            Floor Hours
          </h4>
          <div className="flex items-center justify-between font-inter text-sm text-muted border-b border-white/10 pb-2">
            <span>Mon – Sat</span>
            <span className="text-heading">5:00 AM – 11:00 PM</span>
          </div>
          <div className="flex items-center justify-between font-inter text-sm text-muted border-b border-white/10 pb-2">
            <span>Sunday</span>
            <span className="text-heading">6:00 AM – 9:00 PM</span>
          </div>
          {/* <p className="font-teko text-xl font-semibold text-primary leading-none mt-1">
            Spa open till last member leaves
          </p> */}
        </div>
      </div>

      <div className="container-x py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-inter text-xs text-muted text-center sm:text-left">
          &copy; {new Date().getFullYear()} Force Fitness Gym . All rights reserved.
        </p>
        <p className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted">
          Train Hard Today · Recover Better Tomorrow
        </p>
      </div>
    </footer>
  );
}
