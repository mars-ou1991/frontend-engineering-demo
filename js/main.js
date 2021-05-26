import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/index'
Vue.use(VueRouter)

const a = new Vue({
  router: router,
  data() {
    return {
      transitionName: 'fold-left'
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'fold-right' : 'fold-left'
    }
  }
}).$mount('#list-wrap')