module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        mac: "url('/images/mac.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
