<template>
    <div class="list">
      <use-header :title="title"></use-header>
      <div class="banner"><span class="iconfont happy">&#xe62c;</span></div>
      <div class="filtrate">
        <i class="hot">最热门</i><i class="new">最新</i><i class="has_img">有图片</i>
      </div>
      <ul class="evaluate_list">
        <li class="list_item">
          <div class="user">
            <img class="head" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg" alt="">
            <div class="user_date">
              <div class="username">阿斯顿发生</div>
              <div class="data">2018-01-02</div>
            </div>
            <div class="grade">
              <span class="iconfont happy">&#xe62c;</span>
              <div class="grade_desc">超爱</div>
            </div>
          </div>
        </li>
      </ul>
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
    height: 1rem
    background: #fafafa
    padding: 0 .3rem
    display: flex
    align-items center
    .hot
      // display: inline-block
      color: #f27d0f
      border-right: .03rem solid #afafaf
      padding-right: .3rem
      vertical-align: middle
    .new
      color: #afafaf
      margin-left: .3rem
      flex: 1
    .has_img
      display: inline-block
      position: relative
      color: #afafaf
      vertical-align: top
      // float: right
      &::before
        content: ''
        position: absolute
        display: inline-block
        left: -.55rem
        top: -.05rem
        width: .3rem
        height: .3rem
        background: #eeeeee
        border: .02rem solid #e0e0e0
        border-radius: .05rem
  .evaluate_list
    .list_item
      padding: .3rem
      .user
        .head
          width: 1rem
          height: 1rem
          border-radius: .5rem
        .user_date
          overflow: hidden
          display: inline-block
          vertical-align: middle
          margin-left: .2rem
          .username
            font-size: .25rem
          .data
            color: rgba(0,0,0,.54)
            margin-top: .1rem
            font-size: .25rem
        .grade
          display: inline-block
          .happy
            font-size: .5rem
            color: #ffab00
          .grade_desc
            display: inline-block
</style>
