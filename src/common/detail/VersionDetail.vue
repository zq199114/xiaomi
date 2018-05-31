<!-- 展示模板 -->
<template>
<div class="version">
  <div class="version_content">
    <div class="close" @click="backDetail">X</div>
    <div class="title">
      <img class="title_img" src="https://i8.mifile.cn/a1/pms_1521165496.26763454!720x7200.jpg" alt="">
      <div class="title_list">
        <div class="price">{{version_price}}</div>
        <div class="name">{{varsion_title}} {{varsion_color}}</div>
      </div>
    </div>
    <!--同一个页面千万不要重复类名-->
    <div class="version_select">
      <div class="version_title">版本</div>
      <div class="version_item">
        <div class="item_list"
            :class="{'active': item.id === varsion_id}"
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
        <div class="reduce">-</div>
        <div class="num_show">1</div>
        <div class="add">+</div>
      </div>
    </div>
    <div class="service">
      <div class="service_title"></div>
      <div class="service_item">
        <div class="service_list"></div>
        <div class="service_select"></div>
      </div>
    </div>
  </div>
  <div class="add_cart">加入购物车</div>
</div>
</template>

<script>
export default {
  name: 'VersionDetail',
  props: {
    version: Object,
    init: Object
  },
  data () {
    return {
      version_price: '0',
      varsion_title: '',
      varsion_color: '',
      varsion_id: '',
      color_id: ''
    }
  },
  methods: {
    changeItem (item = this.init.ver) {
      this.version_price = item.price
      this.varsion_title = item.name
      this.varsion_id = item.id
    },
    changeColor (item = this.init.col) {
      this.varsion_color = item.name
      this.color_id = item.id
    },
    backDetail () {
      this.$emit('backDet')
    }
  },
  watch: { // 用watch见识一个props传来的值的时候可以不用加this
    init () {
      this.changeItem()
      this.changeColor()
    }
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
      margin: .5rem 0
      .num_title
        display: inline-block
        color: rgba(0,0,0,.87)
        font-size: .28rem
        line-height: .24rem
        padding: .4rem 0 .2rem
      .num_change
        border: .01rem solid rgba(0,0,0,.15)
        box-sizing: border-box
        float: right
        display: flex
        width: 1.8rem
        height: .6rem
        font-size: .3rem
        text-align: center
        line-height: .6rem
        margin-top: .15rem
        .reduce
          flex: 1
          background: #FAFAFA
        .num_show
          flex: 1
        .add
          flex: 1
          background: #FAFAFA
</style>
