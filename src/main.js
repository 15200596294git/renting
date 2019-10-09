import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 normalize
import 'normalize.css'
// 引入axios
import axios from 'axios'
// 引入qs模块
import qs from 'qs'
// 引入头部
import MyHeader from './components/MyHeader'
// 引入脚部
import MyFooter from './components/MyFooter'
// 配置axios
axios.defaults.baseURL="http://127.0.0.1:5050/"
// 配置axios 保存session信息
axios.defaults.withCredentials=true;
// 添加至圆型对象
Vue.prototype.axios = axios;
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
