<!-- 展示模板 -->
<template>
<div class="version">
  <div class="version_content">
    <div class="close" @click="backDetail">X</div>
    <div class="title">
      <img class="title_img" src="https://i8.mifile.cn/a1/pms_1521165496.26763454!720x7200.jpg" alt="">
      <div class="title_list">
        <div class="price">{{version_price}}</div>
        <div class="name">{{version_title}} {{version_color}}</div>
      </div>
    </div>
    <!--同一个页面千万不要重复类名-->
    <div ref="wraper" class="wraper">
      <div>
        <div class="version_select">
          <div class="version_title">版本</div>
          <div class="version_item">
            <div class="item_list"
                :class="{'active': item.id === version_id}"
                v-for="item in version.version_item"
                :key="item.id"
                @click="changeItem(item)"
                >
                <span class="item_name">{{item.name}}</span>
                <span class="item_price">{{item.price}}元</span>
            </div>
          </div>
        </div>
        <div class="color">
          <div class="color_title">颜色</div>
          <div class="color_item">
            <div class="color_list"
                 v-for="item in version.color"
                 :key="item.id"
                 @click="changeColor(item)"
                 :class="{'c_active': item.id === color_id}">
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="num">
          <div class="num_title">购买数量</div>
          <div class="num_change">
            <div class="reduce" @click="reduce">-</div>
            <div class="num_show">{{num}}</div>
            <div class="add" @click="add">+</div>
          </div>
        </div>
        <div class="service">
          <div class="service_title">保障服务<span class="iconfont">&#xe7ba;</span></div>
          <div class="service_item">
            <div class="service_list">意外保障服务 69元</div>
            <div class="service_select">
              <span class="sel"></span>
              <span class="service_item">我已阅读 <i>服务条款 | 常见问题</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="add_cart">加入购物车</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'VersionDetail',
  props: {
    version: Object,
    init: Object
  },
  data () {
    return {
      version_price: '0',
      version_title: '',
      version_color: '',
      version_id: '',
      color_id: '',
      service: false,
      num: 1
    }
  },
  methods: {
    reduce () {
      if (this.num === 1) {
        this.num = 1
        return
      }
      this.num--
    },
    add () {
      this.num++
    },
    changeItem (item = this.init.ver) {
      this.version_price = item.price
      this.version_title = item.name
      this.version_id = item.id
    },
    changeColor (item = this.init.col) {
      this.version_color = item.name
      this.color_id = item.id
    },
    backDetail () {
      let transmit = {
        price: this.version_price,
        name: this.version_title,
        color: this.version_color,
        num: this.num
      }
      this.$emit('backDet', transmit)
    }
  },
  watch: { // 用watch见识一个props传来的值的时候可以不用加this
    init () {
      this.changeItem()
      this.changeColor()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.changeItem()
      this.changeColor()
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wraper, {
          scrollY: true,
          tab: true,
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.version
  z-index: 999
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(0, 0, 0, .5)
  .version_content
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: 75%
    background-color: #fff
    padding: .3rem
    .close
      position: absolute
      width: .4rem
      height: .4rem
      right: .2rem
      top: .3rem
      font-size .4rem
      color: #e4e4e4
    .title
      display: flex
      .title_img
        position: relative
        width: 2rem
        height: 2rem
        text-align: center
      .title_list
        flex: auto
        position: relative
        text-align: left
        display: inline-block
        margin: auto
        .price
          color: #ff6700
          font-size: .48rem
        .price:before
          content: '￥'
          font-size: .76em
        .name
          font-size: .28rem
          color: rgba(0,0,0,.87)
    .wraper
      height: 70%
      /*overflow-y: scroll*/
      overflow: hidden
      /*overflow-x: hidden*/
      /*overflow-scrolling: touch*/
      /*-webkit-overflow-scrolling: touch*/
      /*z-index: 9999*/
      .version_select
        .version_title
          color: rgba(0,0,0,.87)
          font-size: .28rem
          line-height: .24rem
          padding: .4rem 0 .2rem
        .version_item
          padding: .1rem .2rem
          .item_list
            font-size: .28rem
            border: 0.01rem solid rgba(0,0,0,.15)
            border-radius: .04rem
            padding: .25rem .3rem
            margin-bottom: .15rem
            .item_name
              text-align: left
            .item_price
              float: right
          .active
            border-color: #ff6700
            color: #ff6700
      .color
        .color_title
          color: rgba(0,0,0,.87)
          font-size: .28rem
          line-height: .24rem
          padding: .4rem 0 .2rem
        .color_item
          width: 100%
          padding: .3rem .2rem
          flex-wrap: wrap
          .color_list
            height: .72rem
            line-height: .72rem
            margin-right: .2rem
            margin-bottom: .2rem
            font-size: .28rem
            padding: 0 .35rem
            border: .01rem solid rgba(0,0,0,.15)
            display: inline-block
          .c_active
            border-color: #ff6700
            color: #ff6700
      .num
        margin: .2rem 0
        .num_title
          display: inline-block
          color: rgba(0,0,0,.87)
          font-size: .28rem
          line-height: .24rem
          padding: .2rem 0 .2rem
        .num_change
          border: .02rem solid rgba(0,0,0,.15)
          box-sizing: border-box
          float: right
          display: flex
          width: 1.8rem
          height: .6rem
          font-size: .3rem
          text-align: center
          line-height: .6rem
          margin-top: .15rem
          margin-right: .1rem
          .reduce
            flex: 1
            background: #FAFAFA
          .num_show
            flex: 1
          .add
            flex: 1
            background: #FAFAFA
      .service
        .service_title
          display: inline-block
          color: rgba(0,0,0,.87)
          font-size: .28rem
          line-height: .24rem
          padding: .2rem 0 .2rem
        .service_item
          padding: .2rem
          .service_list
            display: inline-block
            line-height: .72rem
            padding: 0 .2rem
            border: .01rem solid rgba(0,0,0,.15)
          .service_select
            .sel
              display: inline-block
              height: .4rem
              width: .4rem
              border-radius: .2rem
              border: .01rem solid rgba(0,0,0,.15)
              margin-top: .2rem
            .service_item
              line-height: .72rem
              i
                color: #ff6700
</style>
