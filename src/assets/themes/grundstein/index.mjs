export default vars => ({
  '.Hero': {
    backgroundColor: vars.neutral,

    p: {
      color: vars.text.dark,
    },
    '.LogoWrapper h1': {
      color: vars.text.dark,
    },
  },
  '.Footer': {
    '.Menus, .Credits': {
      color: vars.neutral,

      a: {
        color: vars.neutral,

        '&:hover': {
          color: vars.white,
        },
      },
    },
  },
})
