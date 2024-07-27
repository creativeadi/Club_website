/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#100425",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
      "yellow": "#fcbe5a",
      "pink": "#cc6bcc",
      "purple": "#915eff",
      "violet":"#6c29d6",
      "dark-pink":"#753188"
    },
    fontFamily:{
      'rollbox' : ['Rollbox','black'],
    },

    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/dashboard.png')",
      "hero-mobile":"url('/src/assets/Mobile.png')",
      'gradient-to-r': 'linear-gradient(to right, #6c29d6,#9c3eb8)',
    },
  },
};
export const plugins = [];