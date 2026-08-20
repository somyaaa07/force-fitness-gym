import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Plus, Minus, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "1st Floor, Prem Complex, Opposite Gaur City 2, Near Shanti Market, Sector 52, Noida, Uttar Pradesh 201301",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@forcefitnessgym.in",
    href: "mailto:hello@forcefitnessgym.in",
  },
  { icon: Clock, label: "Opening Hours", value: "All Days: 5:00 AM - 11:00 PM" },
];

const contactFaqs = [
  {
    q: "How quickly will I get a response?",
    a: "Our team typically replies within 24 hours on weekdays. For anything urgent, call or WhatsApp us directly and we'll pick up.",
  },
  {
    q: "Can I schedule a free trial or tour before joining?",
    a: "Yes — use the form below or call us to book a walk-through of the gym and spa, plus a free trial session with one of our trainers.",
  },
  {
    q: "Do you offer corporate or group memberships?",
    a: "We do. Mention it in your message subject and our team will reach out with corporate and group pricing options.",
  },
  {
    q: "Where exactly are you located?",
    a: "We're on the 1st Floor of Prem Complex, opposite Gaur City 2, near Shanti Market in Sector 52, Noida — see the map above for directions and nearby parking.",
  },
  {
    q: "Is the spa included in my gym membership?",
    a: "Steam, sauna and ice bath access are included with our Premium and Ultimate plans. Massage and spa treatments can be booked separately at the front desk.",
  },
];

function ContactFaqItem({ q, a, index }) {
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
          className="w-full flex items-center gap-4 sm:gap-5 px-5 sm:px-6 py-5 text-left"
        >
          <span
            className={`font-teko text-3xl sm:text-4xl font-semibold leading-none shrink-0 transition-colors duration-300 ${
              open ? "text-primary" : "text-white/10"
            }`}
          >
            {num}
          </span>

          <span
            className={`flex-1 font-rajdhani font-semibold uppercase tracking-wide text-sm sm:text-base transition-colors duration-300 ${
              open ? "text-primary" : "text-heading"
            }`}
          >
            {q}
          </span>

          <span
            className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "bg-primary border-primary text-white"
                : "border-white/20 text-body group-hover:border-primary/60 group-hover:text-primary"
            }`}
          >
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>

        <div
          className={`grid transition-all duration-300 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="font-inter text-sm text-body pl-[3rem] sm:pl-[4.75rem] pr-4 sm:pr-14 pb-5 -mt-1">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageHero
        image="/ContactBanner2.png"
        eyebrow="Get In Touch"
        title="Let's "
        highlight="Talk"
        description="Got a question about programs, membership, or just want to swing by and see the floor? Send us a message or call the front desk — we usually reply within the hour."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/about"
      />

      {/* Quick info strip */}
      <section className="py-14 sm:py-20 bg-surface">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {contactInfo.map((info) => {
              const Content = (
                <>
                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-primary/15 border border-primary/50 text-primary">
                    <info.icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-bold text-heading uppercase tracking-wide text-xs">
                      {info.label}
                    </h3>
                    <p className="font-inter text-sm text-body mt-1 leading-snug">
                      {info.value}
                    </p>
                  </div>
                </>
              );
              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="card-dark flex items-start gap-4 p-6 hover:border-primary/50 transition-colors duration-300"
                >
                  {Content}
                </a>
              ) : (
                <div key={info.label} className="card-dark flex items-start gap-4 p-6">
                  {Content}
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Map */}
            <div className="relative h-72 lg:h-full min-h-[320px] w-full overflow-hidden rounded-xl border border-white/10 bg-surface shadow-lg">
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Force%20Fitness%20Gym%20%26%20Spa%2C%20Prem%20Complex%2C%20Opposite%20Gaur%20City%202%2C%20Sector%2052%2C%20Noida%2C%20Uttar%20Pradesh%20201301&maptype=roadmap&zoom=16"
                title="Force Fitness Gym & Spa Location"
                allowFullScreen
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Force Fitness Gym & Spa</p>
                  <p className="truncate text-xs text-white/60">
                    Opposite Gaur City 2, Sector 52, Noida 201301
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="card-dark p-8 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-teko text-3xl font-semibold text-heading uppercase">
                  Send Us A Message
                </h2>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-2 font-rajdhani font-semibold text-xs uppercase tracking-wide text-primary hover:text-heading transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Name
                  </label>
                  <input
                    id="name"
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
                  <label htmlFor="email" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button type="submit" className="btn-primary justify-center group">
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              {submitted && (
                <p className="text-primary font-rajdhani font-semibold text-sm text-center animate-fadeIn">
                  Message sent! We'll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="container-x relative">
          <SectionHeading
            eyebrow="FAQ"
            title="Common"
            highlight="Questions"
            align="left"
            className="mb-14"
          />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
            {/* Side CTA panel */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 sm:p-10 flex flex-col gap-6 lg:sticky lg:top-28 bg-gradient-to-br from-surface to-black">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative w-14 h-14 flex items-center justify-center rounded-xl border border-primary/40 bg-black/30 text-primary">
                <Mail size={24} strokeWidth={1.75} />
              </div>
              <div className="relative flex flex-col gap-2">
                <h3 className="font-teko text-3xl font-semibold uppercase text-heading leading-none">
                  Still Have <span className="text-primary">Questions?</span>
                </h3>
                <p className="font-inter text-sm text-body">
                  Can't find what you're looking for? Reach out directly and our
                  team will get back to you right away.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 pt-2 border-t border-white/10">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body hover:text-primary transition-colors duration-300"
                >
                  <Phone size={16} className="text-primary shrink-0" />
                  +91 98765 43210
                </a>
                <a
                  href="mailto:hello@forcefitnessgym.in"
                  className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body hover:text-primary transition-colors duration-300"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  hello@forcefitnessgym.in
                </a>
                <div className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body">
                  <Clock size={16} className="text-primary shrink-0" />
                  All Days: 5:00 AM - 11:00 PM
                </div>
              </div>
            </div>

            {/* FAQ list */}
            <div className="flex flex-col gap-4">
              {contactFaqs.map((f, i) => (
                <ContactFaqItem key={f.q} {...f} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
