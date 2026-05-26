/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        ink: "#0f0e0c",
        paper: "#f5f0e8",
      },
    },
  },
  plugins: [],
};
