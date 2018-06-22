<template>
<div class="pay border-top">
  <div class="mode_payment" v-for="item in newData" :key="item.id">
    <div class="pay_ico">
      <img class="ico" :src="item.imgUrl" alt="">
      <div class="title">{{item.title}}</div>
      <div class="desc" v-if="item.desc">{{item.desc}}</div>
    </div>
    <div class="check">
      <!--下面的getId提交的时候需要先写着-->
      <!--通过踩坑括号里带参数的值要写在不带参数的后面，这样参数才能被传入-->
      <checked ref="check" @select="trueFalse" @getItem="getId(item.id)"></checked>
    </div>
    <div v-if="item.installment" class="detail">
      <installment-detail :showDetail="isSelect" :price="inprice" @showInsta="showInsta" @change="change"></installment-detail>
      <div class="install_desc" v-if="id === parseInt(item.id)">
        <p class="fn">还款方式</p><p class="qishu">{{(inprice/(qishu*3)).toFixed(2)}} x {{qishu}}期 <i class="iconfont arrow">&#xe62d;</i></p>
      </div>
    </div>
  </div>
  <div class="bottom" @click="toggle">使用其他付款方式</div>
</div>
</template>

<script>
import checked from 'common/commonComponents/Check'
import InstallmentDetail from 'common/detail/InstallmentDetail'
import { setStore, getStore } from '@/config/mUtils.js'

export default {
  name: 'OrderPay',
  props: {
    mode_data: Array,
    cartListItem: Object
  },
  data () {
    return {
      id: 1,
      isSelect: null, // 用来判断是否显示分期详情页
      inprice: 0,
      qishu: 3,
      // inFunNum: 1,
      newData: {},
      checkFun: {}
    }
  },
  components: {
    checked,
    InstallmentDetail
  },
  methods: {
    toggle () {
      this.newData = this.newData !== this.mode_data ? this.mode_data : this.mode_data.slice(0, 3)
    },
    change () {
      this.isSelect = false
    },
    getId (id) { // 此处bug多多日后在搞
      // console.log(this.$refs)
      let inid = parseInt(id)
      if (this.id === inid) {
        // 这里不能调用这个函数，因为在installmentDetail页面点击chack后会同时触发getItem也会激活getId方法让this.id === inid马上判断此时，isSelect永远是true
        // this.installmentChange(inid)
        // if (this.inFnNum < 3) {
        // this.installmentChange(inid)
        // this.inFnNum = 1
        // }
        // 下面的判断是避免在付款方式列表没有可以选中的选项时选中报错的选项
        if (!(this.id > 3 && this.newData.length === 3)) {
          this.$refs.check[this.id - 1].isSeld()
        }
        return
      }
      this.installmentChange(inid)
      // 这里的id就可以表示选了那个支付方式
      this.id = inid
      // 选中后清除其他选项
      this.filterFalse()
    },
    installmentChange (inid) {
      if (inid === 6 || inid === 7) {
        this.isSelect = true
        // this.inFnNum++
      }
    },
    // 以下为一个标记，用来进行判断是否要遍历触发chenk逐渐的方法
    trueFalse (sele) {
      // this.isSelect = sele
    },
    // 下面的方法纯粹是为了视图的变化
    filterFalse () {
      // if (this.isSelect) {
      this.$refs.check.forEach((res, index) => {
        // console.log(index + '  ' + this.id)
        if (index !== this.id - 1) {
          res.isSel()
        }
      })
      // }
    },
    showInsta (qishu) {
      this.qishu = qishu
    }
  },
  updated () { // 这个updated可以在折叠打开，付款方式选项时重新选中刚才选中的那个目标
    this.getId(this.id) // 只有在页面更新后ref才能被 使用
  },
  watch: {
    mode_data (newData) {
      setStore('newDataMode', newData)
      this.newData = getStore('newDataMode').slice(0, 3)
      // this.$nextTick(this.getId(this.id))
      // this.getId(this.id)
    },
    cartListItem (newData) {
      // 刷新后没newData里面是空的就返回
      if (!newData.tota) { return }
      // console.log(newData.tota.price)
      setStore('inprice', newData.tota.price)
      this.inprice = getStore('inprice')
    }
  },
  mounted () { // 这里是用来刷新之后重新取值用的
    this.inprice = getStore('inprice')
    this.newData = this.newData
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.pay
  margin-top: .2rem
  background: #fff
  padding: 0 .3rem
  big_border()
  .mode_payment
    display: flex
    border-bottom: .02rem solid #eee
    justify-content: space-between
    flex-wrap: wrap
    .pay_ico
      width: 90% // 设置这个百分百宽度是为了自适应
      height: $orderLineHeight
      line-height: $orderLineHeight
      .ico
        width: .5rem
        height: .5rem
      .title
        margin-left: .15rem
        display: inline-block
        font-size: .26rem
        color: #333
      .desc
        display: inline-block
        font-size: .24rem
        color: #999
        margin-left: .15rem
    .check
      display: inline-block
      // vertical-align: middle // 用了flex布局后vertical-align失效
      margin: auto 0 // // 父元素不能有行高，否则margin top和bottom失效
      // width: 10%
    .detail
      width: 100%
      .install_desc
        line-height: $orderLineHeight
        height: $orderLineHeight
        display: flex
        justify-content: space-between
        margin: 0 .4rem 0 .65rem
        font-size: .24rem
        color: #3c3c3c
        border-top: .02rem solid #eee
        .fn
          display: inline-block
        .qishu
          display: inline-block
          color: #999
        .arrow
          display: inline-block
          color: #999
  .bottom
    height: .896rem
    line-height: .896rem
    text-align: center
    font-size: .24rem
    color: #bdbdbd
</style>
