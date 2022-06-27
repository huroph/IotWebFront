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
    {path: '/Restaurants/:categoryId', name:'RestauBycategoryId', component: () => import('@/views/RestaurantsView.vue') },
    {path: '/LoginPro',name: 'LoginProView', component: () => import('../views/LoginProView.vue')},
    {path: '/editAccount',name: 'editAccount', component: () => import('../views/EditAccountView.vue')},
    {path: '/editPassword',name: 'editPassword', component: () => import('../views/EditPasswordView.vue')},
    {path: '/deleteAccount',name: 'deleteAccount', component: () => import('../views/DeleteAccountView.vue')},
    {path: '/OrderInfo',name: 'OrderInfo', component: () => import('../views/OrderInfoView.vue')},




  ]
})

export default router
