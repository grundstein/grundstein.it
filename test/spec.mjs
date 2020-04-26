import { is } from '@magic/test'

import * as app from '../src/app.mjs'

export default [
  { fn: () => app, expect: is.object, info: 'app is an object' },
  { fn: () => app.state, expect: is.object, info: 'app.state is an object' },
]
