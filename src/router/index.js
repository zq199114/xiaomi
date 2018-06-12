import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'
import Home from '@/pages/home/home'
import Detail from '@/pages/detail/Detail'
import Cart from '@/pages/cart/Cart'
import Login from '@/pages/login/Login' // 注意@后面要加上斜杠

Vue.use(Router)

export default new Router({
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    // 期望滚动到的位置
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Detail',
      name: 'Detail',
      component: Detail
      // meta: { keepAlive: true }
    }, {
      path: '/Cart',
      name: 'Cart',
      component: Cart // 这里写错不会报错
    }, {
      path: '/Login',
      name: 'Login',
      component: Login, // 这里写错不会报错
      meta: { keepAlive: true }
    }
  ]
})
