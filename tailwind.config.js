/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor:{
        skin: {
          primary: 'var(--color-primary)',
          secondry: 'var(--color-secondry)',
          muted: 'var(--color-text-muted)',
          light: 'var(--color-text-light)',
          dark: 'var(--color-dark)',

        }
      },
      backgroundColor:{
        skin: {
          dark: 'var(--color-dark)',
          light: 'var(--color-text-light)',
          buttonAccent: 'var(--color-button-accen)',
          buttonMuted: 'var(--color-button-muted)',
          bgFooter: 'var(--color-bg-footer)',
          primary: 'var(--color-primary)',
        }
      }
    },
  },
  plugins: [],
}
