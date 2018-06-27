<template>
  <div>
  <div class="add_address">
    <use-header :title="this.title" :back="order"></use-header>
    <div class="add border-bottom consignee">收货人: <input type="text" placeholder="真实姓名" v-model="name"></div>
    <div class="add border-bottom phonenum">手机号码: <input type="text" placeholder="手机号" v-model="phone"></div>
    <div class="add border-bottom area">所在地区: <input @click="gotoSele" type="text" v-model="address" readonly="readonly" placeholder="省 市 区 街道信息"></div>
    <div class="add border-bottom deta_address">详细地址: <input type="text" v-model="det_address"  placeholder="详细地址"></div>
    <div class="add border-bottom default_address">设置为默认地址: <input type="checkbox" v-model="pick"></div>
    <div class="save_address" @click="saveAddress">保存地址</div>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import { mapMutations } from 'vuex'
export default {
  name: 'add_address',
  components: {
    UseHeader
  },
  data () {
    return {
      title: '新增地址',
      order: '/Order',
      name: '',
      phone: '',
      address: '',
      det_address: '',
      pick: false
    }
  },
  methods: {
    ...mapMutations(['ADD_ADDRESS']),
    gotoSele () {
      this.$router.push({path: '/Address/addressSelect'})
    },
    saveAddress () {
      this.ADD_ADDRESS({name: this.name, phone: this.phone, detAddress: this.det_address, address: this.address, pick: this.pick})
      this.$router.push({path: '/Order'})
    }
  },
  watch: {
    $route () {
      if (this.$route.query.area) {
        this.$route.query.area.pop()
        this.address = this.$route.query.area.join(' ') // 把数组抓换成字符串并用括号里的字符串隔开他
      }
    }
  },
  mounted () {
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
    flex: 1
    padding: 0 .45rem
    font-family: $bodyFamily
  ::placeholder
    font-family: $bodyFamily
.consignee
  margin-top: 1rem
.default_address
  justify-content space-between
  input
    flex: none
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
