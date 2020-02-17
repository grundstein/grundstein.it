export default {
  ROOT: 'src',
  GIT: {
    ORIGIN: 'origin',
    BRANCH: 'master',
  },
  PUBLIC: 'docs',
  THEME: ['project', 'grundstein'],

  WEB_ROOT: '/',
  URL: 'grundstein.github.io',

  HOIST: ['LightSwitch', 'Gdpr'],

  IGNORED_STATIC: ['.xcf'],

  THEME_VARS: {
    background: {
      dark: '#212121',
      light: '#e0e0e0',
    },

    link: {
      dark: '#c4c4c4',
      light: '#212121',

      hover: {
        dark: '#f09d09',
        light: '#f09d09',
      },
    },

    neutral: '#5a5a5a',

    primary: {
      neutral: '#f09d09',
      light: '#f5ff5f',
      dark: '#e05c05',
    },

    secondary: {
      neutral: '#5a5a5a',
      light: '#d8d8d8',
      dark: '#0a0a0a',
    },

    text: {
      dark: '#c4c4c4',
      light: '#212121',
    },
  },
}
