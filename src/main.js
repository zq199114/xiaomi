// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index' // 引入vuex文件
// import './config/rem'
import FastClick from 'fastclick'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/iconfont.css'

// 绑定fastClick插件
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// 使用router插件
Vue.use(router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
