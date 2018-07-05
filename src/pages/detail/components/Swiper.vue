<template>
<div class="swiper">
  <swiper :options="swiperOption" ref="swiperDet">
    <swiper-slide v-for="item in imgRes" :key="item.id">
      <img class="swiper_img" :src="item.imgUrl" alt=""  @click="showHandle">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <router-link tag="div" to="/" class="back"><span class="iconfont">&#xe624;</span></router-link>
  <!--如果下面不用v-if用show的话就不会在点击后初始化gallary组件,注意下面的showHandle虽然从子页面传过来了参数但是下面的showHandle不要加
  括号和参数,否则会没有作用-->
  <common-gallary :gallaryImgs="imgRes" v-if="showGallary" @close="showHandle" :num="changeNum"></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailSwiper',
  data () {
    return {
      imgRes: [{
        id: '001',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792'
      }, {
        id: '002',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2764f1f61a5a7691ee5f4998e6e83666.jpg?thumb=1&w=720&h=792'
      }, {
        id: '003',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9b0900deeb89fb9b2ee8faa239a27380.jpg?thumb=1&w=720&h=792'
      }, {
        id: '004',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9362d30184248bf9145c6786529fd23b.jpg?thumb=1&w=720&h=792'
      }],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: true }, // 自动轮播
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      },
      showGallary: false,
      changeNum: 0
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    showHandle (num) {
      if (typeof (num) === 'number') {
        this.swiperDeta.slideTo(num)
      }
      this.showGallary = !this.showGallary
      this.changeNum = this.swiperDeta.realIndex
    }
  },
  computed: {
    swiperDeta () {
      return this.$refs.swiperDet.swiper
    }
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
.swiper >>> .swiper-pagination-bullet-active
  background: #fff
.swiper
  width: 100%
  .swiper_img
    width: 100%
  .back
    z-index: 2
    width: .625rem
    height: .625rem
    line-height: .625rem
    text-align: center
    background: rgba(0, 0, 0, .5)
    border-radius: 50%
    position: fixed
    top: .2rem
    left: .2rem
    color: #fff
</style>
