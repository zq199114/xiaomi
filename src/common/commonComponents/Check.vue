<!-- 展示模板 -->
<template>
<div class="check">
  <span class="sel" :class="{'sel_active': service}">✔</span>
</div>
</template>

<script>
export default {
  name: 'check',
  props: {
    service: Boolean
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.check
  .sel
    display: inline-block
    height: .4rem
    width: .4rem
    line-height: .4rem
    text-align: center
    border-radius: .2rem
    border: .01rem solid rgba(0,0,0,.15)
    font-size: .2rem
    font-weight: 500
    vertical-align: top
    background: #fff
    color: #fff
  .sel_active
    border: .01rem solid #FF6700
    background: #FF7600
    color: #fff
</style>
