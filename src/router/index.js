import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDenied from '../views/AccessDenied.vue'
import LoginSuccess from '../views/LoginSuccess.vue'
import isAuthenticated from '@/authenticate'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AdminPage from '@/views/AdminPage.vue'
import UserPage from '@/views/UserPage.vue'
import authenticatedRole from '@/role'
import AddBookView from '@/views/AddBookView.vue'

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
    path: '/firebaselogin',
    name: 'Firebaselogin',
    component: FirebaseSigninView
  },
  {
    path: '/firebaseregister',
    name: 'Firebaseregister',
    component: FirebaseRegisterView
  },
  {
    path: '/adminpage',
    name: 'Adminpage',
    component: AdminPage
  },
  {
    path: '/userpage',
    name: 'Userpage',
    component: UserPage
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
  },
  {
    path: '/addbook',
    name: 'Addbook',
    component: AddBookView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && to.name !== 'Firebaselogin' && to.name !== 'Firebaseregister' && !isAuthenticated.value && to.name !== 'Home' && to.name !== 'Addbook') {
      next({ name: 'Login' })
    } else if (isAuthenticated.value && authenticatedRole === 'admin'){
      next({ name: 'AdminPage' })
    } else if (isAuthenticated.value && authenticatedRole === 'user'){
      next({ name: 'UserPage' })
    }
    else next()
})

export default router