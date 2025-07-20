import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        softOrange: "#FFF3E0",
        hardOrange: "#FD9745",
        softBlue: "#DFE5F2",
        hardBlue: "#88AAEE",
        softPurple: "#E2DFF1",
        hardPurple: "#A388ED",
        hardGreen: "#A2E636",
        softRed: "#FCD6D7",
        hardRed: "#FF6B6B",
        hardGray: "#333333",
        softYellow: "#FEF1E8",
        hardYellow: "#FEDB58",
      },
      maxWidth: {
        "calc-24": "calc(100vw - 24px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
