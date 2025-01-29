/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhiteMain: "#FFF",
        primaryBlack: "#141414",
        primaryYellow: "rgba(178, 116, 9, 0.60)",
        primaryWhite: "#FAF9F8",
        lightWhite: "rgba(255, 255, 255, 0.80)",
        overlyColour: "rgba(32, 32, 32, 0.50)",
        buttonBg: "#B27409",
        googlePlay: "rgba(255, 255, 255, 0.15)",
        borderColourOne: "rgba(255, 255, 255, 0.40)",
        flowingBg: "rgba(249, 250, 251, 0.10)",
        connectHeartsOne: "rgba(249, 250, 251, 0.10)",
        commongBgColor: "#00000066",
        secondaryYellow: "#B3750B",
        radialYellow:
          "radial-gradient(100% 100% at 50% 0%, rgba(248, 248, 248, 0.05) 0%, rgba(248, 248, 248, 0.00) 68.17%), #B27409",
        rgbaBlack: "rgba(0, 0, 0, 0.40)",
        WhiteBorder: "rgba(255, 255, 255, 0.40)",
        StarYellow:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), #B27409",
      },
      fontFamily: {
        Inria: ["Inria Serif", "serif"],
        Inter: ["Inter", "sans-serif"],
        kingdom: ["Kingdom", "sans-serif"],
      },
      backgroundImage: {
        phoneFrame: "url('./src/assets/Images/phone/phone_frame.svg')",
        "dual-black": "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1))",
      },
      boxShadow: {
        custom:
          "0px 5px 1.5px -4px rgba(5, 5, 5, 0.07), 2px 4px 16px 0px rgba(248, 248, 248, 0.05) inset",
        buttonSHadow:
          "0px 1px 4px 0px rgba(0, 0, 0, 0.28), -5px 5px 5px 0px rgba(255, 255, 255, 0.74) inset",
        footerShadow:
          "2.564px 5.128px 20.513px 0px rgba(248, 248, 248, 0.04) inset, 0px 6.41px 1.923px -5.128px rgba(5, 5, 5, 0.25)",
        googlePlayShadow:
          "2px 4px 16px 0px rgba(248, 248, 248, 0.05) inset, 0px 5px 1.5px -4px rgba(5, 5, 5, 0.07)",
        customeShadow:
          "2px 4px 16px 0px rgba(248, 248, 248, 0.04) inset, 0px 5px 1.5px -4px rgba(5, 5, 5, 0.25)",
      },
      container: {
        center: "true",
        padding: "24px",
      },
      screens: {
        xs: "360px",
        sm: "480px",
        md: "576px",
        lg: "768px",
        xl: "992px",
        xxl: "1200px",
        mxl: "1500px",
        "2xl": "1920px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
