import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '網路行銷購物網'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // 註解不能刪
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '關於'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: '我的購物車'
    }
  }
]

const router = new VueRouter({
  routes
})

// 進入每個頁面後要做什麼事
// to 去哪裡
// from 從哪裡來
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
