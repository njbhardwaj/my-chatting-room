/** @type {import('tailwindcss').Config} */
// export default {
//   plugins: [
//     import("daisyui"),
//   ],
// };

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}