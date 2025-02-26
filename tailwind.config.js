/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        primaryLight100: "var( --primary-color-light-100)",
        primaryLight200: "var( --primary-color-light-200)",
        primaryLight300: "var( --primary-color-light-300)",
        primaryDark100: "var( --primary-color-dark-100)",
        primaryDark200: "var( --primary-color-dark-200)",
        primaryDark300: "var( --primary-color-dark-300)",
        secondary: "var(--secondary-color)",
        secondaryLight100: "var(--secondary-color-light-100)",
        secondaryLight200: "var(--secondary-color-light-200)",
        secondaryLight300: "var(--secondary-color-light-300)",
        secondaryDark100: "var(--secondary-color-dark-100)",
        secondaryDark200: "var(--secondary-color-dark-200)",
        secondaryDark300: "var(--secondary-color-dark-300)",
        tertiary: "var(--tertiary-color)",
        tertiaryHover: "var(--tertiary-hover)",
        tertiaryLight1: "var(--tertiary-color-light-100)",
        tertiaryLight2: "var(--tertiary-color-light-200)",
        tertiaryLight3: "var(--tertiary-color-light-300)",
        tertiaryDark1: "var(--tertiary-color-dark-100)",
        tertiaryDark2: "var(--tertiary-color-dark-200)",
        tertiaryDark3: "var(--tertiary-color-dark-300)",
        accent: "var(--accent-color)",
        background: "var(--background-color)",
        red: "#af282c",
        grey2: "#D0D0D0",
        grey3: "#CED4DA",
        grey5: "#F4F4F4",
        white: "#ffffff",
        black: "#000000",
        Shadow: "rgba(60, 60, 60, 0.4)",
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        poppins: ["var(--font-Poppins)"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
