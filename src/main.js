// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入vuex文件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueFuse from 'vue-fuse'
// import './config/rem'
import FastClick from 'fastclick'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'
import scrollFn from 'common/commonjs/scrollFn' // 自定义的以全局方法,页面有蒙层时静止底部滚动
import axios from 'axios'
import './mock/index.js'
// import { mapMutations } from 'vuex'

// 使用router插件
Vue.use(router)
Vue.prototype.$axios = axios

Vue.use(VueFuse)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.use(scrollFn) // 使用自定义的全局方法
// 绑定fastClick插件
FastClick.attach(document.body)
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// 页面刷新时，重新赋值token
console.log(store.state.token)
// if (getStore('token')) {
// store.commit('KEEP_STATE', getStore('token'))
// }
// // 全局的路由首位
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) { // 不存在就把要去的页面加入到，路由参数中
      next()
    } else {
      // console.log(to) // 在这个里面能看到parames的值
      next({
        path: '/login',
        query: {
          redirect: to.name,
          tota: to.params
        } // {redirect: to.fullPath}不知道不用fullPath会有什么隐患先这样写,这里设置了name地址栏就不会加密显示了, // 这里的to.fullPath就是order页面
      })
    }
  } else {
    // console.log(to)
    // console.log(from)
    next()
  }
})

// axios 配置
// axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'https://api.github.com'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit('LOGIN_OUT', 'token')

          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
          router.replace({
            path: 'login',
            // 下面是要去的那一页
            query: { redirect: router.currentRoute.path }
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
