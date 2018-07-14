<template>
  <div class="address_lv">
    <div class="city_select">
      <div class="title">选择地址<div @click="back" class="close">X</div>
      </div>
      <div class="select_lv_item"><div ref="title" class="select_lv" @click="changeTitle(index)" v-for="(item, index) in itemTitle" :key="index">{{item}}</div></div>
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
      itemTitle: [],
      itemSave: []
    }
  },
  methods: {
    changeTitle (index) {
      let title = this.itemTitle
      if (index === 0) {
        this.titleChange()
        if (title.length > 1) { // 如果点击第0个导航条选择时后面还有选项就进下面这个里面
          title.splice(index, title.length, '请选择')
        } else {
          title.splice(index, 2, '请选择')
        }
        return
      }
      // console.log(index, this.itemSave[index - 1], this.itemTitle)
      this.itemTitle.splice(index, title.length - index)
      this.selectcity(this.itemSave[index - 1])
    },
    back () {
      this.$emit('close')
    },
    selectcity (item) { // 循环的列表点击功能
      this.itemSave.push(item)
      this.city = item.label // 点击到的值赋给city作为选择导航的值
      this.itemSelect = item.children // 作为下一个要循环的列表，重新赋值itemSelect
      this.itemTitle.pop() // 去掉导航选择的最后一项 "选择"两个字
      this.itemTitle.push(this.city) // 把心的值塞进去
      this.itemTitle.push('请选择') // 最后再加上一个请选择
      if (!this.itemSelect) { // 点到最后item为空就会执行下面的路由回到选择页面
        this.itemTitle.pop()
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
      this.itemSelect = this.optionly // 传递过来的城市数据 赋值给该组件，初始化
      if (!this.itemTitle.length) { // 选择导航条 初始化
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
    this.titleChange() // 执行一下初始化
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
