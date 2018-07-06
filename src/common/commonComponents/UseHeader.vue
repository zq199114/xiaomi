<template>
<div class="cartTopbar">
  <div class="back" @click="rollback"><div class="iconfont ico">&#xe624;</div></div>
  <div class="title" v-if="this.title">{{this.title}}</div>
  <!--<input v-if="!this.title" class="inpt" type="text" placeholder="搜索商品名称">-->
  <vue-fuse placeholder="搜索商品名称"
            :keys="keys"
            :list="optionly"
            event-name="searchPro"
            inputChangeEventName="nameinp"
            :default-all="togo"
            :search="searcontent"
            class="inpt"
            v-if="!this.title"
  ></vue-fuse>
  <div class="search"><div v-if="isShow" class="iconfont ico">&#xe603;</div></div>
</div>
</template>

<script>
export default {
  name: 'CartHeader',
  props: {
    isShow: Boolean, // 想要显示就传值进来
    title: {
      type: String,
      default: null
    },
    back: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      changeAddress: null,
      keys: ['phone_name'],
      optionly: [], // 请求来的值
      togo: false,
      // searchRes: [], // 搜索结果   这里因为是要传到父组件这个就不需要了
      searcontent: '' // search搜索内容
    }
  },
  methods: {
    rollback () {
      this.back ? this.$router.push(this.back) : this.$router.go(-1)
    }
  },
  mounted () {
    if (!this.title) {
      this.$axios.post('/news/index').then(res => {
        // console.log(res)
        this.optionly = res.data
      })
    }
  },
  created () {
    // if (this.title) {
    this.$on('searchPro', res => {
      // console.log(res)
      // this.searchRes = res
      this.$emit('reres', res)
    })
    // }
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
@import  '~styles/variable.styl'
.cartTopbar
  position: fixed
  z-index: 99
  top: 0
  right: 0
  left: 0
  height: $headerHeight
  background: $bgColor
  display: flex
  justify-content: space-between
  line-height: $headerHeight
  font-size: .3rem
  color: #666
  .back, .search
    width: .88rem
    text-align: center
    .ico
      font-size: .35rem
      color: #666
  .inpt
    padding-left: .2rem
    width: 100%
    margin: .17rem .1rem
    font-family: $bodyFamily
    font-size: .35rem
  &::placeholder
    color: red
</style>
