/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Roboto', system-ui, sans-serif",
        body: "'Open Sans Variable', system-ui, sans-serif",
      },
    },
  },
  plugins: [],
}
