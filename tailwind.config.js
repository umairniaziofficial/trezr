/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headingColor: "#343C6A",
        sidebarTextColor: "B1B1B1",
        primaryColor: "2D60FF",
        backgroundColor: "E5E5E5",
      },
    },
  },
  plugins: [],
};
