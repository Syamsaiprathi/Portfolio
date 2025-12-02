/** @type {import('tailwindcss').Config} */

export default {
  // 1. Enable dark mode via class strategy
  darkMode: "class",

  // 2. Define where Tailwind should look for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      // 3. Keep your custom colors
      colors: {
        primary: "#f98e2b", // Your orange color
        secondary: "#f3f3f3", // Your light gray color
      },
      // 4. Keep your container customization
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
        },
      },
    },
  },
  plugins: [],
}