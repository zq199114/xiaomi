// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index' // 引入vuex文件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import './config/rem'
import FastClick from 'fastclick'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'
import scrollFn from 'common/commonjs/scrollFn' // 自定义的以全局方法,页面有蒙层时静止底部滚动

Vue.use(scrollFn) // 使用自定义的全局方法
// 绑定fastClick插件
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// 使用router插件
Vue.use(router)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
