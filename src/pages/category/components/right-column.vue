<template>
  <div class="right_column" ref="wraper">
    <div ref="all">
      <div class="big_list" v-for="item in list" :key="item.id" ref="list">
        <div class="title_img">
          <img style="width: 100%;" :src="item.rlist.titleImg" alt="">
        </div>
        <div class="title">
          {{item.rlist.title}}
        </div>
        <div class="list">
          <ul class="list_item">
            <li class="item" v-for="ite in item.rlist.listItem" :key="ite.id">
              <div class="item_img">
                <img style="width: 100%;" :src="ite.imgUrl" alt="">
              </div>
              <div class="name">{{ite.name}}</div></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'right-column',
  props: {
    list: Array,
    id: Number
  },
  data () {
    return {
      scrollY: 0, // 实时滚动的y轴大小，利用better-scroll的onScroll事件监听这个值
      listHeight: [], // 存放右边每一个li的高度
      Scrollviewpor: 0, // 滚动条视口高度,
      num: 0
    }
  },
  computed: {
  },
  methods: {
    // imageLoaded () {
    //   console.log(this.num++) // @load="imageLoaded"这是放在标签里的， 判断图片是否加载完成
    // },
    _calculateHeight () { // 获取右边的累加高度
      let foodList = this.$refs['list'] // 获取到所有的ref='foodList'的DOM元素
      this.Scrollviewpor = this.$refs.wraper.clientHeight
      let height = 0
      this.listHeight.push(height) // 第一个元素的高度是0 ,因为有这一步所以元素会比原来的的多一个
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        // console.log(item.children[0].clientHeight + '  ' + item.children[1].clientHeight + '  ' + item.children[2].clientHeight)
        height += item.clientHeight // 通过原生DOM中的js获取到li的高度，并且累加
        this.listHeight.push(height)
      }
    },
    // 利用vue中的计算属性computed实时计算，对listHeight遍历，返回当前的左边mune-wrapper的li
    // 对应的index，从而让其显示高亮的属性.current
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        // console.log(height1 + ' ' + (this.scrollY - 20) + ' ' + (this.scrollY) + ' ' + height2)
        // 当遍历到listHeight最后一个元素的时候，height2的值为undefined,如果是
        // 最后一个元素的话!height2为真，后面就不需要判断了
        // console.log((this.Scrollviewpor + this.scrollY) + '  ' + this.listHeight[this.listHeight.length - 1] + '  ' + (this.listHeight.length) + '  ' + i)
        if (this.scrollY + this.Scrollviewpor >= this.listHeight[this.listHeight.length - 1]) { // 判断是否到达底部，到达底部就直接返回最后一个索引值或id
          this.$emit('menuChange', this.listHeight.length - 2)
          // console.log(this.scrollY + this.Scrollviewpor >= this.listHeight[this.listHeight.length - 2])
          return
        }
        if (!height2 || (this.scrollY + 20 >= height1 && this.scrollY + 20 < height2)) {
          this.$emit('menuChange', i)
          return
        }
      }
      // 默认情况下是返回第一个元素
      // this.$emit('menuChange', 0)
    },
    getRef () {
      this.bscroll = new BScroll(this.$refs.wraper, {
        tab: true,
        click: true,
        probeType: 3, // 实时监听滚动位置的最佳属性
        bounce: false
      })
      // let _this = this
      // 监听右侧滚动区域，左边相应的menu高亮
      // 监听滚动事件scroll，实时改变this.scrollY的值，
      // pos是元素所处的位置，内部自动传的
      this.bscroll.on('scroll', (pos) => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y)) // .abs返回绝对值，.round四舍五入
          // this.currentIndex()
        }
      })
      // this.bscroll.refresh()
      // 销毁事件监听
      // this.$once('hook:beforeDestroy', function () {
      //   this.bscroll.destroy()
      // })
    }
  },
  watch: {
    id () {
      this.bscroll.scrollToElement(this.$refs.list[this.id], 300)
    },
    scrollY () {
      // console.log(this.scrollY)
      this.currentIndex()
    }
  },
  updated () {
    if (this.listHeight.length === 0) {
      this._calculateHeight()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getRef()
    })
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.right_column
  background: #fff
  position: fixed
  top: $headerHeight
  right: 0
  bottom: 1.04rem
  width: 80%
  overflow: hidden
  .big_list
    height: auto!important
    padding: .1rem .2rem .2rem
    .title_img
      overflow: hidden
      width: 100%
      padding-bottom: 40%
      height: 0
    .title
      font-size: .34rem
      text-align: center
      font-weight: 400
      color: #3c3c3c
      height: 1.28rem
      line-height: 1.28rem
      &:before, &:after
        content: ''
        display: inline-block
        width: .5rem
        height: .02rem
        background: #ebebeb
        vertical-align: middle
    .list
      padding: 0 .3rem
      .list_item
        display: flex
        flex-wrap: wrap
        overflow: hidden
        .item
          display: inline-block
          margin: .3rem .35rem 0 .35rem
          .item_img
            width: 1.1rem
            overflow: hidden
            height: 0
            padding-bottom: 100%
          .name
            text-align: center
            font-size: .24rem
            color: rgba(0,0,0,.54)
            line-height: .8rem
            height: .8rem
</style>
