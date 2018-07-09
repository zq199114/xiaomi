<template>
    <div class="order_list">
      <use-header :title="title"></use-header>
      <div class="select">
        <span class="all">全部</span>
        <span class="obligation">待付款</span>
        <span class="wait">待收货</span>
      </div>
      <div class="wraper" ref="wraper">
        <ul class="list">
          <li class="list_item" v-for="item in 5" :key="item">
            <div class="order_data">
              <p class="data_left">
                <span class="data">订单日期: 2017/12/19 11:01</span>
                <span class="order_number">订单编号：5171219879973558</span>
              </p>
              <div class="data_right">
                <span class="take">已收货</span>
              </div>
            </div>
            <div class="prodect" v-for="item in 2" :key="item">
              <img class="pro_img" src="https://i1.mifile.cn/a1/pms_1492571595.7934912!180x1800.jpg" alt="">
              <div class="pro_title">小米6 尊享全网通版 6GB内存 陶瓷黑色 128GB</div>
            </div>
            <div class="total">
              <span class="num">共1件商品</span>
              <span class="price">总金额: <i class="total_price">2999元</i></span>
            </div>
          </li>
        </ul>
      </div>
      <home-bottom></home-bottom>
    </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import HomeBottom from 'common/commonComponents/HomeBottombar'
import BScroll from 'better-scroll'
export default {
  name: 'OrderList',
  components: {
    UseHeader,
    HomeBottom
  },
  data () {
    return {
      title: '我的订单'
    }
  },
  mounted () {
    this.bscroll = new BScroll(this.$refs.wraper, {
      tab: true,
      click: true,
      scrollY: true
    })
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.order_list
  position: fixed
  left: 0
  right: 0
  top: $headerHeight
  bottom: $homeBottom
  background: #ebebeb
  z-index: 99
  .select
    padding: 0 1rem
    height: .7rem
    line-height: .7rem
    display: flex
    justify-content: space-between
    background: #fff
  .wraper
    position: fixed
    top: $headerHeight + .7rem
    bottom: $homeBottom
    left: 0
    right: 0
    overflow: hidden
    .list
      margin-top: $topMargin
      .list_item
        margin-bottom: .22rem
        background: #fff
        padding: .2rem .3rem
        .order_data
          color: #5c5c5c
          border-bottom: .02rem solid #ececec
          display: -webkit-box
          padding-bottom: .2rem
          .data_left
            font-size: .34rem
            -webkit-box-flex: 1
            width: 100%
            text-align: left
            .data
              display: block
            .order_number
              display: block
              font-size: .25rem
              color: #999
              margin-top: .15rem
          .data_right
            .take
              font-size: .34rem
              // float: right
              color: $mainColor
        .prodect
          border-bottom: .02rem solid #ececec
          padding: .2rem
          white-space: nowrap
          .pro_img
            width: 1rem
            height: 1rem
          .pro_title
            display: inline-block
            color: rgba(60,60,60,.87)
            font-size: .26rem
        .total
          margin-top: .2rem
          text-align: right
          color: rgba(60,60,60,.87)
          font-size: .26rem
          .price
            margin-left: .1rem
            .total_price
              font-size: .35rem
</style>
