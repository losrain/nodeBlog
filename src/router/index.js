import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home.vue'
import HomePage from '@/view/homePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'HomePage',
          component: HomePage,
        }
      ]
    }
  ]
})
