<template>
<div class="detail">
  <detail-swiper></detail-swiper>
  <detail-proinfo></detail-proinfo>
</div>
</template>

<script>
import DetailSwiper from './components/Swiper'
import DetailProinfo from './components/Proinfo'
export default {
  name: 'Detail',
  components: {
    DetailSwiper,
    DetailProinfo
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">

</style>
