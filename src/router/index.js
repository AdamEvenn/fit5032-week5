import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDenied from '../views/AccessDenied.vue'
import LoginSuccess from '../views/LoginSuccess.vue'
import isAuthenticated from '@/authenticate'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/loginsuccess',
    name: 'LoginSuccess',
    component: LoginSuccess
  },
  {
    path: '/accessdenied',
    name: 'AccessDenied',
    component: AccessDenied
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated.value) next({ name: 'Login' })
    else next()
})

export default router