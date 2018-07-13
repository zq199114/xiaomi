<template>
<enter-leave>
<div class="detail">
  <detail-swiper></detail-swiper>
  <detail-proinfo :current_price="price" @transimitName="transimitName"></detail-proinfo>
  <detail-selection-info @transmitPrice="getPrice" :showSel="showSel" :tranName="tranName" @changSel="showSelect"></detail-selection-info>
  <detail-evaluate></detail-evaluate>
  <detail-overview></detail-overview>
  <detail-bottombar @showSelect="showSelect"></detail-bottombar>
</div>
</enter-leave>
</template>

<script>
import DetailSwiper from './components/Swiper'
import DetailProinfo from './components/Proinfo'
import DetailSelectionInfo from './components/SelectionInfo'
import DetailEvaluate from './components/Evaluate'
import DetailOverview from './components/Overview'
import DetailBottombar from './components/Bottombar'
import EnterLeave from 'common/animation/EnterLeave'

export default {
  name: 'Detail',
  components: {
    DetailSwiper,
    DetailProinfo,
    DetailSelectionInfo,
    DetailEvaluate,
    DetailOverview,
    DetailBottombar,
    EnterLeave
  },
  data () {
    return {
      price: '0',
      showSel: false,
      tranName: null
    }
  },
  methods: {
    getPrice (num) {
      this.price = num
    },
    showSelect () {
      this.showSel = !this.showSel
    },
    transimitName (name) {
      this.tranName = name
      // console.log(name) // ok
    }
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
  @import "~styles/variable.styl"
  .detail
    buyasuo()
    background: #efefef
</style>
