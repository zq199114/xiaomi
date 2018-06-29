<template>
<div class="bar">
    <router-link class="home icon" active-class="active" tag="div" to="/Home"><span class="iconfont">&#xe655;</span><i>首页</i></router-link>
    <div  class="catalogue icon"><span class="iconfont">&#xe682;</span><i>分类</i></div>
    <router-link class="cart icon" active-class="active" tag="div" to="/Cart"><span class="iconfont">&#xe600;</span><i>购物车</i></router-link>
    <router-link class="mine icon" active-class="active" to="/User" tag="div"><span class="iconfont">&#xe67b;</span><i>我的</i></router-link>
</div>
</template>

<script>
export default {
  name: 'HomeBottombar'
}
</script>

<style lang="stylus" scoped type="text/stylus">
@import '~styles/variable.styl'
.bar
  background: #fff
  position: fixed
  bottom: 0
  left: 0
  z-index: 99
  height: 1.04rem
  width: 100%
  font-size: .22rem
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
  .home, .catalogue, .cart, .mine
    color: #999
  .active
    color: $mainColor
  .icon
    padding: .2rem 0
    text-align: center
    // display: inline-block
    width: 25%
    height: 100%
    margin: 0
    float: left
    .iconfont
      font-size: .4rem
    i
      display: block
      margin-top: .1rem
</style>
