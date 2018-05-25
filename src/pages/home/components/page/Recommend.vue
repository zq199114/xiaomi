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
    this.scroll = new BScroll(this.$refs.wraper, {
      scrollY: true,
      tab: true,
      click: true
    })
    console.log(screen.availHeight)
    console.log(document.body.scrollHeight)
    this.$refs.wraper.style.height = (window.screen.availHeight / 50 - 1.68) + 'rem'
  }
}
</script>
<!-- 样式代码 -->
<style lang="stylus" scoped type="text/stylus">
.recommend
  overflow: hidden
  background: rgb(245, 245, 245)
</style>
