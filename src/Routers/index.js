import { createRouter, createWebHashHistory } from 'vue-router'
// pages
import Home from '../Pages/Home.vue'
import Landing from '../Pages/Landing.vue'

let sesion = Boolean(sessionStorage.getItem('UserSesion'))

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'profile' */ '@/Pages/EditProfile.vue')
  },
  {
    path: '/load',
    name: 'load',
    component: () => import(/* webpackChunkName: 'load' */ '@/Assets/animations/lotie.vue')
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
      sesion = Boolean(sessionStorage.getItem('UserSesion'))
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
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/home' && !sesion) {
//     next('/landing');
//   } else {
//     next()
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.path === '/user' && !sesion) {
//     next('/landing');
//   } else {
//     next()
//   }
// });

export default router
