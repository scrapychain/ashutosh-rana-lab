// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#E5E7EB',
        accent: '#93c5fd', // used by .btn-outline
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
};
// Note: Ensure that the paths in the content array match your project structure for Tailwind CSS to work correctly.
// This configuration file sets up Tailwind CSS with custom colors and typography plugin, and specifies where to look for class usage.