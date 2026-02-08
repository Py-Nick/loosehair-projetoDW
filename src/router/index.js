import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cabelo',
    name: 'cabelo',
    component: () => import('../views/CabeloView.vue')
  },
  {
    path: '/perfume',
    name: 'perfume',
    component: () => import('../views/PerfumeView.vue')
  },
  {
    path: '/maquiagem',
    name: 'maquiagem',
    component: () => import('../views/MaquiagemView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
