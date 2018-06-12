<template>
<div class="list">
  <ul>
    <router-link tag="li" to="/login" class="login border-bottom">登陆后享受更多优惠 <span>去登陆 <span class="iconfont">&#xe62d;</span></span></router-link>
    <li class="list_item border-bottom" v-for="item in cartList" :key="item.id">
      <div class="nod">
        <check @select="select" @getItem="getItem(item)"></check>
      </div>
      <img class="pic" :src="item.phone_img" alt="">
      <div class="info">
        <div class="desc">{{item.phone_name}} {{item.phone_model}} {{item.phone_color}}</div>
        <div class="price">售价: {{item.phone_price}}元</div>
        <div class="num">
          <div class="counta">
            <count :num="item.phone_num" @stateItem="stateItem(item)" @numState="numState"></count>
          </div>
          <div @click="stateRemove(item.id)" class="iconfont trash">&#xe61e;</div>
        </div>
      </div>
    </li>
    <li class="empty" v-show="!cartList.length">
      <div class="reminders">
        <div class="content"><i class="iconfont cart_n">&#xe6fe;</i>购物车还是空的</div>
        <router-link tag="div" to="/" class="stroll">去逛逛</router-link>
      </div>
    </li>
  </ul>
  <!--{{cartList}}-->
</div>
</template>

<script>
import Check from 'common/commonComponents/Check'
import Count from 'common/commonComponents/Count'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CartList',
  components: {
    Check,
    Count
  },
  data () {
    return {
      checked: false, // 是否选中要购买的商品
      countNum: 0
    }
  },
  methods: {
    // 原本是这样写的['ITEM_NUM'], ['REDUCE_CART']下面的才是正确的
    ...mapMutations(['ITEM_NUM', 'REDUCE_CART']),
    stateRemove (id) {
      console.log(id)
      this.REDUCE_CART(id)
    },
    // 获取当前item
    stateItem (item) {
      // item.phone_num = this.countNum // 这样直接修改state不会引发视图更新
      this.ITEM_NUM({id: item.id, num: this.countNum})
    },
    getItem (item) {
      item.selectitem = this.checked
    },
    select (istrue) {
      this.checked = istrue
    },
    // 获取传来的数量
    numState (num) {
      this.countNum = num
    }
  },
  computed: {
    ...mapState(['cartList'])
  },
  mounted () {
    this.cartList.map(item => {
      this.$set(item, 'selectitem', false)
      // 要像上面这样写双向绑定才能起效，下面的写法是有问题的，双向绑定不起效的！
      // this.productList.map(function (item) {item.select=true})
    })
    // console.log(this.cartList)
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
@import "~styles/variable.styl"
.list
  margin-top: $headerHeight
  margin-bottom: $headerHeight
  .login
    color: rgba(0,0,0,.87)
    height: $headerHeight
    padding: 0 .3rem
    font-size: .32rem
    line-height: $headerHeight
    span
      font-size: .24rem
      color: rgba(0,0,0,.54)
      float: right
  .list_item
      padding: .24rem .1rem
      /*height: 1.8rem*/
      display: flex // flex布局
      // line-height: 1.8rem
      .nod
        display: inline-block
        margin: auto .1rem auto 0
        // vertical-align: middle //用了flex后失效
        // line-height: 1.8rem
      .pic
        width: 1.8rem
        height: 1.8rem
        border: .02rem solid #eeeeee
        box-sizing: border-box
        display: inline-block
        // vertical-align: middle
        // margin: auto 0
      .info
        display: inline-block
        flex: auto // 给不需要宽度的子元素设置 flexauto
        margin-left: .2rem
        .desc
          display: inline-block
          font-size: .28rem;
          line-height: .32rem;
          color: #666;
          padding-right: .4rem
          // width 用了flex布局后子元素的长度也随父元素变动,不用设置宽度自动换行
        .price
          margin: .155rem 0 .155rem // 用了flex后他的margin就不会影响到父级的整个块元素
          font-size: .24rem
          color: #999
        .num
          display: inline-block
          text-align: left
          width: 100%
          .counta
            display: inline-block
          .trash
            display: inline-block
            font-size: .6rem
            vertical-align: bottom
            color: #a3a3a3
          float: right
  .empty
    background: #ebebeb
    line-height: $headerHeight
    color: #ababab
    text-align: center
    .reminders
      .content, .stroll
        font-size: .24rem
        display: inline-block
        .cart_n
          vertical-align: bottom
          font-size: .6rem
          margin-right: .2rem
      .stroll
        border: .01rem solid #c8c8c8
        height: .5rem
        color: #000
        line-height: .5rem
        padding: 0 .15rem
</style>
