import { useApp, userRoutes, dashboardRoutes, defineOptions, WMain } from 'waltz-ui'
import { DashboardLayout, AuthWall } from 'waltz-tailwind-layout'
import waltzPtbr from '@waltz-ui/i18n-ptbr'

import '@waltz-ui/ui/style.css'
import 'waltz-tailwind-layout/style.css'
import '../static/main.css'

const options = defineOptions({
  component: WMain,
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
  menuSchema: {
    start: {
      meta: {
        title: 'Início',
        icon: 'home'
      },
      children: [
        '/dashboard/pizza',
        '/dashboard/mesas',
        '/dashboard/equipe',
        '/dashboard/eventos',
        '/dashboard/user'
      ]
    }
  }
})

useApp(options).then((app) => {
  app.mount()
})
