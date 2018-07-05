<!-- 展示模板 -->
<template>
<div class="version" ref="bgchange">
  <!--@touchstart.prevent="" 本来在上面的ref后面添加左边的事件但是这导致了加入购物车点击不了，关闭按钮也点击不了-->
<updown>
  <div class="updowm" v-show="showSel">
  <div class="version_content">
    <div class="close" @click="backDetail">X</div>
    <div class="title">
      <img class="title_img" :src="version_img" alt="">
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
            <div class="service_list" :class="{'ser_active': service}" @click="addService">意外保障服务 69元</div>
            <div class="service_select">
              <span class="sel" :class="{'sel_active': service}" @click="addService">✔</span>
              <span class="service_tips">我已阅读 <i>服务条款 | 常见问题</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="add_cart" @click="addCart">加入购物车</div>
  </div>
</updown>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import Updown from 'common/animation/Updown'
import { mapMutations } from 'vuex'

export default {
  name: 'VersionDetail',
  components: {
    Updown
  },
  props: {
    version: Object,
    init: Object,
    tranName: String // 这里传过来的值,是第二次传递的,直接拿来用就可以了
  },
  data () {
    return {
      version_price: '0',
      version_title: '',
      version_color: '',
      version_img: null,
      version_id: '',
      color_id: '',
      service: false,
      showSel: false,
      num: 1
    }
  },
  methods: {
    ...mapMutations(['ADD_CART']),
    addCart () {
      this.$emit('addsucceed')
      this.showSel = false
      this.backDetail()
      this.ADD_CART({phoneName: this.tranName, phoneModel: this.version_title, phonePrice: this.version_price, phoneColor: this.version_color, phoneImg: this.version_img, phoneNum: this.num})
    },
    addService () {
      this.service = !this.service
    },
    reduce () {
      if (this.num === 1) {
        this.num = 1
        return
      }
      this.num--
      this.transmit()
    },
    add () {
      this.num++
      this.transmit()
    },
    changeItem (item = this.init.ver) {
      this.version_price = item.price
      this.version_title = item.name
      this.version_id = item.id
      this.transmit()
    },
    changeColor (item = this.init.col) {
      this.version_color = item.name
      this.color_id = item.id
      this.version_img = item.imgUrl
      this.transmit()
    },
    backDetail () {
      this.showSel = false // 为了动画设置的
      this.$refs.bgchange.style.background = 'none'
      setTimeout(() => this.$emit('backDet'), 400)
    },
    transmit () {
      if (this.showSel) {
        let transmit = {
          price: this.version_price,
          name: this.version_title,
          color: this.version_color,
          num: this.num
        }
        this.$emit('transmit', transmit)
      }
    }
  },
  computed: {
    trName () {
      return this.init.nam
    }
  },
  watch: { // 用watch见识一个props传来的值的时候可以不用加this
    // init () {
    // this.changeItem()
    // this.changeColor()
    // }
  },
  mounted () {
    this.$nextTick(() => {
      this.showSel = true
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
  .updowm
    positison:absolute
    height:100%
    width:100%
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
            .ser_active
              border-color: #ff6700
              color: #ff6700
            .service_select
              line-height: .5rem
              margin-top: .2rem
              box-sizing: content-box
              .sel
                display: inline-block
                height: .4rem
                width: .4rem
                line-height: .4rem
                text-align: center
                border-radius: .2rem
                border: .01rem solid rgba(0,0,0,.15)
                font-size: .2rem
                font-weight: 500
                vertical-align: top
                background: #fff
                color: #fff
              .sel_active
                border: .01rem solid #FF6700
                background: #FF7600
                color: #fff
              .service_tips
                vertical-align: top
                display: inline-block
                line-height: .4rem
                i
                  line-height: .4rem
                  color: #ff6700
    .add_cart
      position: fixed
      bottom: 0
      left: 0
      right: 0
      height: 1rem
      background: #ff6700
      color: #fff
      line-height: 1rem
      text-align: center
      font-size: .28rem
</style>
