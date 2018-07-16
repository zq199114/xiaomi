import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'
// import App from '../App'
// import Home from '@/pages/home/home'
// import recommend from '@/pages/home/components/page/Recommend'
// import cellphone from '@/pages/home/components/page/Cellphone'
// import Detail from '@/pages/detail/Detail'
// import testDetail from '@/pages/detailTest/Detail'
// import Cart from '@/pages/cart/Cart'
// import Login from '@/pages/login/Login' // 注意@后面要加上斜杠
// import Order from '@/pages/order/Order'
// import OrderList from '@/pages/order/children/List'
// import view from '@/pages/order/children/children/view'
// import address from '@/pages/address/address'
// import addressSelect from '@/pages/address/children/addressSelect'
// import addressSelectCity from '@/pages/address/children/addressSelectCity'
// import list from '@/pages/address/children/list'
// import User from '@/pages/user/User'
// import set from '@/pages/user/children/set'
// import Category from '@/pages/category/Category'
// import Search from '@/pages/search/Search'
// import EvaluateList from '@/pages/detail/components/children/EvaluateList'
// import EvaluateDetail from '@/pages/detail/components/children/children/detail'

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
  // router-view里面只能view,children我儿子
  routes: [
    {
      path: '/',
      component: () => import('../App'),
      children: [{
        path: '',
        redirect: '/Home'
      }, {
        path: '/Home',
        component: () => import('@/pages/home/home'),
        children: [{
          path: '',
          redirect: 'recommend'
        }, {
          path: 'recommend',
          name: 'recommend',
          component: () => import('@/pages/home/components/page/Recommend')
        }, {
          path: 'cellphone',
          name: 'cellphone',
          component: () => import('@/pages/home/components/page/Cellphone')
        }, {
          path: 'Category',
          name: 'Category',
          component: () => import('@/pages/category/Category')
        }, {
          path: 'Cart',
          name: 'Cart',
          component: () => import('@/pages/cart/Cart') // 这里写错不会报错
        }, {
          path: 'User',
          name: 'User',
          component: () => import('@/pages/user/User'), // 这里写错不会报错
          children: [{
            path: 'set',
            name: 'set',
            component: () => import('@/pages/user/children/set'),
            meta: {
              requireAuth: true // 配置此项说明要登陆才能进入此页
            }
          }, {
            path: 'Orderlist/:selectId',
            name: 'Orderlist',
            component: () => import('@/pages/order/children/List'),
            meta: {
              requireAuth: true // 配置此项说明要登陆才能进入此页
            },
            children: [{
              path: 'view',
              name: 'view',
              component: () => import('@/pages/order/children/children/view')
            }]
          }]
        }]
      }]
    }, {
      path: '/Detail',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail'),
      children: [{
        path: 'EvaluateList',
        name: 'EvaluateList',
        component: () => import('@/pages/detail/components/children/EvaluateList'),
        children: [{
          path: 'detail',
          name: 'detail',
          component: () => import('@/pages/detail/components/children/children/detail')
        }]
      }]
      // meta: { keepAlive: true } // 这要用缓存，数据可以用缓存时特定的钩子函数调用
    }, {
      path: '/testDetail/:userId',
      name: 'testDetail',
      component: () => import('@/pages/detailTest/Detail')
    }, {
      path: '/Login',
      name: 'Login',
      component: () => import('@/pages/login/Login')// 这里写错不会报错
      // meta: { keepAlive: true }
    }, {
      path: '/Order',
      name: 'Order',
      meta: {
        requireAuth: true // 配置此项说明要登陆才能进入此页
      },
      component: () => import('@/pages/order/Order')
    }, {
      path: '/Address',
      name: 'Address',
      meta: {
        requireAuth: true // 配置此项说明要登陆才能进入此页
      },
      component: () => import('@/pages/address/address'),
      children: [{
        path: 'addressSelect',
        name: 'addressSelect',
        component: () => import('@/pages/address/children/addressSelect')
      }, {
        path: 'addressSelectCity',
        name: 'addressSelectCity',
        component: () => import('@/pages/address/children/addressSelectCity')
      }, {
        path: 'list',
        name: 'addresslist',
        component: () => import('@/pages/address/children/list')
      }]
    }, {
      path: '/Search',
      name: 'Search',
      component: () => import('@/pages/search/Search')
    }
  ]
})
