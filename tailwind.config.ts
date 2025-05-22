import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",         
    "./pages/**/*.{ts,tsx}",     
    "./components/**/*.{ts,tsx}",  
    "./src/**/*.{ts,tsx}",         
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};

export default config;
