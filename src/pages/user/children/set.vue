<template>
  <div class="set">
    <use-header :title="title"></use-header>
    <router-link  tag="div" to="/Address/list" class="address_manage border-bottom">地址管理<i>></i></router-link>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
export default {
  name: 'set',
  data () {
    return {
      title: '个人中心'
    }
  },
  components: {
    UseHeader
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.set
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: #ffffff
  z-index: 999
  .address_manage
    padding: 0 .1rem
    margin-top: 1rem
    height: .7rem
    line-height: .7rem
    font-size: .3rem
    color: #5c5c5c
    i
      float: right
      color: #f3f3f3
</style>
