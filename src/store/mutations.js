import {
  ADD_CART,
  REDUCE_CART,
  // CLEAR_CART
  ITEM_NUM, // 加减商品数量
  // ITEM_LOCA // 存储条目
  KEEP_STATE, // 保持登陆状态
  LOGIN_OUT,
  ADD_ADDRESS, // 添加地址
  DELETE_ADDRESS, // 删除地址
  DEFAULT_ADDRESS, // 默认地址
  MODIFY_ADDRESS // 修改地址
} from './mutation-types'
import { setStore, removeStroe, getStore } from '../config/mUtils.js'
export default {
  // 加入购物车
  [ADD_CART] (state, {
    phoneName,
    phoneModel,
    phonePrice,
    phoneColor,
    phoneImg,
    phoneNum
  }) {
    let isTrue = null
    let cartItem = {
      'phone_name': phoneName,
      'phone_model': phoneModel,
      'phone_price': phonePrice,
      'phone_color': phoneColor,
      'phone_img': phoneImg,
      'phone_num': phoneNum
    }
    if (!state.cartList.length) { // 判断是否有内容
      console.log(1)
      cartItem['id'] = state.itemId // 没有就初始化一下, 把即将要传进来的额对象加上一个id
      state.cartList.push(cartItem) // 然后塞到state.cartList离去
    } else { // 否则
      for (let item of state.cartList) { // 遍历循环出每个对象用 of
        for (let i in item) { // 通过循环出来的对象 (用in) 来循环出键名
          if (item['phone_name'] !== cartItem['phone_name']) {
            isTrue = false
            break // 如果产品名字不一样就退出2级循环,从一级循环开始下一个对比
          }
          if ((i === 'phone_num') || (i === 'id') || (i === 'selectitem')) {
            continue // 如果村换到 产品数量 就无视下面的语句,开始新一轮的循环
          }
          if (item[i] === cartItem[i]) { // 对比存储在state.cartList中的每一个参数
            // console.log(4)
            isTrue = true // 如果是一样的就标记一下true
          } else { // 否则
            isTrue = false // 否则就标记为false 并且推出此次循环
            break
          }
        }
        if (isTrue) { // 如果始终为true,说明这个商品项已经有,就改一下数量就可以 ,然后跳出循环
          item['phone_num'] += cartItem['phone_num']
          break
        }
      }
      if (!isTrue) {
        state.itemId++
        cartItem['id'] = state.itemId
        state.cartList.push(cartItem)
      }
    }
    // try {
    // localStorage.cartList = state.cartList
    // // 实现类似cookie的功能做到本地存储
    // } catch (e) {}
    setStore('cartList', state.cartList)
    // this.[ITEM_LOCA]('cartList')
  },
  // 加减商品数量
  [REDUCE_CART] (state, id) {
    // 找到数组中与元素内容相匹配的index值
    let delIndex = state.cartList.findIndex((item) => {
      return item.id === id
    })
    state.cartList.splice(delIndex, 1)
    setStore('cartList', state.cartList)
    // 如果长度等于0就清除localhost
    if (!state.cartList.length) {
      removeStroe('cartList')
    }
    // state.cartList = removeStroe('cartList')
  },
  // 获取需要增加数量的条目
  [ITEM_NUM] (state, {
    id,
    num
  }) {
    state.cartList.filter(item => item.id === id)[0].phone_num = num
    setStore('cartList', state.cartList)
  },
  // 保持登陆状态
  [KEEP_STATE] (state, token) {
    state.token = token
    setStore('token', token)
  },
  // 登出
  [LOGIN_OUT] (state) {
    state.token = null
    removeStroe('token')
  },
  // 添加地址
  [ADD_ADDRESS] (state, object) {
    if (object.pick) {
      state.addressList.map(item => {
        item.pick = false
      })
      state.defaultAddress = object
      setStore('defaultAddress', state.defaultAddress)
      console.log(getStore('defaultAddress'))
    }
    state.addressList = object.pick ? [object, ...state.addressList] : [...state.addressList, object]
    setStore('addressList', state.addressList)
  },
  // 默认地址(也不算默认地址就是就是会显示在地址详情里面)
  [DEFAULT_ADDRESS] (state, index = 0) {
    // console.log(state.defaultAddress)
    // console.log(state.addressList)
    if (!state.addressList.length) { return }
    state.defaultAddress = state.addressList[index]
    setStore('defaultAddress', state.defaultAddress)
  },
  [MODIFY_ADDRESS] (state, object) {
    let index = object.index
    delete object.index
    // 如果是默认地址就重新排序
    if (object.pick) {
      state.addressList.map(item => {
        item.pick = false
      })
      state.addressList[index] = object
      // 删除索引地址添加到数组开头
      state.addressList.unshift(state.addressList.splice(index, 1)[0])
      state.defaultAddress = object
      setStore('defaultAddress', state.defaultAddress)
    } else {
      state.addressList[index] = object
    }
    setStore('addressList', state.addressList)
  },
  // 删除地址
  [DELETE_ADDRESS] (state, index) {
    let res = state.addressList.splice(index, 1)
    if (res[0] === state.defaultAddress) {
      state.defaultAddress = state.addressList[0]
    }
    setStore('addressList', state.addressList)
    if (!state.addressList.length) {
      removeStroe('addressList')
      removeStroe('defaultAddress')
      state.defaultAddress = undefined
    }
  }
}
