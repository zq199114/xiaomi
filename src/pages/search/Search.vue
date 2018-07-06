<template>
  <div class="search">
    <use-header @reres="reres"></use-header>
    <hot-search></hot-search>
    <ul class="hot_list"  v-show="!list.length">
      <li @click="test">小米8</li>
      <li>小米8</li>
      <li>小米8</li>
      <li>小米8</li>
      <li>小米8</li>
    </ul>
    <ul class="list" v-show="list.length">
      <li class="list_item" v-for="(item, index) in list" :key="index">{{item.phone_name}}</li>
    </ul>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import HotSearch from './components/HotSearch'
export default {
  name: 'Search',
  data () {
    return {
      list: []
    }
  },
  components: {
    UseHeader,
    HotSearch
  },
  methods: {
    reres (res) {
      this.list = res
    },
    test () {
      console.log('woca')
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.search
  .list
    .list_item
      height: .6rem
      line-height: .6rem
      font-size: .4rem
      background: #f4f4f4
      padding: .2rem
  .hot_list
    padding: .3rem
    li
      display: inline-block
      color: #484848
      font-size: .3rem
      padding: .2rem
      border: .01rem solid #e4e4e4
      background: #fdf8f7
      margin-right:.28rem
</style>
