import Vue from 'vue'
import Router from 'vue-router'

import general from './general'

Vue.use(Router)
Vue.component('vue-router', Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    ...general,
  ],
})

export default router