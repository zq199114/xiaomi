<template>
<up-down>
<div class="bar" v-show="showBar">
    <router-link @click.native="changeSlid(10)" exact class="home icon" active-class="active" tag="div" :to="changeHome"><span class="iconfont">&#xe655;</span><i>首页</i></router-link>
    <router-link @click.native="changeSlid(20)" exact class="catalogue icon" active-class="active" tag="div" to="/Home/Category"><span class="iconfont">&#xe682;</span><i>分类</i></router-link>
    <router-link @click.native="changeSlid(30)" exact class="cart icon" active-class="active" tag="div" to="/Home/Cart"><span class="iconfont">&#xe600;</span><i>购物车</i></router-link>
    <router-link @click.native="changeSlid(40)" class="mine icon" active-class="active" :to="to" tag="div"><span class="iconfont">&#xe67b;</span><i>我的</i></router-link>
</div>
</up-down>
</template>

<script>
import { mapState } from 'vuex'
import UpDown from 'common/animation/Updown'
export default {
  name: 'HomeBottombar',
  props: {
    botHome: String
  },
  data () {
    return {
      to: '/Home/User',
      home: '/Home/recommend',
      showBar: 1
    }
  },
  components: {
    UpDown
  },
  methods: {
    change (path) {
      if (path === '/Order/list/1' || path === '/Order/list/2' || path === '/Order/list/3') {
        this.to = path
      }
    },
    changeSlid (n) {
      this.$emit('slidDir', n)
    },
    showBarFn () {
      if (this.$route.name === 'Cart') {
        this.showBar = this.cartList.length === 0 ? 1 : 0
      } else if (this.$route.name === 'set') {
        this.showBar = 0
      } else {
        this.showBar = 1
      }
    }
  },
  watch: {
    $route () {
      // console.log(this.$route.name)
      this.showBarFn()
    },
    cartList () {
      if (this.cartList.length === 0) {
        this.showBar = 1
      }
    }
  },
  mounted () {
    // console.log(this.$route.name)
    this.showBarFn()
    let path = this.$route.fullPath
    this.change(path)
  },
  // 在这里组件内路由守卫都不起效果
  computed: {
    ...mapState(['cartList']),
    changeHome () {
      return this.botHome || this.home
    }
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
@import '~styles/variable.styl'
.bar
  background: #fff
  position: fixed
  bottom: 0
  left: 0
  // z-index: 99
  height: 1.04rem
  width: 100%
  font-size: .22rem
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
  .home, .catalogue, .cart, .mine
    color: #999
  .active
    color: $mainColor
  .icon
    padding: .2rem 0
    text-align: center
    // display: inline-block
    width: 25%
    height: 100%
    margin: 0
    float: left
    .iconfont
      font-size: .4rem
    i
      display: block
      margin-top: .1rem
</style>
