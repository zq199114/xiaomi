<template>
<div class="inst" v-if="showDet">
  <div class="installment">
    <div class="title">请选择分期</div>
    <div class="installment_item" v-for="item in 3" :key="item">
      <div class="checked">
        <checked @getItem="getItem(item)"></checked>
      </div>
      <div class="desc">
        <div>{{(price/(item*3)).toFixed(2)}}元 x {{item*3}}期</div>
        <span>免息，无手续费</span>
      </div>
    </div>
  </div>
  {{price}}
</div>
</template>

<script>
import checked from 'common/commonComponents/Check'
export default {
  name: 'InstallmentDetail',
  data () {
    return {
      level: 3, // 分期档次
      month: 12, // 分期几个月
      showDet: false
    }
  },
  props: {
    showDetail: {
      type: Boolean,
      default: false
    },
    price: Number
  },
  methods: {
    getItem (qishu) {
      console.log(qishu)
      // 把期数传递出去
      this.$emit('showInsta', qishu)
      this.$emit('change')
    }
  },
  components: {
    checked
  },
  watch: {
    showDetail (newq, oldq) {
      console.log(newq + ' ' + oldq)
      this.showDet = newq
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
@import '~styles/variable.styl'
.inst
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: rgba(0, 0, 0, .5)
.installment
  background: #fff
  position: fixed
  bottom: 0
  left: 0
  right: 0
  padding: .3rem
  .title
    font-size: .26rem
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
    &:last-child
      border-bottom: .02rem solid #fff
</style>
