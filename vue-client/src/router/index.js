import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebase } from '@/services'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/NotFound')
  },
  {
    path: '/',
    name: 'welcome',
    components: () => import('@/views/Welcome')
  },
  {
    path: '/en',
    name: 'home',
    component: () => import('@/views/Home'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'profile/:id',
        name: 'profile',
        components: () => import('@/views/Profile')
      },
      {
        path: 'friends',
        name: 'friends',
        components: () => import('@/views/Friends')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next({ name: 'login' })
  } else if (!requiresAuth && currentUser) {
    next({ name: 'home' })
  } else {
    next()
  }
})


export default router
