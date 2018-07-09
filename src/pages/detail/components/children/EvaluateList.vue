<template>
    <div class="list">
      <use-header :title="title"></use-header>
      <div class="wraper" ref="wraper">
        <div>
          <div class="banner"><span class="iconfont happy">&#xe62c;</span></div>
          <div class="filtrate">
            <i class="hot">最热门</i><i class="new">最新</i><i class="has_img">有图片</i>
          </div>
          <ul class="evaluate_list">
            <router-link tag="li" to="/Detail/EvaluateList/detail" class="list_item" v-for="item in 5" :key="item">
              <div class="user">
                <img class="head" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg" alt="">
                <div class="user_date">
                  <div class="username">阿斯顿发生</div>
                  <div class="data">2018-01-02</div>
                </div>
                <div class="grade">
                  <span class="iconfont happy">&#xe62c;</span>
                  <span class="grade_desc">超爱</span>
                </div>
              </div>
              <div class="evaluate_desc">
                <div class="desc">从小米4到米5再到米8，一直都是小米的忠实粉丝，嗯，小米8果然没让人失望，全面屏特别有感觉，手感也很好，棒棒哒！</div>
                <div class="desc_img">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                  <img class="img_item" src="https://i1.mifile.cn/a2/1530716353_2997409_s864_1152wh!240x2400.jpg" alt="">
                </div>
              </div>
              <div class="other_list">
                <div class="other">
                  <img class="little_header" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRUMyRjcwNEMyMDAxMUUzQkFFRkExMTA4OEE1OENCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MjYwOTVGNDMxM0MxMUU2QTBEMkEzQ0UzRDdFRTg0OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MjYwOTVGMzMxM0MxMUU2QTBEMkEzQ0UzRDdFRTg0OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdiMGM5NDhlLWY1Y2QtNDYzMC04YTM5LTg2ZjNlODM3MzBkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRUMyRjcwNEMyMDAxMUUzQkFFRkExMTA4OEE1OENCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgNhWhQAAAEBSURBVHja7No/CsIwFMfxV/EPOogoCF09grM4egJBBXcXd8+gs4uLix08g6MHEE+gm50cHBxKh6qjELFIikn4/sa2kH7yktcM9ZI4krEvziQIvWRQF7eSE+cCCRIkSJAgQYIECRIkSJAg2Zt82ge3Vz0DxpHcb3I6ymL0y4jDhnlVKpSk1pR27/XG67NzC69S1VZ8s/aSbpUZ7WFzcY703GB/6HjKpOg/b5mupNNX35rvZda1sErLycdZ8Fs2L7zDTnGxWLaZ9PUjy4FIa3vQd4qhSpAgQYIECRIkSJAgQYKUefgfDxIkSJAgQYIECRIkSJAgQYKULSkInQIF4UOAAQB6DygXvkzJdAAAAABJRU5ErkJggg==" alt="">
                  <i class="name">官方回复：</i><i class="name_desc">小主用光精准，构图巧妙，主题新颖，在思想上有深度，在立意上有价值，怀古之风实乃当下之潮流，阁下亦是我辈摄影入门爱好者之楷模。感谢您对小米的支持。</i>
                </div>
                <div class="other">
                  <img class="little_header" src="https://s1.mi-img.com/mfsv2/avatar/s008/p01SbByAGdVX/4MsGKMOBeZjkFi.jpg" alt="">
                  <i class="name">我哈哈哈：</i><i class="name_desc">不知到在讲什么什么鬼</i>
                </div>
              </div>
              <div class="all">查看全部评论 ></div>
            </router-link>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import BScroll from 'better-scroll'
export default {
  name: 'EvaluateList',
  components: {
    UseHeader
  },
  data () {
    return {
      title: '商品评论'
    }
  },
  mounted () {
    this.bscroll = new BScroll(this.$refs.wraper, {
      tab: true,
      click: true,
      scrollY: true,
      bounce: false
    })
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
  .wraper
    position: fixed
    top: $headerHeight
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .banner
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
        border-bottom: .01rem solid #e4e4e4
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
              font-size: .3rem
            .data
              color: rgba(0,0,0,.54)
              margin-top: .1rem
              font-size: .25rem
          .grade
            // overflow: hidden
            // white-space: nowrap
            // display: inline-block
            float: right
            margin-top: .3rem
            .happy
              font-size: .5rem
              color: #ffab00
              vertical-align: middle
            .grade_desc
              vertical-align: middle
              color: $mainColor
        .evaluate_desc
          .desc
            padding: .1rem 0
            font-size: .3rem
            line-height: .45rem
          .desc_img
            .img_item
              width: 1.8rem
              height: 1.8rem
              margin-bottom: .2rem
        .other_list
          background: #f5f5f5
          padding: .2rem
          .other
            margin-bottom: .1rem
            .little_header
              margin-right: .1rem
              width: .4rem
              height: .4rem
              border-radius: .25rem
            .name, .name_desc
              font-size: .25rem
        .all
          padding: 0 .3rem
          height: 1rem
          line-height: 1rem
          border-top: .01rem solid #e4e4e4
          text-align: center
          font-size: .35rem
          color: $mainColor
          background: #f5f5f5
</style>
