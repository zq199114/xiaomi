<template>
  <div class="select">
    <use-header :title="title"></use-header>
    <div class="wraper" ref="wraper">
       <div>
        <div class="title">热门城市</div>
        <div class="hot_city">
          <div @click="getCity(item.name)" class="hot_city_item" v-for="item in hotCity" :key="item.id">{{item.name}}</div>
        </div>
        <ul class="list">
          <li class="lists" v-for="(item, key) in city" :key="key">
            <div class="list_item">{{key}}</div>
            <ul class="list_item_citys">
              <li class="list_item_city border-bottom" v-for="cit in item" :key="cit.id" @click="getCity(cit.name)">{{cit.name}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import BScroll from 'better-scroll'

export default {
  name: 'addressSelectCity',
  data () {
    return {
      title: '选择收货城市',
      city: '', // 这里如果赋错了类型下面就会显示不正常
      hotCity: ''
    }
  },
  components: {
    UseHeader
  },
  methods: {
    getCity (name) {
      this.$router.push({path: '/Address/addressSelect', query: {city: name}})
    }
  },
  mounted () {
    let data = this.$route.query
    this.city = JSON.parse(data.city)
    this.hotCity = JSON.parse(data.hotCity)
    this.scroll = new BScroll(this.$refs.wraper, {
      scrollY: true,
      tab: true,
      click: true
    })
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.select
  z-index: 999
  .wraper
    position: fixed
    top: 1rem
    left: 0
    right: 0
    bottom: 0
    background: #fdfdfd
    overflow: hidden
    height: 100%
    .title
      height: .55rem
      line-height: .55rem
      padding-left: .2rem
      font-size: .24rem
      background: #f4f4f4
      color: #a5a5a5
    .hot_city
      padding: .2rem .3rem
      display: flex
      flex-wrap: wrap
      .hot_city_item
        display: inline-block
        text-align: center
        padding: .1rem 0
        font-size: .24rem
        width: 25%
    .list
      .lists
        .list_item
          height: .6rem
          line-height: .6rem
          padding-left: .2rem
          font-size: .24rem
          background: #f4f4f4
          color: #a5a5a5
      .list_item_citys
        .list_item_city
          padding: .15rem .2rem
          font-size: .24rem
</style>
