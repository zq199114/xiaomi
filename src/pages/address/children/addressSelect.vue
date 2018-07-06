<template>
  <div class="address_select">
    <use-header :title="title" :back="Address"></use-header>
    <div class="inpt_address">
      <div @click="goTo" class="inpt_selec"><i>{{currentCity}}</i><span class="iconfont arrow">&#xe6ce;</span></div>
      <span class="iconfont search">&#xe603;</span>
      <!--<input placeholder="请输入您的收货地址" type="text" class="inpt_new" v-model="searcontent"/>-->
      <!--default-all 默认是true如果是true当输入框没有任何内容时所有内容都会现显示在列表里-->
      <!--inputChangeEventName这个选项是每输入一个字就搜索一下-->
      <!--searcontent搜索内容本来是v-model中的内容-->
      <vue-fuse placeholder="请输入您的收货地址"
                :keys="keys"
                :list="optionly"
                event-name="cityChange"
                inputChangeEventName="nameinp"
                :default-all="togo"
                :search="searcontent"
                class="inpt_new"
      ></vue-fuse>
    </div>
    <div ref="wraper" class="wraper">
    <ul class="address_select_list">
      <li class="address_select_item" @click="close" v-if="!searchRes.length">手动选择地址</li>
      <li v-for="(item, index) in searchRes" class="address_select_item" :key="index">{{item.label}}</li>
    </ul>
    </div>
    <address-lv @close="close" v-if="showAddressLv" :optionly="optionly"></address-lv>
    <router-view></router-view>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import addressLv from './components/address_lv'
import BScroll from 'better-scroll'

export default {
  name: 'addressSelect',
  data () {
    return {
      title: '选择收货地址',
      showAddressLv: false,
      hotCity: [],
      city: {},
      optionly: [], // 请求来的值
      currentCity: '北京',
      Address: '/Address', // 要返回的页面
      searchRes: [], // 要显示的搜索结果列表
      keys: ['label'],
      togo: false,
      searcontent: ''
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
        this.hotCity = JSON.stringify(data.hotCities)
        this.city = JSON.stringify(data.cities)
        // console.log(this.)
      }
    },
    getCityItem (res) {
      this.optionly = res.data
      // if (item.label.indexOf(this.currentCity) >= 0) {
      // } 判断两个字符串是否有相同的字符串
    }
  },
  mounted () {
    this.$axios.get('/api/city.json').then(this.getCityList)
    this.$axios.get('/api/vue-city-lv4.json').then(this.getCityItem)
    if (this.$route.query.city) {
      this.currentCity = this.$route.query.city
    }
    this.bscroll = new BScroll(this.$refs.wraper, {
      tab: true,
      click: true,
      scrollY: true
    })
  },
  created () {
    this.$on('cityChange', res => {
      this.searchRes = res
    })
    // this.$on('nameinp', () => {
    //   console.log('什么鬼')
    // })
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
      // margin-right: .03rem
      box-sizing: border-box
      text-align: center
      i
        display: inline-block
        max-width: 1rem
        ellipsis()
      .arrow
        vertical-align: top
        font-size: .2rem
        display: inline-block
        padding-left: .1rem
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
  .wraper
    position: fixed
    right: 0
    left: 0
    bottom: 0
    top: $headerHeight + .8rem + .3rem
    overflow: hidden
    .address_select_list
      margin-top: .3rem
      font-size: .24rem
      text-align: center
      .address_select_item
        height: 1rem
        line-height: 1rem
        background: #fff
</style>
