<template>
  <div class="hot_search">
    <div class="title">热门搜索</div>
    <div class="banner"><img src="https://i8.mifile.cn/b2c-mimall-media/38af6033fa4409e3844029d76b60cdc6.jpg?bg=FFFFFF" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'HotSearch'
}
</script>

<style type="text/stylus" lang="stylus" scoped>
@import "~styles/variable.styl"
.hot_search
  margin-top: $headerHeight
  .title
    padding: 0 .3rem
    font-size: .3rem
    height: .9rem
    line-height: .9rem
  .banner
    width: 100%
    img
      width: 100%
</style>
