import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Montpellier' },
  {
    path: '/:location',
    name: 'Home',
    component: Home
  },
  { path: '*', redirect: '/Montpellier' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
