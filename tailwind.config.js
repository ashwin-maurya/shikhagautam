/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        CooperHewitt: ["CooperHewitt", "sans-serif"],
        Gamiliademo: ["GamiliademoRegular-mL9Ev", "sans-serif"],
        HankenGrotesk: ["HankenGrotesk-VariableFont_wght", "serif"],
      },
    },
  },
  plugins: [],
};
