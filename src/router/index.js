import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

import Son1 from '@/components/son/first'
import Son2 from '@/components/son/second'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/hello/son1',
      children:[{
        path:'son1',
        component:Son1
      },{
        path:'son2',
        component:Son2
      }]
    },
    {
      path:'/hello2',
      name:'HelloWorld2',
      component:HelloWorld2
    }
  ]
})
