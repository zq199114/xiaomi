<template>
  <div class="select">
    <use-header :title="title"></use-header>
    <div class="title">热门城市</div>
    <div class="hot_city">
      <div class="hot_city_item" v-for="item in hotCity" :key="item.id">{{item.name}}</div>
    </div>
    <ul class="list">
      <li class="lists" v-for="(item, key) in city" :key="key">
        <div class="list_item">{{key}}</div>
        <ul class="list_item_citys">
          <li class="list_item_city border-bottom" v-for="cit in item" :key="cit.id">{{cit.name}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
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
  mounted () {
    let data = this.$route.query
    this.city = JSON.parse(data.city)
    this.hotCity = JSON.parse(data.hotCity)
    console.log(this.$route)
    console.log(this.city)
    console.log(typeof (this.hotCity))
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.select
  z-index: 999
  position: fixed
  top: 1rem
  left: 0
  right: 0
  bottom: 0
  background: #fdfdfd
  overflow: hidden
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
    .hot_city_item
      display: inline-block
      text-align: center
      padding: .1rem 0
      font-size: .24rem
      flex: 5
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
