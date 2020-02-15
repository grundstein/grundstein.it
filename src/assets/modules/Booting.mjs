export const View = () =>
  div({ class: 'Booting' }, [Pyramid(), h1([span('@grund'), 'stein']), p('hosting without hassle')])

export const style = vars => ({
  margin: '0 auto',
  maxWidth: '380px',
  minWidth: '320px',
  position: 'relative',

  p: {
    position: 'absolute',
    right: 0,
    top: '2.5em',
  },

  '.Pyramid': {
    svg: {
      width: '15em',
      height: '12em',
      maxWidth: '50vw',
    },
  },

  h1: {
    color: vars.text.dark,
    fontSize: '2em',
    padding: '0',
    position: 'absolute',
    right: 0,
    textAlign: 'right',
    top: 0,

    span: {
      color: vars.primary.neutral,
    },
  },
})
