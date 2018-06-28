<template>
  <div class="incomplete">
    <div class="popup">
      <div class="tips">请勾选需要结算的商品</div>
      <div class="confirme" @click="back">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'incomplete',
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.incomplete
  z-index: 99
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: rgba(0, 0, 0, .5)
  .popup
    position: fixed
    left: 50%
    top: 50%
    width: 90%
    height: 15%
    margin: -1rem 0 0 -45%
    border-radius: .1rem
    background: #fff
    .tips
      font-size: .3rem
      color: #5c5c5c
      height: 50%
      line-height: 350%  // 如果是用百分比那么他是依照字体的大小设定行高
      border-bottom: .02rem solid #e4e4e4
      text-align: center
    .confirme
      height: 50%
      line-height: 300%
      font-size: .3rem
      color: $mainColor
      text-align: center
</style>
