<!-- 展示模板 -->
<template>
<div class="gallary">
  <div class="gallary-wrapper">
    <swiper :options="swiperOption" class="swiper_gallary" ref="swiperMy">
      <div class="swiper-pagination"  slot="pagination"></div>
      <swiper-slide v-for="item in gallaryImgs" :key="item.id">
        <img class="img_swiper" :src="item.imgUrl" alt="">
      </swiper-slide>
    </swiper>
    <div class="back" @click="backDetail">X</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    gallaryImgs: Array,
    num: Number
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
          // updateOnImagesReady: true
        },
        initialSlide: this.num,
        observeParents: true, // 当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observer: true // 检测swiper的当前元素或者父元素发生变化时自我刷新一次
      }
    }
  },
  methods: {
    backDetail () {
      console.log(this.swiperM.realIndex)
      this.$emit('close', this.swiperM.realIndex)
    }
  },
  computed: {
    swiperM () {
      return this.$refs.swiperMy.swiper
    }
  },
  mounted () {
    let _this = this
    console.log(_this.num)
    // this.swiperM.init({
    // })
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.gallary
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 5
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: #000
  .gallary-wrapper
    width: 100%
    .swiper_gallary
      .swiper-pagination
        color: #fff
        position: fixed
        top: .5rem
        bottom: auto
      .img_swiper
        width: 100%
    .back
      z-index: 99
      font-size: .5rem
      position: fixed
      top: .35rem
      left: .35rem
      width: .6rem
      height: .6rem
      line-height: .6rem
      text-align: center
      color: #fff
</style>
