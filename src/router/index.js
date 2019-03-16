import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/views')
const editPage = () => import('@/views/EditPage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/edit',
      name: 'editPage',
      component: editPage
    }
  ]
})
