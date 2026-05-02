/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'hero': 'clamp(3rem, 10vw, 6rem)',
        'h2': 'clamp(2.2rem, 6vw, 4rem)',
        'h3': 'clamp(1.6rem, 4vw, 3rem)',
        'h4': 'clamp(1.2rem, 3vw, 2rem)',
        'body': 'clamp(1rem, 2vw, 1.125rem)',
      },
      colors: {
        primary: '#14B8A6',
        'primary-dark': '#0F766E',
        'primary-soft': '#CCFBF1',
        accent: '#F59E0B',
        'accent-soft': '#FEF3C7',
        'muted-purple': '#1E1B4B',
        'error-red': '#EF4444',
        'card-dark': 'rgba(15, 23, 42, 0.78)',
        'card-light': '#FFFFFF',
        'bg-start': '#0B1020',
        'bg-struggle': '#111827',
        'bg-mid': '#F1F5F9',
        'bg-end': '#F8FAFC',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 60px rgba(20, 184, 166, 0.28)',
        'glow-amber': '0 0 60px rgba(245, 158, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
