import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0A111F',
        'subtle-off-white': '#F5F5F5',
        'gold-accent': '#A47B49',
        'secondary-accent': '#0A6847',
        primary: {
          DEFAULT: '#A47B49', // gold-accent as default primary
          '50': '#FDF8F3',
          '100': '#FBEFE0',
          '200': '#F7DDC0',
          '300': '#F2C69A',
          '400': '#EDAE73',
          '500': '#A47B49', // gold-accent
          '600': '#8F6A3F',
          '700': '#7A5935',
          '800': '#65482B',
          '900': '#503721',
          '950': '#3B2617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
