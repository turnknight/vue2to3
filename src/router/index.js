// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Vue.use(VueRouter)

import {
  createRouter,
  createWebHistory
} from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory



const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router