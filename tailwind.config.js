module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        panel: "#11111a",
        accent: {
          DEFAULT: "#22d3ee",
          soft: "#38bdf8",
          deep: "#6366f1",
        },
      },
      fontFamily: {
        signature: ["Great Vibes", "cursive"],
        sans: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.15), 0 8px 40px -12px rgba(34,211,238,0.35)",
        card: "0 10px 40px -15px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,0.12) 0%, transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.215,0.61,0.355,1) infinite",
      },
    },
  },
  plugins: [],
};
