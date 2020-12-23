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
    redirect: 'login'
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
    meta: { title: 'Freedom Wall | Home', requiresAuth: true }
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => import('@/views/homepage/Profile'),
    meta: { title: 'Freedom Wall | Profile', requiresAuth: true }
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('@/views/homepage/Friends'),
    meta: { title: 'Freedom Wall | Friends', requiresAuth: true }
  },
  {
    path: '/saved',
    name: 'saved',
    component: () => import('@/views/homepage/Saved'),
    meta: { title: 'Freedom Wall | Saved', requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    meta: { title: 'Freedom Wall | Login' }
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