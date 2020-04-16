import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/components/Dashboard.vue'
import ErrorPage from '../views/404.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path:'/unauthorized',
    name: '404',
    component: ErrorPage,
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
