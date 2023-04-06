/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-1": "#074449",
        "main-color-2": "#02DDB7",
        "gray-scale-1": "#1B1C1E",
        "gray-scale-2": "#737373",
        "gray-scale-3": "#D6D6D6",
        "gray-scale-4": "#EDEDED",
        "not-started": "#FFDE85",
        "in-progress": "#B6E0B6",
        completed: "#BADFFF",
      },
    },
  },
  plugins: [],
};
