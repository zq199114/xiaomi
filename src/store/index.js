import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import { getStore } from '../config/mUtils'

Vue.use(Vuex)

const state = {
  cartList: [], // 加入购物车的商品列表
  cartListItem: {}, // 加入购物车的列表条目
  itemId: 1, // 加购物车id
  token: null, // 登陆的状态
  addressList: [], // 存储地址列表
  defaultAddress: []
}

/*
* 下面这样写太繁琐了，后期把他优化掉
*/
// localStorage.removeItem('cartList') // 由于一开始只是清空了cartList中的内容，所以并不是真正的清除嗲localStorage，所以第一次打卡项目的时候不能识别下面的length
// console.log(getStore('cartList')) // 在最开始getStore只是一个无效的对象，所以这个时候取getStore('cartList')就是null，如果在加上。length就会报错
if (getStore('cartList') !== null) {
  if (getStore('cartList').length) {
    // console.log(getStore('cartList'))
    // console.log(state.cartList)
    let lie = getStore('cartList')
    state.itemId = lie[lie.length - 1].id // 给id做个记录
    state.cartList = lie
  }
}
if (getStore('addressList') !== null) {
  if (getStore('addressList')) {
    let add = getStore('addressList')
    state.addressList = add
  }
}

if (getStore('defaultAddress') !== null) {
  if (getStore('defaultAddress')) {
    let add = getStore('defaultAddress')
    state.defaultAddress = add
  }
}

if (getStore('token') !== null) {
  if (getStore('token')) {
    let add = getStore('token')
    state.token = add
  }
}

export default new Vuex.Store({
  state,
  mutations
  // state: {
  // todos: [
  // { id: 1, text: '我的done是true', done: true },
  // { id: 2, text: '我的done是false', done: false }
  // ]
  // },
  // getters: { // 相当于组件中的computed属性
  // doneTodos: state => {
  // return state.todos.filter(todo => todo.done)
  // }
  // },
  // mutations: {
  // increment (state, payload) {
  // state.count += payload.amount
  // }
  // }
})
