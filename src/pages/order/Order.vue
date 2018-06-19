<template>
  <div class="order">
    <use-header :title="title"></use-header>
    <add-address></add-address>
    <order-pay :mode_data="paymentMode" :cartListItem="cartListItem"></order-pay>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import AddAddress from './components/OrderAddress'
import OrderPay from './components/OrderPay'

export default {
  name: 'Order',
  data () {
    return {
      title: '用户结算',
      paymentMode: [],
      cartListItem: {}
    }
  },
  components: {
    UseHeader,
    AddAddress,
    OrderPay
  },
  methods: {
    getPaymentMode (res) {
      // console.log(res.data)
      this.paymentMode = res.data
    }
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
