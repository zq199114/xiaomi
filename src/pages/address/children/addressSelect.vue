<template>
  <div class="address_select">
    <use-header :title="title"></use-header>
    <div class="inpt_address">
      <div @click="goTo" class="inpt_selec">北京<span class="iconfont arrow">&#xe6ce;</span></div>
      <span class="iconfont search">&#xe603;</span><input placeholder="请输入您的收货地址" type="text" class="inpt_new"/>
    </div>
    <ul class="address_select_list">
      <li class="address_select_item" @click="close">手动选择地址</li>
    </ul>
    <address-lv @close="close" v-show="showAddressLv"></address-lv>
    <router-view></router-view>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import addressLv from './components/address_lv'

export default {
  name: 'addressSelect',
  data () {
    return {
      title: '选择收货地址',
      showAddressLv: false,
      hotCity: [],
      city: {}
    }
  },
  components: {
    UseHeader,
    addressLv
  },
  methods: {
    close () {
      this.showAddressLv = !this.showAddressLv
    },
    goTo () {
      this.$router.push({path: '/Address/addressSelectCity', query: {city: this.city, hotCity: this.hotCity}})
    },
    getCityList (res) {
      if (res.data.ret) {
        let data = res.data.data
        this.hotCity = data.hotCities
        this.city = data.cities
        // console.log(this.)
      }
    }
  },
  mounted () {
    this.$axios.get('/api/city.json').then(this.getCityList)
    console.log('mounted')
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.address_select
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 999
  background: #f4f4f4
  .inpt_address
    margin-top: $headerHeight
    box-sizing: content-box
    height: .8rem
    line-height: .8rem
    font-size: .22rem
    display: flex
    .inpt_selec
      background: #fff
      width: 1.8rem
      margin-right: .03rem
      box-sizing: border-box
      padding: 0 .35rem 0 .6rem
      .arrow
        font-size: .2rem
        display: inline-block
        padding-left: .15rem
    .search
      padding: 0 .15rem
      background: #fff
      color: #bababa
    .inpt_new
      flex: 1
      background: #fff
      box-sizing: content-box
      &::placeholder
        font-family: $bodyFamily
        font-size: .24rem
  .address_select_list
    margin-top: .3rem
    font-size: .24rem
    text-align: center
    .address_select_item
      height: 1rem
      line-height: 1rem
      background: #fff
</style>
