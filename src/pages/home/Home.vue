<!-- 展示模板 -->
<template>
  <div>
    <home-header></home-header>
    <home-scrollbar></home-scrollbar>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeScrollbar from './components/Scrollbar'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScrollbar
  }
}
</script>
<!-- 样式代码 -->
<style lang="stylus" scoped type="text/stylus">

</style>
