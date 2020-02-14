export const state = {
  title: '@grundstein - getting started',
}

export const View = state =>
  div([
    h2('getting started'),

    p([
      'we are still working on the tools described below,',
      ' our semi-public alpha starts on 22. 3. 2020.',
    ]),

    h3(['cli', i(' - release: 22. 3. 2020')]),

    p('first, install grundstein.'),
    Pre('npm install -g grundstein'),

    p('then, go to the directory with your public page and run'),
    Pre('grundstein'),
    p('grundstein will guide you through the process.'),

    h3(['browser extensions', i(' - release: 22. 2. 2020')]),
  ])
