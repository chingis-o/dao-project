/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          accent: "#F67565",
          secondary: "#292D32",
          neutral: "#303439",
          "secondary-content": "#494D50"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
