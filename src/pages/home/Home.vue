<!-- 展示模板 -->
<template>
  <div>
    <home-header></home-header>
    <home-scrollbar></home-scrollbar>
    <transition :name="side">
      <router-view></router-view>
    </transition>
      <!--<router-view></router-view>-->
    <home-bottombar :botHome="botHome" @slidDir="slidDir"></home-bottombar>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeScrollbar from './components/Scrollbar'
import HomeBottombar from 'common/commonComponents/HomeBottombar'
// import EnterLeave from 'common/animation/EnterLeave'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScrollbar,
    HomeBottombar
    // EnterLeave
  },
  data () {
    return {
      side: 'left',
      botHome: '',
      dir: 10
    }
  },
  methods: {
    // 改动滑动方向
    slidDir (font) {
      if (font > this.dir) {
        this.side = 'right'
      } else {
        this.side = 'left'
      }
      this.dir = font
    }
  },
  beforeRouteUpdate (to, from, next) {
    // console.log(to)
    // console.log(from)
    if (to.name === 'cellphone' || to.name === 'recommend') {
      this.botHome = to.path
    }
    if (to.params.plan > from.params.plan) {
      this.side = 'right'
    } else {
      this.side = 'left'
    }
    next()
  }
}
</script>
<!-- 样式代码 -->
<style lang="stylus" scoped type="text/stylus">
  .right-enter, .left-leave-to
    transform: translateX(100%)
  .right-leave-to, .left-enter
    transform: translateX(-100%)
  .right-enter-active, .right-leave-active, .left-enter-active, .left-leave-active
    transition: all .3s
</style>
