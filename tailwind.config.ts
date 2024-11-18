import type { Config } from "tailwindcss";

export const tailwindBreakpoints = {
  sm: "320px",
  md: "800px", // mobile
  lg: "1280px", // desktop
  xl: "1400px",
  xxl: "1920px",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: tailwindBreakpoints,

    container: {
      center: true,
      screens: tailwindBreakpoints,
    },
    extend: {
      colors: {
        netural: {
          950: "#023047",
          900: "#667085",
          800: "#98A2B3",
          700: "#475467",
          100: "#E4E7EC",
          50: "#FFFFFF",
        },
        primary: {
          950: "#101828",
          900: "#1D2939",
          800: "#023047",
        },
   
      },
      keyframes: {
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        scrollBounce: "scrollBounce 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
