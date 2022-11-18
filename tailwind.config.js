// run this code to run tailwind
// npx tailwindcss -i ./src/index.css -o ./public/output.css --watch

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.{html,js}", "src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
