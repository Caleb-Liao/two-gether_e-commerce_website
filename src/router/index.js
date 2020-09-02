import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'fontendIndex',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: 'products/:category',
        name: 'fontendProducts',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Order.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'backendProducts',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/dashboard/Coupons.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/dashboard/Orders.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路徑重複點取不報錯的方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
