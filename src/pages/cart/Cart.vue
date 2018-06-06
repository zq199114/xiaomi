<!-- 展示模板 -->
<template>
<div class="cart">
  {{cartList}}
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapState(['cartList'])
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">

</style>
