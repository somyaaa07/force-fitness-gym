# ANYDAY FITNESS — Website

A premium, dark-themed gym website built with **React + Vite + Tailwind CSS**, matching the ANYDAY FITNESS brand reference (orange/blue accents on near-black, Teko/Rajdhani/Inter typography).

## Tech Stack
- React 19 + Vite
- Tailwind CSS 3
- React Router DOM (client-side routing)
- Lucide React (icons)
- No TypeScript, no Bootstrap/MUI

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     Reusable UI (Navbar, Footer, Hero, Cards, Lightbox, etc.)
  pages/          Home, About, Programs, Trainers, Membership, Gallery, Contact
  data/           Dummy content: programs.js, trainers.js, memberships.js, gallery.js
  hooks/          useReveal.js — scroll-reveal intersection observer
  index.css       Fonts, Tailwind layers, brand utility classes
  App.jsx         Routing
  main.jsx        Entry point
tailwind.config.js  Brand colors, fonts, animations
```

## Brand Tokens (tailwind.config.js)

| Token | Hex |
|---|---|
| Background | `#050505` |
| Primary Orange | `#F47B0B` |
| Dark Orange | `#C95F05` |
| Secondary Blue | `#0878B9` |
| Heading | `#C8C5B8` |
| Body | `#D6D6D6` |
| Muted | `#85837A` |
| White | `#F5F5F5` |

Fonts: **Teko** (headings/numbers), **Rajdhani** (UI/buttons/nav), **Inter** (body/paragraphs) — loaded via Google Fonts in `index.css`.

## Replacing Placeholder Content

- **Images**: All photography currently pulls from Unsplash (`images.unsplash.com`) as placeholders. Swap the `image`/`src` fields in `src/data/*.js` and in `src/components/Hero.jsx`, `CTASection.jsx`, `PageHero.jsx` usages with your own licensed gym photography.
- **Logo**: `src/components/Logo.jsx` currently renders a text-based "AF" badge. Replace with your actual logo file (SVG/PNG) — drop it in `src/assets/` and swap the markup.
- **Trainers / Programs / Membership / Gallery data**: edit `src/data/*.js` directly — every card pulls from these files.
- **Contact info**: edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
- **Map**: `src/pages/Contact.jsx` has a styled placeholder — swap in a Google Maps/Mapbox embed if desired.

## Notes
- Fully responsive: mobile hamburger drawer, stacked hero on small screens, responsive grids throughout.
- Contact form is client-side only (no backend) — wire up `handleSubmit` in `Contact.jsx` to your API/email service.
- Gallery uses a lightweight custom lightbox (keyboard arrows + escape supported).
