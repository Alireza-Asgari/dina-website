import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector", // add this line
  theme: {
    extend: {
      boxShadow: { custom: "0px 4px 4px 0px #00000040" },
      maxWidth: { "80": "80%", "86": "86%" },
      colors: {
        primary: {
          "200": "#c000bf",
          "300": "#6C016B",
          "350": "#360136",
          "900": "#0e000d",
          // "700": "#160815",
          // "700": "#2d212c",
          // "700": "#261a25",
          // "700": "#1e001b",
          // "700": "#180016",
          // "700": "#1c002d",
          // "700": "#23222e",
          "700": "#250e24",
        },
        grayOpacity: "#FFFFFF26",
        bgDark: "#0e000d",
        bgInnerDark: "#160815",
        bgInnerLight: "#eeeeee",
        gray: {
          "500": "#636363",
          "600": "#676767",
          "800": "#23222E",
          "200": "#FFFFFF26",
        },
        white: {
          "100": "#F7F7F7",
          "200": "#fdfdfd",
          "300": "#eeeeee",
          "400": "#d2d2d2",
          DEFAULT: "#FFFFFF",
        },
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
