import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/components/Dashboard.vue'
import ErrorPage from '../views/404.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loginPage',
    name: 'Login Page',
    component: LoginPage,
  },
  {
    path: '/signupPage',
    name: 'Signup Page',
    component: LoginPage,
  },
  {
    path: '/myProfile',
    name: 'My Profile',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/bluetooth',
    name: 'Bluetooth',
    component: LoginPage,
  },
  {
    path:'/dataUsage',
    name: '404',
    component: ErrorPage,
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
