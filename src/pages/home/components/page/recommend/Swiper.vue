<!-- 展示模板 -->
<template>
<div class="banner">
  <swiper :options="swiperOptiona" ref="mySwiper">
    <swiper-slide v-for="item in swiperImg" :key="item.id">
      <img class="swiper_img" :src="item.imgUrl">
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
        on: {
          lazyImageLoad (slide, image) {
            alert('延迟加载图片')
            console.log(slide) // 哪个slide里面的图片在加载
            console.log(image) // 哪个图片在加载
          }
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
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
