export const View = state =>
  div({ id: 'hero', class: 'Hero' }, [
    Booting(),
    p('the wise build their house on a rock.'),

    Menu({
      items: [
        { to: '/#about', text: 'about' },
        { to: '/getting-started/', text: 'getting started' },
        { to: '/#support', text: 'support' },
      ],
      state,
    }),
  ])

export const style = vars => ({
  backgroundColor: vars.text.dark,
  margin: '5vh auto',
  position: 'relative',
  maxWidth: 'inherit',
  width: '100%',

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    margin: '3em 0 0',

    a: {
      color: vars.text.light,

      '&:hover': {
        color: vars.primary.neutral,
      },
    },
  },

  p: {
    color: vars.secondary.neutral,
    fontSize: '1.1em',
    textAlign: 'center',
  },
})
