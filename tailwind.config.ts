import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  darkMode: ["selector", "[data-theme='dark']"],
  content: [],
  theme: {
    extend: {
      animation: {
        "scroll-right": "scrollRight 30s linear infinite",
        "scroll-left": "scrollLeft 30s linear infinite",
      },
      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [daisyui, addDynamicIconSelectors()],
  daisyui: {
    base: false,
    logs: false,
  },
} satisfies Config;
