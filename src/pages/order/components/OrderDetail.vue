<template>
<div class="detail">
  <div class="express" @click="showExpressDetail">
    <div class="express_fn">快递配送（免运费）</div>
    <div class="time">不限送货时间<span class="iconfont down">&#xe6ce;</span></div>
  </div>
  <div class="express_detail" v-show="showExpress">
    <div class="express_detal_title">配送方式</div>
    <div class="express_detal_price">快递配送（免运费）</div>
    <div class="express_detal_time">送货时间</div>
    <div class="express_detal_tiem_fn">
      <div class="fn fn_one active">不限送货时间</div>
      <div class="fn fn_two">工作日送货</div>
      <div class="fn fn_three">双休日、假日送货</div>
    </div>
  </div>
  <div class="electronic_invoice" @click="showInvoiceDetail">
    <div class="invoice">电子发票</div><div class="title">个人<span class="iconfont down">&#xe6ce;</span></div>
  </div>
  <div class="invoice_detail" v-show="showInvoice">
    <div class="invoice_type">发票类型</div>
    <div class="invoice_type_one active_invoice">电子发票</div>
    <div class="invoice_type_desc">电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。推荐使用电子发票，不怕丢失，更方便、环保。<br><i>选择纸质发票></i></div>
    <div class="invoice_select">选择发票抬头</div>
    <div class="select_wrap"><div class="person">个人</div><div class="unit">单位</div></div>
    <div class="re_phone">收票人手机</div>
    <div class="inpt_one"><input class="phone" type="text" placeholder="电子发票开具后短信告知你（选填）"></div>
    <div class="re_mail">收票人邮箱</div>
    <div class="inpt_two"><input class="mail" type="text" placeholder="用于接收电子发票（选填）"></div>
    <div class="notice">
      <p>发票须知:</p>
      <p>1.发票金额为实际支付金额，不包含优惠券、礼品卡等；</p>
      <p>2.纸质发票不与商品同时发出；</p>
      <p>3.纸质发票将于商品妥投完成7日后发出；</p>
      <p>4.纸质发票收到后请妥善保存，如退货需一同寄回。</p>
      <p>查看更多发票常见问题&gt;&gt;</p>
    </div>
  </div>
  <div class="discount_coupon">
    <div class="discount">优惠券</div><div class="dis_price">以优惠 <i>0元</i><span class="iconfont down">&#xe6ce;</span></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'OrderDetail',
  data () {
    return {
      showExpress: false,
      showInvoice: false
    }
  },
  methods: {
    showExpressDetail () {
      this.showExpress = !this.showExpress
    },
    showInvoiceDetail () {
      this.showInvoice = !this.showInvoice
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.detail
  background: #fff
  margin-top: .2rem
  .express, .electronic_invoice, .discount_coupon
    padding: 0 .3rem
    height: $orderLineHeight
    line-height: $orderLineHeight
    display: flex
    justify-content: space-between
    borderBottom(.02rem)
    .express_fn, .time, .invoice, .discount, .title, .dis_price
      display: inline-block
      font-size: .24rem
    .express_fn, .invoice, .discount
      color: #3c3c3c
      font-weight: bold
    .time, .title, .dis_price
      color: #bdbdbd
      .down
        font-size: .23rem
      i
        color: $mainColor
        margin-left: .1rem
        font-style: italic
  .express_detail, .invoice_detail
    padding: 0 .3rem .3rem
    background: #f4f4f4
    .express_detal_title, .express_detal_time, .fn, .invoice_type, .invoice_select, .re_phone, .re_mail
      height: $orderLineHeight
      line-height: $orderLineHeight
      font-size: .24rem
      color: #6a6a6a
    .express_detal_price
      padding: 0 .3rem .4rem
      font-size: .24rem
      color: #3c3c3c
      borderBottom(.02rem)
    .express_detal_tiem_fn
      .fn
        button_common()
      .active
        border-color: $mainColor
    .invoice_type_one, .person, .unit
      button_common()
      font-size: .24rem
    .active_invoice
      border-color: $mainColor
    .invoice_type_desc
      margin-top: .1rem
      padding-bottom: .2rem
      font-size: .2rem
      color: #bdbdbd
      borderBottom(.02rem)
      line-height: .25rem
      i
        line-height: .4rem
    .select_wrap
      borderBottom(.07rem)
      padding-bottom: .2rem
    .inpt_one, .inpt_two
      borderBottom(.02rem)
      padding-bottom: .2rem
      .phone, .mail
        width: 100%
        height: .6rem
        border: .02rem solid #e0e0e0
        font-size: .24rem
        padding-left: .3rem
        box-sizing: border-box
      .phone::placeholder, .mail::placeholder
        font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
        color: #6a6a6a
  .notice
    font-size: .2rem
    color: #bdbdbd
    line-height: .3rem
</style>
