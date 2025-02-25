/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: "#f66608",
        darkGray: "#333333",
        lightTextGray: "#777777",
        bgGray: "#F6F6F6",
        borderGray: "#dddddd",
        borderColor: "#e5e5e5"
      },
      screens: {
        xs: { max: "574px" },
        s: { max: "769px" },
        m: { max: "989px" },
        l: { max: "1199px" },
        xl: { min: "1200px" }
      },
      boxShadow: {
        defaultShadow: "6px 0px 2px -3px rgba(235,235,235,0.03)",
        bigShadow: "0 5px 10px rgba(0, 0, 0, .4)"
      }
    }
  },
  plugins: [
    function ({
      addComponents
    }: {
      addComponents: (components: Record<string, any>) => void
    }) {
      addComponents({
        ".cont": {
          margin: "0 auto",
          padding: "0rem",

          "@screen xs": { maxWidth: "100%", padding: "0 1rem" },
          "@screen s": { maxWidth: "530px", padding: "0 1rem" },
          "@screen m": { maxWidth: "690px", padding: "0 1rem" },
          "@screen l": { maxWidth: "950px", padding: "0 1rem" },
          "@screen xl": { maxWidth: "100%", padding: "0 3.5rem" }
        },

        ".stick-cont": {
          margin: "0 auto",
          padding: "0rem",

          "@screen xs": { maxWidth: "100%", padding: "0 0.5rem" },
          "@screen s": { maxWidth: "100%", padding: "0 1.5rem" },
          "@screen m": { maxWidth: "100%", padding: "0 1.5rem" },
          "@screen l": { maxWidth: "950px", padding: "0 1.5rem" },
          "@screen xl": { maxWidth: "1200px", padding: "0 3.5rem" }
        },

        ".tight-cont": {
          margin: "0 auto",
          padding: "0rem",

          "@screen xs": { maxWidth: "100%", padding: "0 0.75rem" },
          "@screen s": { maxWidth: "540px", padding: "0 1.5rem" },
          "@screen m": { maxWidth: "720px", padding: "0 1.5rem" },
          "@screen l": { maxWidth: "950px", padding: "0 1.5rem" },
          "@screen xl": { maxWidth: "1200px", padding: "0 1.5rem" }
        },

        ".tightest-cont": {
          margin: "0 auto",
          padding: "0rem",

          "@screen xs": { maxWidth: "100%", padding: "0 0.75rem" },
          "@screen s": { maxWidth: "530px", padding: "0 1.5rem" },
          "@screen m": { maxWidth: "540px", padding: "0 1.5rem" },
          "@screen l": { maxWidth: "100%", padding: "0 3rem" },
          "@screen xl": { maxWidth: "1200px", padding: "0 1.5rem" }
        }
      })
    }
  ]
}

export default config
