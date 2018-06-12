<template>
<div class="bar">
  <div  @click="selectClass(1)">
  <router-link tag="div" to="/" class="home icon" :class="{'active':'active1' === act}"><span class="iconfont">&#xe655;</span><i>首页</i></router-link>
  </div>
  <div  @click="selectClass(2)">
  <div class="catalogue icon" :class="{'active':'active2' === act}"><span class="iconfont">&#xe682;</span><i>分类</i></div>
  </div>
  <div @click="selectClass(3)">
    <router-link tag="div" to="/Cart" class="cart icon" :class="{'active':'active3' === act}"><span class="iconfont">&#xe600;</span><i>购物车</i></router-link>
  </div>
  <div @click="selectClass(4)">
  <div class="mine icon" :class="{'active':'active4' === act}"><span class="iconfont">&#xe67b;</span><i>我的</i></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeBottombar',
  data () {
    return {act: 'active1'}
  },
  methods: {
    selectClass (num) {
      this.act = 'active' + num
    }
  }
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
