<template>
  <div class="order">
    <use-header :title="title" :back="cart"></use-header>
    <add-address></add-address>
    <order-pay :mode_data="paymentMode" :cartListItem="cartListItem"></order-pay>
    <order-detail></order-detail>
    <order-cart-list :cartListItem="cartListItem"></order-cart-list>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import AddAddress from './components/OrderAddress'
import OrderPay from './components/OrderPay'
import OrderDetail from './components/OrderDetail'
import OrderCartList from './components/OrderCartList'
import { mapMutations } from 'vuex'

export default {
  name: 'Order',
  data () {
    return {
      title: '用户结算',
      paymentMode: [],
      cartListItem: {},
      cart: '/Cart'
    }
  },
  components: {
    UseHeader,
    AddAddress,
    OrderPay,
    OrderDetail,
    OrderCartList
  },
  methods: {
    ...mapMutations(['DEFAULT_ADDRESS']),
    getPaymentMode (res) {
      // console.log(res.data)
      this.paymentMode = res.data
    }
    // getSt(res)
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'Cart') {
      this.DEFAULT_ADDRESS()
    }
    next()
  },
  mounted () {
    this.$axios.get('/api/payment.json').then(this.getPaymentMode)
    // console.log(this.$route.params) // 这里是路由穿过来的参数
    this.cartListItem = this.$route.params
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.order
  background: #f4f4f4
</style>
