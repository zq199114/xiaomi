<!-- 展示模板 -->
<template>
<div>
  <div class="scroll" ref="scroll">
    <ul class="scroll-bar" ref="bar">
    <!--用下标也要在括号里写出来不能点出来-->
      <li class="scroll-item"
      ref="item" v-for="(item, key) in barItem"
      :key="key" @click="change(key)"
      :class="{'active':key==isActive}">
      {{item}}
      </li>
    </ul>
  </div>
  <swiper :options="swiperOptionb" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><home-recommend></home-recommend></swiper-slide>
    <swiper-slide>  <home-cellphone></home-cellphone></swiper-slide>
  </swiper>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import HomeRecommend from './page/Recommend'
import HomeCellphone from './page/Cellphone'

export default {
  name: 'HomeScrollbar',
  components: {
    HomeRecommend,
    HomeCellphone
  },
  data () {
    return {
      barItem: ['推荐', '手机', '智能', '电视', '电脑', '双摄', '全面屏', '生活周边', '盒子'],
      isActive: 0,
      swiperOptionb: {
        autoHeight: true, // 高度随内容变化
        touchRatio: 0.3, // 触摸变慢
        runCallbacksOnInit: false // 初始化时不触发slideChange
        // on: { // 由于这里嵌套在内存所以不能用this, 监听事件只能用在外层
        // slideChangeTransitionStart () {
        // alert(this.activeIndex)
        // }
        // }
      }
    }
  },
  computed: {
    swiper () { // 通过他能调用swiper插件的方法
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    change (num) {
      console.log(num)
      this.isActive = num
      this.swiper.slideTo(num)
    }
  },
  mounted () {
    let item = this.$refs.bar
    let width = 0
    for (let i = 0; i < item.children.length; i++) {
      width += item.children[i].offsetWidth
    }
    item.style.width = width + 'px'
    this.scroll = new BScroll(this.$refs.scroll, {
      scrollX: true,
      click: true,
      bounce: false
    })
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.on('slideChangeTransitionStart', () => this.change(this.swiper.activeIndex))
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
@import "~styles/variable.styl"
.scroll
  width: 100%
  height: .68rem
  background: $bgColor
  overflow: hidden
  box-sizing: content-box
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2)
  .scroll-bar
    height: 100%
    .scroll-item
      z-index: 99
      color: rgb(116, 116, 116)
      font-size: .26rem
      float: left
      padding: 0 .25rem
      line-height: .62rem
      &.active
        padding-bottom: .02rem
        box-sizing: border-box
        color: rgb(237, 91, 0)
        border-color: rgb(237, 91, 0)
        border-bottom: .04rem solid
</style>
