/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0B0B0B",
          850: "#101010",
          800: "#141414",
        },
        acid: {
          DEFAULT: "#00FF84",
          hover: "#36FF9A",
          dim: "#0FA968",
        },
        smoke: "#A5A5A5",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
        editorial: "-0.03em",
      },
      maxWidth: {
        measure: "38ch",
      },
      borderColor: {
        hair: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(0,255,132,0.45)",
        "glow-lg": "0 0 120px -20px rgba(0,255,132,0.55)",
        card: "0 30px 80px -40px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #050505 85%), radial-gradient(circle at 50% 0%, rgba(0,255,132,0.08), transparent 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        auroraShift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(6%,-4%) scale(1.1)" },
          "66%": { transform: "translate(-5%,5%) scale(0.95)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 65s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        aurora: "auroraShift 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
