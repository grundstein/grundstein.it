export const View = state =>
  div({ id: 'hero', class: 'Hero' }, [
    Booting(),
    p('the wise build their house on a rock.'),

    Menu({
      items: [
        { to: '/#about', text: 'about' },
        { to: '/getting-started/', text: 'getting started' },
      ],
      state,
    }),
  ])

export const style = vars => ({
  backgroundColor: vars.secondary.neutral,
  margin: '5vh auto',
  position: 'relative',
  maxWidth: 'inherit',
  width: '100%',

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    margin: '3em 0 0',

    a: {
      color: vars.primary.neutral,

      '&:hover': {
        color: vars.primary.light,
      },
    },
  },

  p: {
    fontSize: '1.1em',
    textAlign: 'center',
  },
})
