import {
  ADD_CART
  // REDUCE_CART,
  // CLEAR_CART
} from './mutation-types'

export default {
  // 加入购物车
  [ADD_CART] (state, {
    phoneName,
    phoneModel,
    phonePrice,
    phoneColor,
    phoneNum
  }) {
    let isTrue = false
    let id = 1
    let cartItem = {
      'phone_name': phoneName,
      'phone_model': phoneModel,
      'phone_price': phonePrice,
      'phone_color': phoneColor,
      'phone_num': phoneNum
    }
    if (!state.cartList.length) { // 判断是否有内容
      cartItem['id'] = id // 没有就初始化一下, 把即将要传进来的额对象加上一个id
      state.cartList.push(cartItem) // 然后塞到state.cartList离去
    } else { // 否则
      for (let item of state.cartList) { // 遍历循环出每个对象用 of
        for (let i in item) { // 通过循环出来的对象 (用in) 来循环出键名
          if (item['phone_name'] !== cartItem['phone_name']) break // 如果产品名字不一样就退出2级循环,从一级循环开始下一个对比
          if (i === 'phone_num') continue // 如果村换到 产品数量 就无视下面的语句,开始新一轮的循环
          if (item[i] === cartItem[i]) { // 对比存储在state.cartList中的每一个参数
            isTrue = true // 如果是一样的就标记一下true
          } else { // 否则
            isTrue = false // 否则就标记为false
          }
        }
        if (isTrue) { // 如果始终为true,说明这个商品项已经有,就改一下数量就可以 ,然后跳出循环
          item.num += cartItem.num
          break
        }
      }
      if (!isTrue) {
        cartItem['id'] = ++id
        state.cartList.push(cartItem)
      }
    }
  }
}
