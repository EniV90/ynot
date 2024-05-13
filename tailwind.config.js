/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        "natural-silver": "#F5F7FA",
        "natural-blue": "#0812a3",
        "natural-color": "#000005",
        "natural-grey": "#18191f",
        "natural-red": "#bf0606",
        "natural-gold": "#ffd700",
        "lightning-blue": "#7DF9FF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
