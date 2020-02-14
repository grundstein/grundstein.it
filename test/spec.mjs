import { is } from '@magic/test'
import * as app from '../src/app.mjs'
import * as page from '../src/pages/index.mjs'

export default [
  { fn: () => app, expect: is.object, info: 'app is an object' },
  { fn: () => app.state, expect: is.fn, info: 'app.state is a function' },
  { fn: () => page.View, expect: is.fn, info: 'page.View is a function' },
]
