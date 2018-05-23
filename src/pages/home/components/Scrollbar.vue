<!-- 展示模板 -->
<template>
<div class="scroll">
  <ul class="scroll-bar">
    <li class="scroll-item" v-for="item in barItem">{{item}}</li>
  </ul>
</div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  name: 'HomeScrollbar',
  data () {
    return {
      barItem: ['推荐', '手机', '智能', '电视', '电脑', '双摄', '全面屏', '生活周边', '盒子']
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
@import "~styles/variable.styl"
.scroll
  width: 100%
  height: .68rem
  overflow: hidden
  background: $bgColor
  .scroll-bar
    height: 100%
    .scroll-item
      height: 100%
      float: left
      padding: 0 .25rem
</style>
