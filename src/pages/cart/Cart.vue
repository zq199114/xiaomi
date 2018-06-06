<!-- 展示模板 -->
<template>
<div class="cart">
  <cart-header></cart-header>
</div>
</template>

<script>
//import { mapState } from 'vuex'
import CartHeader from './components/Header'

export default {
  name: 'Cart',
  components: {
    CartHeader
  },
  computed: {
    // ...mapState(['cartList'])
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">

</style>
