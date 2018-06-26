<template>
  <div class="address_lv">
    <div class="city_select">
      <div class="title">选择地址<div @click="back" class="close">X</div>
      </div>
      <div class="select_lv_item"><div ref="title" class="select_lv" v-for="(item, index) in itemTitle" :key="index">{{item}}</div></div>
      <div ref="wraper" class="wraper">
      <ul class="city border-top">
        <li class="city_list" v-for="item in itemSelect" @click="selectcity(item)" :key="item.value">{{item.label}}</li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'address_lv',
  props: {
    optionly: Array
  },
  data () {
    return {
      city: '请选择',
      itemSelect: [],
      itemTitle: []
    }
  },
  methods: {
    back () {
      this.$emit('close')
    },
    selectcity (item) {
      this.city = item.label
      this.itemSelect = item.children
      this.itemTitle.pop()
      this.itemTitle.push(this.city)
      this.itemTitle.push('请选择')
      if (!this.itemSelect) { // 点到最后item为空就会执行下面的路由回到选择页面
        this.$router.push({path: '/Address', query: {area: this.itemTitle}})
      }
    },
    getRef () {
      let index = this.$refs.title.length
      this.$refs.title[index - 1].style.color = '#fd6701'
      this.$refs.title[index - 1].style.borderBottomColor = '#fd6701'
      for (let i = 0; i < index - 1; i++) {
        this.$refs.title[i].style.color = '#3c3c3c'
        this.$refs.title[i].style.borderBottomColor = '#ffffff'
      }
    },
    titleChange () {
      this.itemSelect = this.optionly
      if (!this.itemTitle.length) {
        this.itemTitle.push('请选择')
      }
    }
  },
  watch: {
    optionly () {
      this.titleChange()
    }
  },
  updated () {
    if (!this.$refs.title.length) { return }
    this.getRef()
  },
  mounted () {
    this.titleChange()
    this.scroll = new BScroll(this.$refs.wraper, {
      tab: true,
      click: true,
      scrollY: true
    })
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.address_lv
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(0, 0, 0, .7)
  .city_select
    position: fixed
    left: 0
    right: 0
    bottom: 0
    height: 45%
    background: #fff
    .title
      position: relative
      width: 100%
      height: 1rem
      line-height: 1rem
      text-align: center
      font-size: .3rem
      .close
        position: absolute
        top: 0
        right: .2rem
        color: rgba(0, 0, 0, .5)
        font-size: .4rem
        font-weight: 700
    .select_lv_item
      padding-left: .15rem
      height: .6rem
      line-height: .6rem
      .select_lv
        display: inline-block
        text-align: center
        // width: 1rem
        padding: 0 .13rem
        font-size: .26rem
        border-bottom: .06rem solid #fff
    .wraper
      position: absolute
      top: 1.6rem
      bottom: 0
      left: 0
      right: 0
      overflow: hidden
      .city
        padding-left: .15rem
        margin-top:.06rem
        .city_list
          padding: .1rem .13rem
          font-size: .25rem
</style>
