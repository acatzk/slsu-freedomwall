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
    component: () => import('@/views/Welcome')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/homepage/Home'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => import('@/views/homepage/Profile'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:displayName/:id',
    name: 'user-profile',
    component: () => import('@/views/homepage/Profile'),
    meta: { requiresAuth: true }
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('@/views/homepage/Friends'),
    meta: { requiresAuth: true }
  },
  {
    path: '/saved',
    name: 'saved',
    component: () => import('@/views/homepage/Saved'),
    meta: { requiresAuth: true }
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
    next({ name: 'welcome' })
  } else if (!requiresAuth && currentUser) {
    next({ name: 'home' })
  } else {
    next()
  }
})


export default router