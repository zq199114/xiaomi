import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: [], // 加入购物车的商品列表
  cartListItem: {}, // 加入购物车的列表条目
  phone_name: null, // 商品名称
  phone_model: null, // 商品的制式
  phone_price: null, // 商品价格
  phone_color: null, // 商品的颜色
  phone_num: null // 商品的数量
}
export default new Vuex.Store({
  state
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
