<template>
    <div class="list">
      <use-header :title="title"></use-header>
      <div class="banner"><span class="iconfont happy">&#xe62c;</span></div>
      <div class="filtrate">
        <i class="hot">最热门</i><i class="line"></i><i class="new">最新</i><i class="is_img"></i><i class="has_img">有图片</i>
      </div>
    </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
export default {
  name: 'EvaluateList',
  components: {
    UseHeader
  },
  data () {
    return {
      title: '商品评论'
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.list
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #fff
  z-index: 99
  .banner
    margin-top: $headerHeight
    width: 100%
    height: 2rem
    line-height: 2rem
    background: #f27d0f
    text-align: center
    .happy
      display: inline-block
      color: #fff
      font-size: 1rem
  .filtrate
    /*width: 100%*/
    height: 1rem
    display: flex
    background: #f9f9f9
    padding: 0 .3rem
    align-items: center
    .hot
      color: #f27d0f
      margin-right: .3rem
    .new
      color: #afafaf
      margin-left: .3rem
    .line
      display: inline-block
      height: .35rem
      width: .02rem
      background: #afafaf
    .has_img
      // display: inline-block
      color: #afafaf
      // align-self: right
    .is_img
      align-self: right
      display: inline-block
      width: .3rem
      height: .3rem
      background: #ededed
      border: .01rem solid #e3e3e3
      border-radius: .05rem
      vertical-align: baseline
</style>
