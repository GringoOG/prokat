/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101029',
        gold: '#d49d39',
        'gold-bright': '#ffb412',
        surface: '#f6f6f6',
        stat: '#1a0659',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1880px',
      },
    },
  },
  plugins: [],
};
