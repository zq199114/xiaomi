
<!-- 展示模板 -->
<template>
<div>
  <div class="swiper-container" id="swiper-container2" style="width:480px;">
    <swiper class="swiper-wrapper" :options="swiperOption">
      <swiper-slide v-for="(item, key) in slone" :key="key">
        <div class="swiper-slide">{{item}}</div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="swiper-container" id="swiper-container3" style="width:480px;">
    <swiper class="swiper-wrapper" :options="swiperOp">
        <swiper-slide v-for="(item, key) in slone" :key="key">
          <div class="swiper-slide red-slide">{{item}}</div>
        </swiper-slide>
    </swiper>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      slone: ['板块1', '板块2', '板块3', '板块4', '板块5', '板块6', '板块7'],
      swiperOption: {
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        tap: function () {
          this.slideTo(mySwiper2.clickedIndex)
        }
      },
      swiperOp: {
        on:{slideChangeTransitionStart: function(){
          updateNavPosition()
        }
      },
    }
  }
}
</script>
<!-- 样式代码 -->
<style lang="stylus" scoped type="text/stylus">

</style>
