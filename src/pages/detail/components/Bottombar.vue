<!-- 展示模板 -->
<template>
<div class="bottombar">
  <div class="home"><span class="iconfont home_icon">&#xe655;</span><p>首页</p></div>
  <div class="cart"><span class="iconfont cart_icon">&#xe600;</span><p>购物车</p></div>
  <div class="addcart" @click="showSelect">加入购物车</div>
</div>
</template>

<script>
export default {
  name: 'DetailBottombar',
  methods: {
    showSelect () {
      this.$emit('showSelect')
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.bottombar
  display: flex
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
  position: fixed
  bottom: 0
  left: 0
  height: 1.04rem
  width: 100%
  z-index: 50
  background: #fff
  .home,.cart
    font-weight: 400
    // flex: 1 // 要让这两个标签使用自己的宽度,就不要给他flex:1
    text-align: center
    // display: block
    width: 1.45rem
    color: #999
    font-size: .22rem
    height: 100%
    align-items: center
    .home_icon,.cart_icon
      font-weight: 300
      display: block
      font-size: .45rem
      margin: .1rem 0
    p
      display: block
    .cart_icon:before
      content: ''
      float: left
      display: inline-block
      height: .8rem
      width: .02rem
      background: #e4e4e4
  .addcart
    flex: auto
    height: 100%
    line-height: 1.04rem
    background: #ff6700
    text-align: center
    color: #fff
    font-size: .28rem
</style>
