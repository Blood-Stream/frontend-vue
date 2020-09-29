import { createRouter, createWebHistory } from 'vue-router'
// pages
import Home from '../Pages/Home.vue'

const proof = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: to => {
      let path = 'home'
      if (proof) {
        path = 'landing'
      }
      return { path: `${path}` }
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
