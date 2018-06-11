<template>
<div class="cartTopbar">
  <router-link tag="div" to="/detail" class="back"><div class="iconfont ico">&#xe624;</div></router-link>
  <div class="title">购物车</div>
  <div class="search"><div class="iconfont ico">&#xe603;</div></div>
</div>
</template>

<script>
export default {
  name: 'CartHeader'
}
</script>

<style lang="stylus" scoped type="text/stylus">
@import  '~styles/variable.styl'
.cartTopbar
  position: fixed
  z-index: 99
  top: 0
  right: 0
  left: 0
  height: $headerHeight
  background: $bgColor
  display: flex
  justify-content: space-between
  line-height: $headerHeight
  font-size: .3rem
  color: #666
  .back, .search
    width: .88rem
    text-align: center
    .ico
      font-size: .35rem
      color: #666
</style>
