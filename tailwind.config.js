/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#131315",
        surface2: "#1B1B1E",
        primary: "#E31E24",
        primaryDark: "#A6151A",
        secondary: "#B8BCC4",
        heading: "#FFFFFF",
        body: "#C7C9CE",
        muted: "#84868D",
        offwhite: "#FFFFFF",
      },
      fontFamily: {
        teko: ["Anton", "sans-serif"],
        rajdhani: ["Oswald", "sans-serif"],
        inter: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at center, rgba(227,30,36,0.18) 0%, rgba(10,10,11,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(227,30,36,0.30)",
        glowBlue: "0 0 30px rgba(184,188,196,0.20)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        floatSlow: "floatSlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};