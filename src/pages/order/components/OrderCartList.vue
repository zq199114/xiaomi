<template>
  <div>
  <div class="order_cart_list">
    <div class="list_item" v-for="item in cartList" :key="item.id">
      <img class="pic" :src="item.phone_img" alt="">
      <div class="desc_item">
        <div class="desc">{{item.phone_name}}{{item.phone_model}}{{item.phone_color}}</div>
      </div>
      <div class="list_item_num">
        <div class="num" v-if="item.phone_num !== 1">x {{item.phone_num}} =</div>
        <div class="price">{{toDecimal(item.phone_price*item.phone_num)}}</div>
      </div>
    </div>
  </div>
  <div class="settle_accounts">
    <div class="total_price tota">商品价格：<i>{{toDecimal(totalPrice)}}</i></div>
    <div class="discount tota">以优惠：<i>0</i></div>
    <div class="distribution_costs tota">配送费用：<i>0</i></div>
  </div>
  <div class="go_payment">
    <div class="total_num">共计{{totalNum}}件 合计:{{totalPrice}}</div><div class="go_button">去付款</div>
  </div>
  </div>
</template>

<script>
import { setStore, getStore } from '@/config/mUtils.js'
export default {
  name: 'OrderCartList',
  props: {
    cartListItem: Object
  },
  data () {
    return {
      cartList: {},
      totalPrice: 0,
      totalNum: 0
    }
  },
  methods: {
    // 保留两位小数，没有小数强制添加两个0在小数点后
    toDecimal (x) {
      var fn = parseFloat(x)
      if (isNaN(fn)) {
        return false
      }
      var f = Math.round(x * 100) / 100
      var s = f.toString()
      var rs = s.indexOf('.')
      if (rs < 0) {
        rs = s.length
        s += '.'
      }
      while (s.length <= rs + 2) {
        s += '0'
      }
      return s
    }
  },
  watch: {
    cartListItem (newData, oldData) {
      console.log(newData)
      console.log(oldData)
      // if (!newData.tota) { return }
      if (!newData.tota) { return } // 这里加判断因为刷新后,newData,里的值就是null如果这时候给cartList获取到页面就没有内容显示了
      this.totalPrice = newData.tota.price
      this.cartList = newData.tota.item
      this.totalNum = newData.tota.num
      setStore('newDataTotalPrice', this.totalPrice)
      setStore('newDataCartList', this.cartList)
      setStore('newDataTotalNum', this.totalNum)
    }
  },
  mounted () {
    console.log(getStore('newDataCartList'))
    // console.log(getStore('newDataCartList'))
    this.totalPrice = getStore('newDataTotalPrice')
    this.cartList = getStore('newDataCartList')
    this.totalNum = getStore('newDataTotalNum')
    // if (this.cartList !== getStore('newDataCartList')) {
    // this.getLocalStore()
    // }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.order_cart_list
  margin-top: .2rem
  background: #fff
  big_border()
  .list_item
    display: flex
    padding: .1rem 0
    margin: 0 .3rem
    align-items: center
    borderBottom(.02rem)
    .pic
      width: .8rem
      height: .8rem
    .desc_item
      width: 100%
      overflow: hidden
      margin-left: .15rem
      .desc
        word-wrap:break-word
        word-break:normal
        common_font()
    .list_item_num
      flex: none
      margin-left: .8rem
      .num
        common_font()
        display: inline-block
      .price
        common_font()
        display: inline-block
        font-weight: bold
.settle_accounts
  margin-top: .2rem
  background: #fff
  padding: .2rem .3rem
  big_border()
  margin-bottom: 1rem
  .tota
    font-size: .24rem
    color: #3c3c3c
    font-weight: bold
    line-height: .35rem
    i
      font-weight: normal
.go_payment
  background: #fff
  position: fixed
  height: 1rem
  bottom: 0
  left: 0
  right: 0
  line-height: 1rem
  z-index: 99
  display: flex
  big_border()
  .total_num
    flex: 1
    color: $mainColor
    font-size: .3rem
    text-align: center
  .go_button
    flex: 1
    font-size: .3rem
    background: $mainColor
    text-align: center
    color: #fff
</style>
