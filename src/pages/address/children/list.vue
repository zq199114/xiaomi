<template>
  <div class="list">
    <use-header :title="title"></use-header>
    <div @click="changeAddress(index)" class="list_item border" v-for="(item, index) in addressList" :key="index">
      <div class="title border-bottom">
        <span class="name">{{item.name}}</span>
        <span class="phone">{{item.phone}} <i v-if="index===0">[默认]</i></span>
        <span class="delect" @click.stop="deleteItem(index)" v-if="showDel">删除</span>
      </div>
      <div class="address">
        <div>
        <div class="address_detail">{{item.address}}</div>
        <div class="address_tip">{{item.det_address}}</div>
        </div>
        <div class="arrow iconfont">&#xe62d;</div>
      </div>
    </div>
    <router-link to="/Address" class="bottom">新建地址</router-link>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'list',
  data () {
    return {
      title: '收货地址',
      showDel: false
    }
  },
  computed: {
    ...mapState(['addressList'])
  },
  methods: {
    ...mapMutations(['DEFAULT_ADDRESS', 'DELETE_ADDRESS']),
    changeAddress (index) {
      this.DEFAULT_ADDRESS(index)
      this.$router.push('/Order')
    },
    deleteItem (index) {
      this.DELETE_ADDRESS(index)
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from)
    if (from.name === 'set') {
      next(vm => {
        vm.showDel = true
      })
    } else {
      next(vm => {
        vm.showDel = false
      })
    }
  },
  components: {
    UseHeader
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.list
  background: #fff
  z-index: 9999
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  padding: 1rem .3rem 0
  .list_item
    margin: .2rem 0
    padding: 0 .2rem
    .title, .address
      padding: .25rem 0 .25rem .35rem
      .name
        font-size: .28rem
        color: $mainColor
        margin-right: .5rem
      .phone
        font-size: .28rem
        color: #3c3c3c
        i
          color: $mainColor
          font-size: .2rem
      .delect
        font-size: .3rem
        color: #999
        float: right
    .address
      display: flex
      justify-content: space-between
      .address_detail, .address_tip
        font-size: .24rem
        color: #3c3c3c
        line-height: .35rem
      .arrow
        align-self: center
        font-size: .23rem
        color: #999
  .bottom
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: 1rem
    color: #fff
    background: $mainColor
    text-align: center
    font-size: .28rem
    line-height: 1rem
</style>
