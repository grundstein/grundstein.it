export const state = config => ({
  title: '@grundstein',
  description: 'the wise build their house on a rock. hosting without hassle.',
  seo: {
    name: '@grundstein',
    url: `https://${config.URL}`,
    about: 'the wise build their house on a rock. hosting without hassle.',
    image: `https://${config.URL}${config.WEB_ROOT}grundstein-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },
  menu: [{ to: '/', text: 'about' }],
})
