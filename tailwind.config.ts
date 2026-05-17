import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080B",
          900: "#0B0D12",
          850: "#10131A",
          800: "#161A23",
          700: "#1F2530",
          600: "#2A3140",
        },
        accent: {
          gold: "#E4B53A",
          emerald: "#10B981",
          violet: "#8B5CF6",
          rose: "#F43F5E",
          sky: "#38BDF8",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Inter"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(228,181,58,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
