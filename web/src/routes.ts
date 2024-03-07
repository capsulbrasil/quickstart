import { userRoutes, dashboardRoutes } from 'aeria-ui'
import DashboardLayout from './pages/_dashboard.vue'
import { AuthWall } from 'aeria-app-layout'
import { routes as autoRoutes } from 'vue-router/auto-routes'

export const routes = autoRoutes.concat([
  userRoutes(AuthWall),
  dashboardRoutes(DashboardLayout, [
    {
      path: '',
      component: () => import('./pages/dashboard/index.vue'),
      meta: {
        title: 'Dashboard',
        icon: 'gauge',
      },
    },
  ]),
])

