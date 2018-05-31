<template>
<div class="detail">
  <detail-swiper></detail-swiper>
  <detail-proinfo :current_price="price"></detail-proinfo>
  <detail-selection-info @transmitPrice="getPrice"></detail-selection-info>
  <detail-evaluate></detail-evaluate>
  <detail-overview></detail-overview>
  <detail-bottombar></detail-bottombar>
</div>
</template>

<script>
import DetailSwiper from './components/Swiper'
import DetailProinfo from './components/Proinfo'
import DetailSelectionInfo from './components/SelectionInfo'
import DetailEvaluate from './components/Evaluate'
import DetailOverview from './components/Overview'
import DetailBottombar from './components/Bottombar'

export default {
  name: 'Detail',
  components: {
    DetailSwiper,
    DetailProinfo,
    DetailSelectionInfo,
    DetailEvaluate,
    DetailOverview,
    DetailBottombar
  },
  data () {
    return {
      price: '0'
    }
  },
  methods: {
    getPrice (num) {
      this.price = num
    }
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
.detail
  background: #efefef
</style>
