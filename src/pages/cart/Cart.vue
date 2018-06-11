<!-- 展示模板 -->
<template>
<div class="cart">
  <cart-header></cart-header>
  <cart-list @totalItem="totalItem"></cart-list>
  <cart-bottom-bar :total="total"></cart-bottom-bar>
</div>
</template>

<script>
// import { mapState } from 'vuex'
import CartHeader from './components/Header'
import CartList from './components/List'
import CartBottomBar from './components/BottemBar'

export default {
  name: 'Cart',
  data () {
    return {
      total: {}
    }
  },
  components: {
    CartHeader,
    CartList,
    CartBottomBar
  },
  computed: {
    // ...mapState(['cartList'])
  },
  methods: {
    totalItem (item) {
      console.log(item)
      this.total = item
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">

</style>
