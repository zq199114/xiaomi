<!-- 展示模板 -->
<template>
<div class="promotion_detail">
  <div class="detail">
    <div class="title border-bottom">促销</div>
    <div class="item" v-for="item in zenpin" :key="item.id">
      <div class="cuxiao">赠品</div>
      <div class="zenpin">{{item.name}}</div>
    </div>
    <div class="close" @click="back">X</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'promotionDetail',
  props: {
    zenpin: Array
  },
  methods: {
    back () {
      this.$emit('close')
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.promotion_detail
  position: fixed
  bottom: 0
  left: 0
  top: 0
  right: 0
  background: #fff
  z-index: 100
  .close
    position: absolute
    right: .5rem
    top: .5rem
    width: .4rem
    height: .4rem
    font-size: .45rem
    color: #e4e4e4
  .detail
    padding: .34rem .3rem
    .title
      width: 100%
      text-align: center
      padding: .5rem 0
      font-size: .32rem
    .item
      padding: .4rem 0
      .cuxiao
        display: inline-block
        color: #f56600
        border-radius: 1px
        padding: .03rem .05rem .01rem
        margin: 0 0 .01rem
        font-size: .16rem
        border: .01rem solid
      .zenpin
        display: inline-block
        margin-left: .08rem
        line-height: .25rem
        font-size: .24rem
        color: rgba(0,0,0,.87)
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
</style>
