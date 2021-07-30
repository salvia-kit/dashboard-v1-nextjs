module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        mac: "url('/images/mac.webp')",
      }),
      width: {
        99: 'calc(100% - 16rem);' /* get the width of the main content from lg:viewport by dividing
        (the total width by the width of the side navigation)*/,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
