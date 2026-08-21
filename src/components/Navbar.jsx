import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import Logo from "./Logo";
import JoinNowModal from "./JoinNowModal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/services", label: "Services" },
  { to: "/membership", label: "Membership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : "border-b border-white/5"
        }`}
      >
        <nav className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}>
          <Logo />

          <ul className="hidden lg:flex items-center gap-0.2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `group relative flex items-center px-3.5 py-2 font-rajdhani font-semibold uppercase tracking-wide xl:text-[15px] lg:text-[11px] transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-offwhite/80 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-primary origin-left transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919355747171"
              className="flex items-center gap-2 text-offwhite/70 hover:text-primary transition-colors"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15">
                <Phone size={13} />
              </span>
              <span className="font-rajdhani text-xs leading-tight">
                Call Us<br />
                <span className="text-[13px] text-heading font-semibold">+91 93557 47171</span>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setJoinOpen(true)}
              className="relative inline-flex items-center gap-2 bg-primary hover:bg-primaryDark text-white font-rajdhani font-bold uppercase text-sm tracking-wide pl-6 pr-5 py-3 transition-all duration-300"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              Join Now
              <ArrowRight size={16} />
            </button>
          </div>

          <button
            className="lg:hidden text-offwhite -mr-2 p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {createPortal(
        <div
          className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute top-0 right-0 h-full w-[82%] sm:w-[60%] max-w-xs bg-surface isolate transform-gpu shadow-2xl border-l border-white/10 p-5 sm:p-6 flex flex-col gap-6 sm:gap-8 overflow-y-auto transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-offwhite -mr-2 p-2">
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to} className="border-b border-white/10">
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3.5 font-rajdhani font-semibold uppercase tracking-wide text-lg ${
                        isActive ? "text-primary" : "text-offwhite/85"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a
              href="tel:+919355747171"
              className="flex items-center gap-2.5 text-body font-rajdhani text-sm"
            >
              <Phone size={15} className="text-primary" /> +91 93557 47171
            </a>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setJoinOpen(true);
              }}
              className="btn-primary justify-center mt-auto text-sm"
            >
              Join Now
            </button>
          </div>
        </div>,
        document.body
      )}

      <JoinNowModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </>
  );
}
