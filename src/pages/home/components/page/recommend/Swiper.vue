<!-- 展示模板 -->
<template>
<div class="banner">
  <swiper :options="swiperOptiona" ref="mySwiper">
    <swiper-slide v-for="item in swiperImg" :key="item.id">
      <router-link tag="img" to="/Detail" class="swiper_img" :src="item.imgUrl"></router-link>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'RecommendBanner',
  data () {
    return {
      swiperImg: [
        {
          id: '001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12bd23e657a9ee41c1553c2fb2df8e2f.jpg?thumb=1&w=720&h=360'
        }, {
          id: '002',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360'
        }, {
          id: '003',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360'
        }, {
          id: '004',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2320573b3be643e29f5270a97e1a9c1d.jpg?thumb=1&w=720&h=360'
        }],
      swiperOptiona: {
        // init: false,
        // notNextTick: true,
        autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: true }, // 自动轮播
        pagination: {
          el: '.swiper-pagination'
        },
        touchRatio: 1, // 触摸变慢
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // console.log(this.swiper)
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.banner >>> .swiper-pagination-bullet-active
  background: #fff
.banner
  width: 100%
  .swiper_img
    width: 100%
</style>
