import { createRouter, createWebHistory } from 'vue-router'
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
    // beforeEnter: (to, from) => {
    //   if (sesion)
    //   return false
    // },
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// function existToken() {
//   return Boolean(sessionStorage.getItem('UserSesion'))
// }

router.beforeEach((to, from, next) => {
  if (to.path === '/home' && !sesion) {
    // next();
    next('/landing');
    console.log('sesino chek', sesion);
  } else {
    next()
    console.log('not sesino');
  }
});

router.beforeEach((to, from, next) => {
  if (to.path === '/user' && !sesion) {
    // next();
    next('/landing');
    console.log('sesino chek', sesion);
  } else {
    next()
    console.log('not sesino');
  }
});

export default router
