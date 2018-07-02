<!-- 展示模板 -->
<template>
  <div>
    <home-header></home-header>
    <home-scrollbar></home-scrollbar>
    <router-view></router-view>
    <home-bottombar></home-bottombar>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeScrollbar from './components/Scrollbar'
import HomeBottombar from 'common/commonComponents/HomeBottombar'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScrollbar,
    HomeBottombar
  },
  mounted () {
    this.$axios.post('/news/index').then(res => {
      console.log(res)
    })
  }
}
</script>
<!-- 样式代码 -->
<style lang="stylus" scoped type="text/stylus">

</style>
