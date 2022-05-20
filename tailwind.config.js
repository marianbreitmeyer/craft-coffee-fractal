// module.exports = {
//   content: [
//     "./components/**/*.{twig, html, js}",
//     "./components/*.{twig, html, js}"
//   ],
//   theme: {
//     typography: {
//       default: {
//         css: {
//           color: '#333',
//           a: {
//             'text-decoration': 'none',
//             color: '#cccccc',
//             '&:hover': {
//               color: '#2c5282',
//             },
//           },
//           'article-title': {
//             'font-weight': 100,
//             'font-size': '96px',
//             'margin-bottom': 0,
//           },
//         },
//       },
//     },
//     fontFamily: {
//       'script': ['Pacifico'],
//       body: ['Merriweather Sans', 'sans-serif'],
//     },
//     extend: {
//       spacing: {
//         headerbgtall: '300px',
//         headbgshort: '150px',
//         overlaybg: '200px',
//       },
//       backgroundImage: theme => ({
//         'coffee-shop-bg': "url('/img/coffee-shop.jpg')",
//         'image-with-overlay': "url('/img/espresso-shot.jpg')",
//       })
//     },
//   },
//   variants: {},
//   plugins: [
//     require('@tailwindcss/typography'),
//   ],
// }

module.exports = {
  content: [
        "./components/**/**/*.{twig,html,js}",
        "./components/**/*.{twig,html,js}",
        "./components/*.{twig,html,js}",
      ],
    theme: {
    typography: {
      default: {
        css: {
          color: '#333',
          a: {
            'text-decoration': 'none',
            color: '#cccccc',
            '&:hover': {
              color: '#2c5282',
            },
          },
          'article-title': {
            'font-weight': 100,
            'font-size': '96px',
            'margin-bottom': 0,
          },
        },
      },
    },
    fontFamily: {
      'script': ['Pacifico'],
      body: ['Merriweather Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        headerbgtall: '300px',
        headbgshort: '150px',
        overlaybg: '200px',
      },
      backgroundImage: theme => ({
        'coffee-shop-bg': "url('/img/coffee-shop.jpg')",
        'image-with-overlay': "url('/img/espresso-shot.jpg')",
      })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}