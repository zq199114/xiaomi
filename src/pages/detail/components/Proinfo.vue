<!-- 展示模板 -->
<template>
<div class="proinfo">
  <div class="infoDetail">
    <div class="title">{{phone_name}} AI双摄</div>
    <div class="title_info">骁龙636 八核处理器 / 1.4μm大像素 AI 双摄 / 1300万柔光自拍 / 最高可选6GB大内存 / 4000mAh 大电量 / 5.99" 18:9 全面屏 / 人脸解锁</div>
    <div class="title_price"><i>￥</i>{{this.current_price}}</div>
  </div>
  <div class="promotion border-top" ref="promotion" @click='showDetail'>
    <i>促销</i>
    <div class="zenpin_lists" ref="lists">
      <div class="zenpin_list" v-for="item in gift" :key="item.id">
        <span class="cuxiao">赠品</span>
        <span class="zenpin">{{item.name}}</span>
      </div>
      <div class="iconfont arrow">&#xe62d;</div>
    </div>
  </div>
  <updown>
  <pro-detail v-show="showDet" :zenpin="gift"  @close="showDetail"></pro-detail>
  </updown>
</div>
</template>

<script>
import Updown from 'common/animation/Updown'
import ProDetail from 'common/detail/promotionDetail'
export default {
  name: 'DetailProinfo',
  props: {
    current_price: String
  },
  data () {
    return {
      phone_name: '红米Note5',
      gift: [{
        id: '001',
        name: '赠米粉卡'
      }, {
        id: '002',
        name: '赠保护膜'
      }, {
        id: '003',
        name: '赠保护壳'
      }],
      showDet: false
    }
  },
  components: {
    ProDetail,
    Updown
  },
  methods: {
    showDetail () {
      this.showDet = !this.showDet
    }
  },
  mounted () {
    this.$emit('transimitName', this.phone_name)
    this.$refs.promotion.style.height = (this.$refs.lists.offsetHeight / 50) + 'rem'
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.proinfo
  margin-bottom: .1rem
  background: #fff
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
    position: relative
    padding: .2rem 0
    box-sizing: border-box
    i
      width: .82rem
      font-size: .24rem
      color: rgba(0,0,0,.54)
      line-height: .4rem
      margin-right: 0.3rem
    .zenpin_lists
      position: absolute
      top: 0
      left: .9rem
      right: 0
      padding: .2rem 0
      .zenpin_list
        margin-bottom: .1rem
        .cuxiao
          display: inline-block
          color: #f56600
          border-radius: 1px
          padding: .03rem .05rem .01rem
          margin: 0 0 .01rem
          font-size: .16rem
          border: .01rem solid
        .zenpin
          margin-left: .08rem
          font-size: .24rem
          color: rgba(0,0,0,.87)
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
      .arrow
        right: 0rem
        top: 50%
        margin-top: -.16rem
        position: absolute
        display: inline-block
        font-size: .24rem
</style>
