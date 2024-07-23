import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors:{
        'primary': '#F6EBD5',
        'secondary': '#B8DCD8',
        'font': '#747474'
      },
    },
  },
  plugins: [],
} satisfies Config;
