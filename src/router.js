import Vue from 'vue'
import Router from 'vue-router'
// 引入index
import Index from './views/Index.vue'
// 引入features
import Features from './views/Features'
// 引入Story
import Story from './views/Story'
// 引入Movile
import Mobile from './views/Mobile'
// 引入二级页面search
import Search from './components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {path:"/Index",component:Index},
  {path:'/Features',name:'Features',component: Features},
  {path:'/Story',name:'Story',component: Story},
  {path:'/Mobile',name:'Mobile',component: Mobile},
  {path:"/Search",name:"Search",component:Search},
  ]
})
