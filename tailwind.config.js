 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   extend: {
  fontFamily: {
    elegant: ['"Playfair Display"', 'serif'],
  },
}
,
  plugins: [
    require('tailwind-scrollbar-hide'), // 👈 add this line
  ],
 }