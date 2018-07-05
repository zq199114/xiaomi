<template>
  <div class="banner">
    <swiper :options="swiperOptiona">
      <swiper-slide v-for="item in swiperImg" :key="item.id">
        <router-link tag="img" to="/Detail" class="swiper_img" :src="item.imgUrl"></router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CellphoneBanner',
  props: {
    swiperImg: Array
  },
  data () {
    return {
      swiperOptiona: {
        autoplay: {delay: 3000, stopOnLastSlide: false, disableOnInteraction: true}, // 自动轮播
        pagination: {
          el: '.swiper-pagination'
        },
        touchRatio: 1, // 触摸变慢
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      }
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus">
@import "~styles/variable.styl"
  .banner >>> .swiper-pagination-bullet-active
    background: #fff
  .banner
    width: 100%
    .swiper_img
      width: 100%
</style>
