import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// - 导入全局样式表，以供全局使用
import './assets/css/global.css'
Vue.config.productionTip = false
// - 将element-ui注册为插件，以供全局使用
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
