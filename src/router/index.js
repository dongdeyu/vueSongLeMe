import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      meta:"Index",
      component: resolve => import('../pages/index.vue'),
    },
    {
      path: '/info',
      name: 'Info',
      meta:"Info",
      component: resolve => import('../pages/info.vue'),
    },
    {
      path: '/lists',
      name: 'Lists',
      meta:"Lists",
      component: resolve => import('../pages/lists.vue'),
    },
    {
      path: '/my',
      name: 'My',
      meta:"My",
      component: resolve => import('../pages/my.vue'),
    },
    {
      path: '*',
      redirect: '/index'
    },
  ]
})
