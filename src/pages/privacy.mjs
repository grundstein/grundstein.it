export const state = {
  title: '@grundstein - privacy policy',
}

export const View = () =>
  div([
    h2('privacy policy'),

    p('@grundstein does not call home.'),

    p([
      'we will never, under no circumstances,',
      ' share information about our users with ',
      b('any'),
      ' third parties.',
    ]),

    h3('canary:'),
    p([
      'as long as ',
      Link({ to: '/canary/', text: 'our canary link works' }),
      ' we have not shared any data about our users with anyone.',
    ]),

    p('thats it.'),
  ])
