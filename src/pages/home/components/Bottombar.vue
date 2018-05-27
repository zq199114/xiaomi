<template>
<div class="bar">
  <div class="home icon"><span class="iconfont">&#xe655;</span><i>首页</i></div>
  <div class="catalogue icon"><span class="iconfont">&#xe682;</span><i>分类</i></div>
  <div class="cart icon"><span class="iconfont">&#xe600;</span><i>购物车</i></div>
  <div class="mine icon"><span class="iconfont">&#xe67b;</span><i>我的</i></div>
</div>
</template>

<script>
export default {
  name: 'HomeBottombar'
}
</script>

<style lang="stylus" scoped type="text/stylus">
.bar
  position: fixed
  bottom: 0
  left: 0
  z-index: 99
  height: 1.04rem
  width: 100%
  font-size: .22rem
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
  color: #999
  .icon
    padding: .2rem 0
    text-align: center
    display: inline-block
    width: 24.3%
    height: 100%
    .iconfont
      font-size: .4rem
    i
      display: block
      margin-top: .1rem
</style>
