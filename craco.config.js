import purgecss from '@fullhuman/postcss-purgecss';
// https://purgecss.com/guides/react.html#use-craco
module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
        }),
      ],
    },
  },
};
