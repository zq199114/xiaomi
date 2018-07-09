<template>
    <div class="order_list">
      <use-header :title="title"></use-header>
      <div class="select">
        <span @click="change(1)" :class="{'active': select===1}" class="all">全部</span>
        <span @click="change(2)" :class="{'active': select===2}" class="obligation">待付款</span>
        <span @click="change(3)" :class="{'active': select===3}" class="wait">待收货</span>
      </div>
      <div class="wraper" ref="wraper">
        <ul class="list">
          <li class="hint" v-show="!list.length">
            <div class="cicle">!</div>
            <div class="desc">您还没有 {{titleDesc}} 订单</div>
          </li>
          <li class="mar"></li>
          <li class="list_item" v-for="(item, index) in list" :key="index">
            <div class="order_data">
              <p class="data_left">
                <span class="data">订单日期: {{item.data}}</span>
                <span class="order_number">订单编号：{{item.orderNumber}}</span>
              </p>
              <div class="data_right">
                <span class="take">{{item.state}}</span>
              </div>
            </div>
            <div class="prodect" v-for="(ite, index) in item.proList" :key="index">
              <img class="pro_img" :src="ite.imgUrl" alt="">
              <div class="pro_title">{{ite.title}}</div>
            </div>
            <div class="total">
              <span class="num">共{{item.totaNum}}件商品</span>
              <span class="price">总金额: <i class="total_price"> {{item.totaPrice}}元</i></span>
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
      title: '我的订单',
      select: 1,
      list: [],
      proplist: [{
        data: '2017/12/19 11:01',
        orderNumber: '5171219879973558',
        state: '已收货',
        proList: [{
          title: '小米6 尊享全网通版 6GB内存 陶瓷黑色 128GB',
          imgUrl: 'https://i1.mifile.cn/a1/pms_1492571595.7934912!180x1800.jpg'
        }],
        totaNum: '1',
        totaPrice: '2999'
      }],
      titleDesc: '',
      jlushfou: 1
    }
  },
  methods: {
    change (item) {
      if (item === this.jlushfou) { return }
      switch (item) {
        case 1:
          this.title = '我的订单'
          this.select = item
          this.list = this.proplist
          break
        case 2:
          this.title = '待支付订单'
          this.select = item
          this.list = ''
          this.titleDesc = '待付款'
          break
        default:
          this.title = '待收货订单'
          this.select = item
          this.list = ''
          this.titleDesc = '待收货'
      }
      this.jlushfou = item
    }
  },
  mounted () {
    this.bscroll = new BScroll(this.$refs.wraper, {
      tab: true,
      click: true,
      scrollY: true,
      bounce: false
    })
    this.list = this.proplist
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
    .active
      color: $mainColor
      border-bottom: 0.02rem solid $mainColor
  .wraper
    position: fixed
    top: $headerHeight + .7rem
    bottom: $homeBottom
    left: 0
    right: 0
    overflow: hidden
    .list
      .hint
        background: #fff
        padding: 1rem 0 0
        border-top: .02rem solid #ebebeb
        .cicle
          height: 2.5rem
          width: 2.5rem
          border: .02rem solid #ebebeb
          border-radius: 1.5rem
          line-height: 2.5rem
          font-size: 1.5rem
          text-align: center
          color: #ebebeb
          margin: 0 auto
        .desc
          line-height: 1rem
          height: 1rem
          color: #999
          font-size: .3rem
          text-align: center
      .mar
        height: $topMargin
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
          border-top: .02rem solid #ececec
          padding-top: .2rem
          text-align: right
          color: rgba(60,60,60,.87)
          font-size: .26rem
          .price
            margin-left: .1rem
            .total_price
              font-size: .35rem
</style>
