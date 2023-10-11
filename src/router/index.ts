import { createRouter, createWebHistory } from 'vue-router'
import Pump from '../views/pump/Pump.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pump
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
