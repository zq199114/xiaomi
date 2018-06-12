<!-- 展示模板 -->
<template>
<div class="cart">
  <cart-header></cart-header>
  <cart-list></cart-list>
  <cart-bottom-bar v-if="this.cartList.length"></cart-bottom-bar>
  <home-cartbar v-if="!this.cartList.length"></home-cartbar>
</div>
</template>

<script>
import { mapState } from 'vuex'
import CartHeader from './components/Header'
import CartList from './components/List'
import CartBottomBar from './components/BottemBar'
import HomeCartbar from 'common/commonComponents/HomeBottombar'

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
    CartBottomBar,
    HomeCartbar
  },
  computed: {
    ...mapState(['cartList'])
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
