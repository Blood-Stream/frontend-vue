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
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'profile' */ '@/Pages/EditProfile.vue')
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import(/* webpackChunkName: 'profile' */ '@/Pages/Statistic.vue')
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

router.beforeEach((to, from, next) => {
  sesion = Boolean(sessionStorage.getItem('UserSesion'))
  if (to.path === '/' && !sesion) {
    next('/landing');
  } else {
    next()
  }
});

router.beforeEach((to, from, next) => {
  sesion = Boolean(sessionStorage.getItem('UserSesion'))
  if (to.path === '/user' && !sesion) {
    next('/landing');
  } else {
    next()
  }
});

export default router
