import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/Index'
import SaleView from '@/pages/SaleView'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/sale',
      name: 'sale_view',
      component: SaleView
    }
  ]
})
