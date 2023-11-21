import { useApp, userRoutes, dashboardRoutes, defineOptions, AeriaMain } from 'waltz-ui'
import { DashboardLayout, AuthWall } from 'aeria-app-layout'
import waltzPtbr from '@waltz-ui/i18n-ptbr'

import '@waltz-ui/ui/style.css'
import 'aeria-app-layout/style.css'
import './style/main.css'
import './style/main.less'

const options = defineOptions({
  component: AeriaMain,
  dashboardComponent: DashboardLayout,
  routes: [
    userRoutes(() => AuthWall),
    dashboardRoutes(() => DashboardLayout),
  ],
  i18n: {
    locale: 'pt_BR',
    messages: {
      pt_BR: waltzPtbr
    }
  },
  menuSchema: [
    '/dashboard/pizza',
    '/dashboard/user'

  ]
})

useApp(options).then((app) => {
  app.mount()
})
