<!-- 展示模板 -->
<template>
<div class="selection_info">
  <div class="selected border-bottom">
    <i>已选</i>
    <div class="item">红米Note 5 4GB+64GB 黑色 x1</div>
    <span class="iconfont arrow">&#xe62d;</span>
  </div>
  <div class="send_to border-bottom">
    <i>送至</i>
    <div class="ctiy">北京市 东城区</div>
    <div class="supply">有现货</div>
    <span class="iconfont  arrow">&#xe62d;</span>
  </div>
  <div class="service">
    <span class="iconfont gouzi">&#xe60b;</span><div>7天无理由退货</div>
    <span class="iconfont gouzi">&#xe60b;</span><div>15天质量问题换货</div>
    <span class="iconfont gouzi">&#xe60b;</span><div>365天保修</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailSelectionInfo'
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.selection_info
  background: #fff
  padding: 0 .32rem
  margin-bottom: .2rem
  .selected,.send_to,.service

    padding: .3rem 0
    i
      font-size: .24rem;
      color: rgba(0,0,0,.54);
      display: inline-block
      margin-right: .3rem
    div
      font-size: .24rem
      color: rgba(0,0,0,.87)
      display: inline-block
    .supply
      color: #f56600
    .arrow
      float: right
      font-size: .24rem
    .gouzi
      font-size: .2rem
      color: #f56600
  .service
    div
      display: inline-block
      font-size: .2rem
      color: rgba(0,0,0,.54)
      margin-right: .25rem
</style>
