<template>
<div class="cartTopbar">
  <div class="back" @click="rollback"><div class="iconfont ico">&#xe624;</div></div>
  <div class="title">{{this.title}}</div>
  <div class="search"><div v-if="isShow" class="iconfont ico">&#xe603;</div></div>
</div>
</template>

<script>
export default {
  name: 'CartHeader',
  props: {
    isShow: Boolean, // 想要显示就传值进来
    title: String
  },
  methods: {
    rollback () {
      this.$router.go(-1)
    }
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
</style>
