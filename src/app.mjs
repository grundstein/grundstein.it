export const state = config => ({
  title: '@grundstein',

  branding: ['@grund', 'stein'],
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

  hero: {
    title: ['@grund', 'stein'],
    description: 'devops without hassle',
    content: 'the wise build their house on a rock.',

    menu: [
      { to: '/#about', text: 'about' },
      { to: '/getting-started/', text: 'getting started' },
    ],
  },

  footer: {
    one: {
      title: '@grundstein',
      before: ['hosting without hassle.', 'created by', 'Wizards & Witches @ Work'],
      menu: [{ to: '/privacy/', text: 'privacy notice' }],
    },
    two: {
      title: 'our projects',
      menu: [
        { to: 'https://webboot.org', text: 'webboot' },
        { to: 'https://twitter.com/webbootorg', text: 'magic' },
        { to: 'https://keybase.io/webboot', text: 'grundstein' },
      ],
    },
    three: {
      title: 'social links',
      menu: [{ to: 'https://github.com/grundstein', text: 'github' }],
    },
  },
})
