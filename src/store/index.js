import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import { getStore } from '../config/mUtils'

Vue.use(Vuex)

const state = {
  cartList: [], // 加入购物车的商品列表
  cartListItem: {}, // 加入购物车的列表条目
  itemId: 1, // 加购物车id
  phone_name: null, // 商品名称
  phone_model: null, // 商品的制式
  phone_price: null, // 商品价格
  phone_color: null, // 商品的颜色
  phone_num: null // 商品的数量
}

if (getStore('cartList')) {
// console.log(typeof localStorage.cartList)
// console.log(state.cartList)
  var lie = getStore('cartList')
  state.itemId = lie[lie.length - 1].id // 给id做个记录
  state.cartList = lie
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
