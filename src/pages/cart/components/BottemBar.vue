<template>
    <div class="bar">
      <div class="total">
        <span class="num">共{{totalNum.num}}件 金额:</span><br>
        <span class="price"><i>{{totalNum.price}}</i>元</span>
      </div>
      <div class="continue" @click="test">继续购物</div>
      <div class="payment" @click="Settlement">去结算</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BottemBar',
  methods: {
    test () {
      console.log(this.totalNum)
    },
    Settlement () {
      this.$router.push('/Order')
    }
  },
  computed: {
    ...mapState(['cartList']),
    totalNum () {
      // console.log(this.cartList)
      let num = 0
      let price = 0
      let filterItem = this.cartList.filter(item => item.selectitem)
      filterItem.forEach(item => {
        num += item.phone_num
        price += item.phone_price * item.phone_num
      })
      return {num: num, price: price}
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
  .bar
    box-shadow:  0 3px 14px 2px rgba(0,0,0,.12)
    height: $headerHeight
    position: fixed
    bottom: 0
    left: 0
    right: 0
    display: flex
    text-align: center
    .total
      background: #fff
      width: 100%
      font-size: .26rem
      color: #999
      padding-top: .15rem
      .price
        i
          font-size: .4rem
          color: $mainColor
          font-weight: 800
          margin-right: .08rem
    .continue
      font-size: .28rem
      line-height: $headerHeight
      width: 100%
      background: #f3f3f3
    .payment
      font-size: .28rem
      color: #fff
      line-height: $headerHeight
      width: 100%
      background: $mainColor
</style>
