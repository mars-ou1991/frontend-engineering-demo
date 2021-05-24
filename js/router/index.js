import List from '../pages/list'
import Detail from '../pages/detail'
import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    {
      path: '/list', component: List
    },
    {
      path: '/list/detail', component: Detail
    }
  ]
})