module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'code': ['Source\\ Code\\ Pro']
      },
      colors: {
        'primary': 'var(--primary)',
        'primary-focus': 'var(--primary-focus)',
        'secondary': 'var(--secondary)',
        'secondary-focus': 'var(--secondary-focus)',
        'accent': 'var(--accent)',
        'accent-focus': 'var(--accent-focus)',
        'neutral': 'var(--neutral)',
        'neutral-focus': 'var(--neutral-focus)',
        'background': 'var(--background)',
        'background-focus': 'var(--background-focus)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
