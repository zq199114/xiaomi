<template>
  <div class="add_address">
    <use-header :title="this.title"></use-header>
    <div class="add border-bottom consignee">收货人: <input type="text" placeholder="真实姓名"></div>
    <div class="add border-bottom phonenum">手机号码: <input type="text" placeholder="手机号"></div>
    <div class="add border-bottom area">所在地区: <input @click="gotoSele" type="text" readonly="readonly" placeholder="省 市 区 街道信息"></div>
    <div class="add border-bottom deta_address">详细地址: <input type="text"  placeholder="详细地址"></div>
    <div class="add border-bottom default_address">设置为默认地址: <input type="checkbox"></div>
    <div class="save_address">保存地址</div>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
export default {
  name: 'add_address',
  components: {
    UseHeader
  },
  data () {
    return {
      title: '新增地址'
    }
  },
  methods: {
    gotoSele () {
      console.log('woc')
      this.$router.push({path: 'Address/addressSelect'})
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.add
  padding: 0 .3rem
  height: 1.1rem
  font-size: .28rem
  display: flex
  align-items: center
input
    padding: 0 .45rem
  ::placeholder
    font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif
.consignee
  margin-top: 1rem
.default_address
  justify-content space-between
.save_address
  height: 1rem
  line-height: 1rem
  background: $mainColor
  color: #fff
  text-align: center
  position: fixed
  bottom: 0
  left: 0
  right: 0
  font-size: .3rem
</style>
