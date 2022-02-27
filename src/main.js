import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// - 将element-ui注册为插件，以供全局使用
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')