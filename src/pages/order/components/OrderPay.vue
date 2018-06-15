<template>
<div class="pay border-top">
  <div class="mode_payment" v-for="item in mode_data" :key="item.id">
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
    <div v-if="item.installment">
      <installment-detail></installment-detail>
    </div>
  </div>
</div>
</template>

<script>
import checked from 'common/commonComponents/Check'
import InstallmentDetail from 'common/detail/InstallmentDetail'
export default {
  name: 'OrderPay',
  props: {
    mode_data: Array
  },
  data () {
    return {
      id: 1,
      isSelect: null
    }
  },
  components: {
    checked,
    InstallmentDetail
  },
  methods: {
    getId (id) {
      // console.log(this.$refs)
      if (this.id === parseInt(id)) {
        this.$refs.check[this.id - 1].isSeld()
        return
      }
      // 这里的id就可以表示选了那个支付方式
      this.id = parseInt(id)
      this.filterFalse()
    },
    trueFalse (sele) {
      this.isSelect = sele
    },
    // 下面的方法纯粹是为了视图的变化
    filterFalse () {
      if (this.isSelect) {
        this.$refs.check.forEach((res, index) => {
          // console.log(index + '  ' + this.id)
          if (index !== this.id - 1) {
            res.isSel()
          }
        })
      }
    }
  },
  updated () {
    this.$nextTick(this.getId(this.id)) // 这里要在updated钩子里面执行，mounted里不行
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.pay
  margin-top: .2rem
  background: #fff
  padding: 0 .3rem
  .mode_payment
    display: flex
    border-bottom: .02rem solid #eee
    justify-content: space-between
    .pay_ico
      height: .896rem
      line-height: .896rem
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
</style>
