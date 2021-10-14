module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        25: '1.5625rem',
        50: '3.125rem',
        100: '6.25rem',
        150: '9.375rem',
        200: '12.5rem',
      },
      height: {
        banner: 'calc(100vh - 25vh)',
        skeletonStore: '22.8125rem',
      },
      minWidth: {
        150: '9.375rem',
        productCard: '20.208125rem',
        featuredCard: '21.5625rem',
      },
      maxWidth: {
        productCard: '20.208125rem',
        featuredCard: '21.5625rem',
      },
      minHeight: {
        150: '9.375rem',
        productCard: '29.850625rem',
        featuredCard: '21.5625rem',
      },
      maxHeight: {
        500: '33.33333333rem',
        productCard: '29.850625rem',
        featuredCard: '21.5625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
