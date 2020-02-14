export const state = {
  title: '@grundstein',
}

export const View = state => [
  Hero(state),

  div({ id: 'about' }, [
    h2('early bird <3'),
    p([
      'hello, you are here a bit early.',
      ' the first time we will be publishing information about @grundstein is the 22. 03. 2020.',
      ' feel free to poke around,',
      ' but as long as this notice is here,',
      ' most documentation on this page will not be accurate (yet).',
    ]),

    h1('grundstein?'),

    p([
      '@grundstein is our approach to hosting infrastructure.',
      ' it is purpose built for the ',
      Link({ to: 'https://magic.github.io' }, '@magic'),
      ' static webapp and api generator,',
      ' but should be usable with most other web development frameworks.',
    ]),

    h3('our goals:'),
    p('reproducible and verifiable builds, down to the kernel.'),
    p('minimal dependencies on all layers.'),
    p('free and open source toolchain, "not invented here" is a good thing.'),
    p('language agnosticity, with a focus on nodejs and rust support.'),
  ]),
]
