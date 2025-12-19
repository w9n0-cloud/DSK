import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dsk-bg": "#05040c",
        "dsk-panel": "#0d0b1a",
        "dsk-card": "#121229",
        "dsk-primary": "#9b69ff",
        "dsk-primary-strong": "#b077ff",
        "dsk-accent": "#6ad7ff",
        "dsk-ink": "#e8e8f5",
        "dsk-muted": "#9aa0b5",
      },
      boxShadow: {
        glow:
          "0 0 24px rgba(139,92,246,0.35), 0 0 64px rgba(94,227,255,0.15)",
        "inner-glow":
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
      },
      keyframes: {
        "slow-pan": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-10%, -10%, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        "shine": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "slow-pan": "slow-pan 18s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 8s ease-in-out infinite",
        shine: "shine 2s linear infinite",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
