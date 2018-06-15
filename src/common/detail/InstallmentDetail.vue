<template>
  <div class="installment">
    <div class="title">请选择分期</div>
    <div class="installment_item">
      <div class="checked">
        <checked></checked>
      </div>
      <div class="desc">
        <div>100元 x 3期</div>
        <span>免息，无手续费</span>
      </div>
    </div>
  </div>
</template>

<script>
import checked from 'common/commonComponents/Check'
export default {
  name: 'InstallmentDetail',
  components: {
    checked
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
@import '~styles/variable.styl'
.installment
  position: fixed
  bottom: 0
  left: 0
  right: 0
  padding: .3rem
  .title
    font-size: .24rem
    color: #999
    text-align: center
    height: .896rem
    padding: .3rem
    box-sizing: border-box
  .installment_item
    border-bottom: .02rem solid #eee
    height: .896rem
    // line-height: .896rem
    display: flex
    .checked
      display: inline-block
      margin: auto 0
    .desc
      font-size: .24rem
      color: #3c3c3c
      display: inline-block
      margin: auto 0 auto .3rem
      span
        color: $mainColor
</style>
