import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/wishlist', name: 'My Wishlist', component: () => import(/* webpackChunkName: "wishlist" */ '../views/Wishlist.vue') },
  { path: '/cart', name: 'My Cart', component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue') },
  { path: '/orders', name: 'My Orders', component: () => import(/* webpackChunkName: "orders" */ '../views/Orders.vue') },
  { path: '/profile', name: 'Profile', component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue') }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
