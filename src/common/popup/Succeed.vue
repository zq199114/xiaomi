<template>
<div class="succeed">
  <div class="iconfont succeed_ico">&#xe60b;</div>
  <span class="msg">成功加入购物车!</span>
</div>
</template>

<script>
export default {
  name: 'Succeed'
}
</script>

<style lang="stylus" scoped type="text/stylus">
.succeed
  z-index: 99
  width: 70%
  height: 30%
  position: fixed
  top: 50%
  left: 50%
  margin: -30% 0 0 -35%
  background: rgba(0, 0, 0, .7)
  border-radius: .2rem
  text-align: center
  .succeed_ico
    color: #fff
    font-size: 1.2rem
    margin-top: .7rem
  .msg
    display: block
    color: #fff
    margin-top: .5rem
</style>
