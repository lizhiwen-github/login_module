import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// - 导入全局样式表，以供全局使用
import './assets/css/global.css'
// - 导入axios
import axios from 'axios'
// - 将axios挂载到vue的实例对象上，使用this.$http可以直接使用
Vue.prototype.$http = axios
// - 配置axios的访问的根路径
axios.defaults.baseURL = ''
Vue.config.productionTip = false
// - 将element-ui注册为插件，以供全局使用
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
