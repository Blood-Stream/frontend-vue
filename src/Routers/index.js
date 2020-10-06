import { createRouter, createWebHistory } from 'vue-router'
// pages
import Home from '../Pages/Home.vue'
import Landing from '../Pages/Landing.vue'

const sesion = Boolean(sessionStorage.getItem('UserSesion'))

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
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'profile' */ '@/Pages/EditProfile.vue')
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
      let path = '/landing'

      console.log(sesion);
      if (sesion) {
        path = '/home'
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
