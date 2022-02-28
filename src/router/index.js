import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import ForgetPwd from '@/components/ForgetPwd.vue'
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgetPwd', component: ForgetPwd }
]

const router = new VueRouter({
  routes
})
// * 设置路由导航
// router.beforeEach((to, from, next) => {
//   // - 判断用户访问的路径的地址
//   if (to.path === '/login') {
//     // - 直接放行
//     next()
//   } else {
//     //* 获取sessionStorage中的是否存在token，存在token表示当前已经登陆过，直接放行
//     const token = window.sessionStorage.getItem('token')
//     if (!token) {
//       //* 并不存在token，强制跳转到登录页面，进行登录
//       next('/login')
//     } else {
//       //* 表示当前已经存在token，表示已经登录过，直接放行
//       next()
//     }
//   }
// })

export default router
