export const state = {
  title: '@grundstein - getting started',
}

export const View = state =>
  div([
    h2('getting started'),

    p('WIP - NOT IN PRODUCTION YET!'),

    h3('cli'),

    p('first, install grundstein.'),
    Pre('npm install -g grundstein'),

    p('then, go to the directory with your public page and run'),
    Pre('grundstein'),
    p('grundstein will guide you through the process.'),
  ])
