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
      boxShadow: {
        custom: "0px 4px 4px 0px #00000040",
        products1: "0px 3.1px 20.17px 0px #1605DB1A",
        products2: "0px 1.24px 8.52px 0px #FFFFFF40",
        "success-green": "0px 0px 35px 0px #54c49580",
        "error-red": "0px 0px 35px 0px #EA828280",
      },
      maxWidth: { "80": "80%", "86": "86%" },
      width: {
        "104": "420px",
        "114": "500px",
      },
      colors: {
        primary: {
          "200": "#c000bf",
          "300": "#6C016B",
          "350": "#360136",
          "400": "#5c0095",
          "700": "#250e24",
          "900": "#0e000d",
          "950": "#0a0415",
        },
        green: {
          "light-300": "#00ff94",
          "400": "#569c50",
        },
        blue: {
          "300": "#3E76E3",
        },
        red: {
          "300": "#c92326",
        },
        productInDark: "#1E1D24",
        productInLight: "#ece9ff",

        productsBg: "#03030F",
        grayOpacity: "#FFFFFF26",
        bgDark: "#0e000d",
        bgInnerDark: "#160815",
        bgInnerLight: "#eeeeee",
        gray: {
          "100": "#fdfdfd",
          "500": "#636363",
          "600": "#676767",
          "800": "#23222E",
          "200": "#FFFFFF26",
          "700": "#0d0d0d",
          "400": "#2b2b2b",
          "750": "#161616",
        },
        white: {
          "100": "#F7F7F7",
          "200": "#fdfdfd",
          "300": "#eeeeee",
          "400": "#d2d2d2",
          "500": "#dddddd",
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
