import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    {path: '/Restaurants', name: 'RestaurantsView', component: () => import('../views/RestaurantsView.vue')},
    {path: '/Login', name: 'LoginView', component: () => import('../views/LoginView.vue')},
    {path: '/Register', name: 'RegisterView', component: () => import('../views/RegisterView.vue')},
    {path: '/menu/:name', component: () => import('@/views/MenueView.vue') },
    {path: '/LoginPro',name: 'LoginProView',component: () => import('../views/LoginProView.vue')},



  ]
})

export default router
