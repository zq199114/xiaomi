<template>
  <div class="address_lv">
    <div class="city_select">
      <div class="title">选择地址<div @click="back" class="close">X</div>
      </div>
      <div class="select_lv_item"><div class="select_lv">请选择</div></div>
      <ul class="city border-top">
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
        <li class="city_list">上海</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'address_lv',
  methods: {
    back () {
      this.$emit('close')
    }
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
        color: $mainColor
        border-bottom: .06rem solid $mainColor
    .city
      padding-left: .15rem
      margin-top:.06rem
      .city_list
        padding: .1rem .13rem
        font-size: .25rem
</style>
