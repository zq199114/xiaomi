import {
  ADD_CART,
  REDUCE_CART,
  CLEAR_CART
} from './mutation-types'

export default {
  // 加入购物车
  [ADD_CART] (state, {
    phone_name,
    phone_model,
    phone_price,
    phone_color,
    phone_num,
  }) {
    let cart = state.cartList
  }
}
