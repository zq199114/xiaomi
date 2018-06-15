<template>
  <div class="address">
    <div class="addAddress border-bottom"><span class="add">添加收获地址</span><span class="iconfont arrow">&#xe62d;</span></div>
  </div>
</template>

<script>
export default {
  name: 'OrderAddress'
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.address
  margin-top: $headerHeight
  background: #fff
  .addAddress
    display: flex
    justify-content: space-between
    padding: 0 .2rem 0 .3rem
    height: $headerHeight
    line-height: $headerHeight
    .add
      font-size: .26rem
      font-weight: 700
    .arrow
      align-self: right
      font-weight: normal
      color: #828282
</style>
