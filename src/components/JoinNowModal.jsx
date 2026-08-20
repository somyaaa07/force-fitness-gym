import { useState } from "react";
import { createPortal } from "react-dom";
import { X, Send, Dumbbell } from "lucide-react";

const interestOptions = [
  "Basic Membership",
  "Premium Membership",
  "Ultimate Membership",
  "Personal Training",
  "Free Trial / Tour",
];

export default function JoinNowModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: interestOptions[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", interest: interestOptions[0] });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-surface border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-body hover:border-primary hover:text-primary transition-colors duration-300"
        >
          <X size={18} />
        </button>

        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/15 border border-primary/50 text-primary mb-4">
          <Dumbbell size={22} strokeWidth={1.75} />
        </div>

        <h2 className="font-teko text-3xl sm:text-4xl font-semibold uppercase text-heading leading-none mb-2">
          Join <span className="text-primary">Force Fitness Gym & Spa</span>
        </h2>
        <p className="font-inter text-sm text-body mb-6">
          Limited slots available — upto 50% off on select memberships. Fill
          this form and our team will call you back.
        </p>

        {submitted ? (
          <p className="text-primary font-rajdhani font-semibold text-base text-center py-8 animate-fadeIn">
            Thank you! Our team will reach out to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-name"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Name
              </label>
              <input
                id="join-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-phone"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Phone
              </label>
              <input
                id="join-phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                placeholder="+91 12345 67890"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-email"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Email
              </label>
              <input
                id="join-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-interest"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                I'm interested in
              </label>
              <select
                id="join-interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
              >
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-surface">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary justify-center group mt-2">
              Submit
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <p className="font-inter text-[11px] text-muted text-center">
              Or call us directly at{" "}
              <a href="tel:+919876543210" className="text-primary hover:underline">
                +91 98765 43210
              </a>
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
