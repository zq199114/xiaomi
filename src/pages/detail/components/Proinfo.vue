<!-- 展示模板 -->
<template>
<div class="proinfo">
  <div class="infoDetail">
    <div class="title">红米Note5 AI双摄</div>
    <div class="title_info">骁龙636 八核处理器 / 1.4μm大像素 AI 双摄 / 1300万柔光自拍 / 最高可选6GB大内存 / 4000mAh 大电量 / 5.99" 18:9 全面屏 / 人脸解锁</div>
    <div class="title_price"><i>￥</i>1399</div>
  </div>
  <div class="promotion">
    <i>促销</i><span class="cuxiao">赠品</span><span class="zenpin">赠米粉卡</span>
    <div class="iconfont">></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailProinfo'
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.proinfo
  text-align: left
  padding: .2rem .32rem 0
  .infoDetail
    .title
      font-size: .36rem
      line-height: 1.5em
    .title_info
      font-size: .24rem
      line-height: 1.5em
      color: rgba(0,0,0,.54)
    .title_price
      padding: .2rem 0
      color: #ff6700
      font-size: .48rem
      font-weight: 700
      i
        font-size: .76em
  .promotion
    i
      width: .82rem
      font-size: .24rem
      color: rgba(0,0,0,.54)
      line-height: .4rem
    .cuxiao
      display: inline-block
      color: #f56600
      border-radius: 1px
      padding: .03rem .05rem .01rem
      margin: 0 0 .01rem
      font-size: .16rem
      border: .03rem solid
    .zenpin
      margin-left: .08rem
      font-size: .24rem
      color: rgba(0,0,0,.87)
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
</style>
