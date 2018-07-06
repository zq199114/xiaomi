<template>
<div class="detail">
  <detail-swiper :imgRes="imgRes"></detail-swiper>
  <detail-proinfo :phone_name="phone_name" :gift="gift" :current_price="price" @transimitName="transimitName"></detail-proinfo>
  <detail-selection-info :version="version" @transmitPrice="getPrice" :showSel="showSel" :tranName="tranName" @changSel="showSelect"></detail-selection-info>
  <detail-evaluate></detail-evaluate>
  <detail-overview :imgStore="imgStore"></detail-overview>
  <detail-bottombar @showSelect="showSelect"></detail-bottombar>
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
  name: 'testDetail',
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
      price: '0',
      showSel: false,
      tranName: null,
      imgRes: null, // 轮播图
      imgStore: null, // 详情
      phone_name: null, // 商品名
      version: null, // 版本名
      gift: null // 赠品
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
    },
    detailData (res) {
      if (res.status === 200) {
        let id = this.$route.params.userId // 穿过来的id在这里
        let data = res.data[id]
        console.log(res.data[id])
        this.imgRes = data.imgRes
        this.imgStore = data.imgStore
        this.phone_name = data.phone_name
        this.version = data.version
        this.gift = data.gift
      }
    }
  },
  mounted () {
    this.$axios.post('/news/index').then(this.detailData)
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
.detail
  background: #efefef
</style>
