import { useApp, userRoutes, dashboardRoutes, defineOptions, AeriaMain } from 'waltz-ui'
import waltzPtbr from '@waltz-ui/i18n-ptbr'
import { ptbr } from './i18n'

import '@waltz-ui/ui/style.css'
import 'aeria-app-layout/style.css'
import './style/main.css'
import './style/main.less'

import { AuthWall } from 'aeria-app-layout'
import DashboardLayout from './pages/_dashboard.vue'

const options = defineOptions({
  component: AeriaMain,
  dashboardComponent: DashboardLayout,
  routes: [
    userRoutes(AuthWall),
    dashboardRoutes(DashboardLayout),
  ],
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
