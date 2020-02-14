export const View = () =>
  div({ class: 'Booting' }, [Boot(), h1([span('@grund'), 'stein']), p('hosting without hassle')])

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

  '.Boot': {
    svg: {
      width: '15em',
      height: '12em',
      maxWidth: '50vw',
    },
  },

  h1: {
    color: vars.neutral,
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
