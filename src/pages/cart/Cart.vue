<!-- 展示模板 -->
<template>
<div class="cart">
  <cart-header :isShow="isShow" :title="title" :back="detail"></cart-header>
  <cart-list></cart-list>
  <cart-bottom-bar v-if="this.cartList.length"></cart-bottom-bar>
  <home-cartbar v-if="!this.cartList.length"></home-cartbar>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CartHeader from '../../common/commonComponents/UseHeader'
import CartList from './components/List'
import CartBottomBar from './components/BottemBar'
import HomeCartbar from 'common/commonComponents/HomeBottombar'

export default {
  name: 'Cart',
  data () {
    return {
      total: {},
      isShow: true,
      title: '购物车',
      detail: ''
    }
  },
  components: {
    CartHeader,
    CartList,
    CartBottomBar,
    HomeCartbar
  },
  computed: {
    ...mapState(['cartList'])
  },
  methods: {
    totalItem (item) {
      console.log(item)
      this.total = item
    },
    ...mapMutations(['DEFAULT_ADDRESS'])
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from)
    if (from.name === 'Order') {
      next(vm => {
        // 通过 `vm` 访问组件实例
        vm.DEFAULT_ADDRESS() // 当要进入的页面时Order页面就初始化默认地址
        vm.detail = '/Detail'
      })
    } else {
      next()
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">

</style>
