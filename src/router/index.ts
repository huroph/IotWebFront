import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    {path: '/restaurants', name: 'restaurantsView', component: () => import('../views/RestaurantsView.vue')},
    {path: '/login', name: 'LoginView', component: () => import('../views/LoginView.vue')},
    {path: '/register', name: 'RegisterView', component: () => import('../views/RegisterView.vue')},
    {path: '/menu/:restauId', name:'menuByRestauId', component: () => import('@/views/ItemView.vue') },
    {path: '/loginPro',name: 'LoginProView',component: () => import('../views/LoginProView.vue')},




  ]
})

export default router
