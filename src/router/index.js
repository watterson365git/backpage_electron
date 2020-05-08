import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/manage_blog',
    name: 'manage_blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/manage_blog')
  },
  // {
  //   path: '/manage_user',
  //   name: 'manage_user',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/manage_user')
  // },

]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
