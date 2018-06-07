<!-- 展示模板 -->
<template>
<div class="cart">
  <cart-header></cart-header>
  <cart-list></cart-list>
</div>
</template>

<script>
// import { mapState } from 'vuex'
import CartHeader from './components/Header'
import CartList from './components/List'

export default {
  name: 'Cart',
  components: {
    CartHeader,
    CartList
  },
  computed: {
    // ...mapState(['cartList'])
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">

</style>
