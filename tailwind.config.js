/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // Ensure this path is correct if you moved or renamed files
    "./src/**/*.{js,ts,jsx,tsx}",  // For all files in the src directory with jsx or tsx extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
