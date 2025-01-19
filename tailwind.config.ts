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
        borderColor: "#e5e5e5",
      },
      // Following the breakpoints from the "cont" container css class
      screens: {
        xs: { max: "574px" }, // Styles for up to 574px
        s: { max: "769px" }, // Styles for up to 769px
        m: { max: "989px" }, // Styles for up to 989px
        l: { max: "1199px" }, // Styles for up to 1199px
        xl: { min: "1200px" } // Styles for 1200px and above
      },
      boxShadow: {
        // Adding default shadow
        defaultShadow: "6px 0px 2px -3px rgba(235,235,235,0.03)",
        bigShadow: "0 5px 10px rgba(0, 0, 0, .4)"
      }
    }
  },
  plugins: []
}

export default config
