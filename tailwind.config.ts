import type { Config } from "tailwindcss"
import theme, { fontFamily } from "tailwindcss/defaultTheme"


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "0rem",
      screens: {
        "2xl": "1400px",
      },

    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]
      },
    },
  },
plugins: [require('daisyui')],
daisyui: {
  themes: [
    "bumblebee",
    "cupcake",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
    {
      "custom-theme": {
        "primary": "#7400ff",
        "secondary": "#00b6e1",
        "accent": "#003fff",
        "neutral": "#051e11",
        "base-100": "#25262b",
        "info": "#00f5ff",
        "success": "#04f97d",
        "warning": "#e86800",
        "error": "#ff435f",
    }
  },
],
},
}

export default config;
