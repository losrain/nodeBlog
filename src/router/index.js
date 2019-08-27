import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home.vue'
import HomePage from '@/view/homePage.vue'
import echarts from '@/view/echarts.vue'
import table from '@/view/table.vue'
import system from '@/view/system.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: 'line',
          name: 'echarts',
          component: echarts,
        },
        {
          path: 'system',
          name: 'system',
          component: system,
        },
        {
          path: 'tables',
          name: 'Tabels',
          component: table,
        }
      ]
    }
  ]
})
