<!-- 展示模板 -->
<template>
  <div>
    <home-header></home-header>
    <home-scrollbar></home-scrollbar>
    <enter-leave>
    <router-view></router-view>
    </enter-leave>
    <home-bottombar></home-bottombar>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeScrollbar from './components/Scrollbar'
import HomeBottombar from 'common/commonComponents/HomeBottombar'
import EnterLeave from 'common/animation/EnterLeave'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScrollbar,
    HomeBottombar,
    EnterLeave
  }
}
</script>
<!-- 样式代码 -->
<style lang="stylus" scoped type="text/stylus">

</style>
