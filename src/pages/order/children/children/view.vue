<template>
  <div>
    <use-header :title="title"></use-header>
    <div class="view" ref="wraper">
      <div>
        <div class="order_state">
          <div class="num_state">
            <p class="number">订单编号：123412341234</p>
            <p class="sate">订单状态：已收货</p>
          </div>
          <div class="after_sales">
            申请售后
          </div>
        </div>
        <div class="state_list">
          <div class="lists">
            <div class="list_item">
              <span class="state_item">下单</span>
              <span class="time">2017/12/19<br>11:01</span>
            </div>
            <div class="list_item">
              <span class="state_item">付款</span>
              <span class="time">2017/12/19<br>11:01</span>
            </div>
            <div class="list_item">
              <span class="state_item">配货</span>
              <span class="time">2017/12/19<br>11:01</span>
            </div>
            <div class="list_item">
              <span class="state_item">出库</span>
              <span class="time">2017/12/19<br>11:01</span>
            </div>
            <div class="list_item">
            <span class="state_item">交易成功</span>
            <span class="time">2017/12/19<br>11:01</span>
          </div>
          </div>
        </div>
        <div class="logistics">
          <div class="title">物流信息：如风达(上海)1234123441234</div>
          <ul class="log">
            <li class="log_list" v-for="(item, index) in linshi" :key="item">
              <div class="temp">
                <div class="log_state">运单送达成功</div>
                <div class="log_time">2017/12/20 21:37</div>
              </div>
              <p class="down" @click="changeList" v-if="index === 0"><span class="iconfont">&#xe6ce;</span></p>
            </li>
          </ul>
          <div class="pro_list" v-for="item in 3" :key="item">
            <img class="pro_img" src="https://i1.mifile.cn/a1/pms_1487839278.99934443!180x1800.jpg" alt="">
            <div class="pro_desc">
              <p class="pro">小米支架自拍杆 黑色</p>
              <p class="num">售价：79 x 1</p>
            </div>
            <div class="pro_price">79元</div>
          </div>
        </div>
        <div class="information">
          <p class="info order_date">下单日期：2017/12/19  11:01</p>
          <p class="info order_address">上海上海市闵行区大连路1111弄17号101室</p>
          <p class="info order_rename">收货人名：张三  137****3759</p>
          <p class="info order_retime">收货时间：不限送货时间</p>
          <p class="info order_invoice">发票类型：电子发票</p>
          <p class="info order_title">发票抬头：个人</p>
        </div>
        <div class="order_tota_price">
          <p class="otp ot_price">商品价格：79元</p>
          <p class="otp ot_discount">以优惠：79元</p>
          <p class="otp ot_del_price">配送费用：10元</p>
          <p class="otp ot_all_price">应付总额：10元</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import BScroll from 'better-scroll'
export default {
  name: 'listview',
  components: {
    UseHeader
  },
  data () {
    return {
      title: '订单详情',
      linshi: 1
    }
  },
  methods: {
    changeList () {
      this.linshi = this.linshi === 1 ? 5 : 1
    }
  },
  mounted () {
    this.bscroll = new BScroll(this.$refs.wraper, {
      click: true,
      tab: true,
      scrollY: true,
      bounce: false
    })
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.view
  position: fixed
  top: $headerHeight
  bottom: 0
  left: 0
  right: 0
  background: #f4f4f4
  z-index: 999
  overflow: hidden
  .order_state
    background: #ffffff
    padding: .38rem
    font-size: .28rem
    color: #3c3c3c
    display: -webkit-box
    .num_state
      -webkit-box-flex: 1
      text-align: left
      .number, .state
        line-height: .45rem
    .after_sales
      border: .02rem solid #ccc
      padding: .15rem
      display: inline-block
  .state_list
    background: #fff
    padding: .2rem .3rem
    margin-top: $topMargin
    padding-bottom: .15rem
    border-bottom: .02rem solid #f6f6f6
    .lists
      .list_item
        margin-top: .2rem
        display: inline-block
        .state_item
          background: #00cb66
          color: #fff
          padding: .1rem .38rem
          font-size: .28rem
        .time
          margin-top: .3rem
          display: block
          text-align: center
          font-size: .24rem
  .logistics
    padding: .3rem .38rem
    background: #ffffff
    .title
      padding-bottom: .2rem
    .log
      .log_list
        padding: .2rem 0 .2rem .3rem
        border-bottom: .01rem solid #f6f6f6
        display: flex
        .temp
          .log_time
            color: #999999
            margin-top: .1rem
        .down
          flex: 1
          text-align: right
          color: #999999
          align-self: center
    .pro_list
      display: flex
      align-items: center
      .pro_img
        width: 1.2rem
        height: 1.2rem
      .pro_desc
        flex: 1
        // .pro
        .num
          margin-top: .1rem
      // .pro_price
  .information, .order_tota_price
    padding: .2rem .38rem
    background: #fff
    margin-top: $topMargin
    color: #3c3c3c
    .info, .otp
      line-height: .5rem
</style>
