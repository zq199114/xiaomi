<!-- 展示模板 -->
<template>
  <div class="recommend" ref="wraper">
    <div>
      <home-swiper></home-swiper>
      <home-nav></home-nav>
      <home-activity></home-activity>
      <home-dailybast></home-dailybast>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './recommend/Swiper'
import HomeNav from './recommend/Nav'
import HomeActivity from './recommend/Activity'
import HomeDailybast from './recommend/Dailybest.vue'
import BScroll from 'better-scroll'

export default {
  name: 'HomeRecommend',
  components: {
    HomeSwiper,
    HomeNav,
    HomeActivity,
    HomeDailybast
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wraper, {
          scrollY: true,
          tab: true,
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
    // this.$refs.wraper.style.height = (window.screen.availHeight / 50 - 1.68 - 1.04) + 'rem'
  }
}
</script>
<!-- 样式代码 -->
<style lang="stylus" scoped type="text/stylus">
.recommend
  position: fixed
  top: 1.68rem
  left: 0
  right: 0
  bottom: 1.04rem
  overflow: hidden
  // background: rgb(245, 245, 245)
</style>
