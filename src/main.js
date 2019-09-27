import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入头部
import MyHeader from './components/MyHeader'
// 引入脚部
import MyFooter from './components/MyFooter'
Vue.config.productionTip = false
// 注册头部组件
Vue.component("my-header",MyHeader);
// 注册脚部组件
Vue.component("my-footer",MyFooter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
