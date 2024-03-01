import { useApp, defineOptions, AeriaMain } from 'waltz-ui'
import waltzPtbr from '@waltz-ui/i18n-ptbr'
import { ptbr } from './i18n/index.js'
import { routes } from './routes.js'

import '@waltz-ui/ui/style.css'
import 'aeria-app-layout/style.css'
import './style/main.css'
import './style/main.less'

const options = defineOptions({
  component: AeriaMain,
  routes,
  i18n: {
    current: 'pt_BR',
    locales: {
      pt_BR: [
        waltzPtbr,
        ptbr,
      ],
    },
  },
  menuSchema: [
    '/dashboard/pizza',
    '/dashboard/user',

  ],
})

useApp(options).then((app) => {
  app.mount()
})

