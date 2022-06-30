import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView },
    {path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    {path: '/login', name: 'LoginView', component: () => import('../views/LoginView.vue')},
    {path: '/register', name: 'RegisterView', component: () => import('../views/RegisterView.vue')},
    //User
    {path: '/user/edit',name: 'editAccount', component: () => import('../views/EditAccountView.vue')},
    {path: '/user/editPwd',name: 'editPassword', component: () => import('../views/EditPasswordView.vue')},
    {path: '/user/delete',name: 'deleteAccount', component: () => import('../views/DeleteAccountView.vue')},
    {path: '/user/orderdetails',name: 'orderdetails', component: () => import('../views/OrderDetailView.vue')},
    // user : Restaurater
    {path: '/user/restaurant/orders',name: 'orderdetails', component: () => import('../views/OrderDetailView.vue')},
    {path: '/user/restaurant/orders/pending',name: 'orderdetails', component: () => import('../views/OrderDetailView.vue')},
    // user : deliverer
    {path: '/user/deliverer/orders',name: 'orderdetails', component: () => import('../views/OrderDetailView.vue')},
    // user : Restaurater
    {path: '/user/order/pending',name: 'orderdetails', component: () => import('../views/OrderDetailView.vue')},
    //Order
    {path: '/order/info',name: 'orderInfo', component: () => import('../views/OrderInfoView.vue')},
    {path: '/order/:orderId',name: 'orderInfo', component: () => import('../views/OrderInfoView.vue')},
    //Products
    {path: '/product/edit/:productId',name: 'productEdit', component: () => import('../views/product/EditProductView.vue')},
    {path: '/product/list',name: 'lop', component: () => import('../views/product/ListOwnProductsView.vue')},
    {path: '/product/add',name: 'addproduct', component: () => import('../views/product/AddProductView.vue')},
    // RESTAURANTS
    {path: '/restaurants', name: 'restaurantsView', component: () => import('../views/RestaurantsView.vue')},
    {path: '/restaurants/:categoryId', name:'RestauBycategoryId', component: () => import('@/views/RestaurantsView.vue') },
    {path: '/menu/:restauId', name:'menuByRestauId', component: () => import('@/views/restaurant/MenuView.vue') },
    {path: '/restaurant/list',name: 'rl', component: () => import('../views/ListRestaurantView.vue')},
    {path: '/restaurant/edit',name: 're', component: () => import('../views/EditRestaurantView.vue')},
    {path: '/restaurant/create',name: 'createRestaurant', component: () => import('../views/CreateRestaurantView.vue')},
  ]
})

export default router
