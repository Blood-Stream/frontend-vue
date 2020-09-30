import { createRouter, createWebHistory } from 'vue-router'
// pages
import Home from '../Pages/Home.vue'
import Landing from '../Pages/Landing.vue'

const proof = false

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sesion/:typeform',
    name: 'Sesion',
    props: true,
    component: () => import(/* webpackChunkName: "sesions" */ '@/Pages/Sesion.vue')
  },
  {
    path: '/',
    redirect: to => {
      let path = '/home'
      if (proof) {
        path = '/landing'
      }
      return {
        path: `${path}`
      }
    }
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import(/* webpackChunkName: "landing" */ '../Pages/Landing.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
