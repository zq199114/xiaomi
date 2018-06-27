<template>
  <div class="address">
    <router-link tag="div" v-if="isAdd" to="/Address" class="addAddress border-bottom"><span class="add">添加收获地址</span><span class="iconfont arrow">&#xe62d;</span></router-link>
    <router-link v-if="!isAdd" tag="div" to="/Address/list" class="addAddress border-bottom">
      <div class="wraper">
        <span class="title">{{title}}</span>
        <span class="current_address">{{currentAddress}}</span>
      </div>
      <span class="iconfont arrow">&#xe62d;</span>
    </router-link>
    <!--{{addressList}}-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'OrderAddress',
  data () {
    return {
      title: '', // 收件人和电话
      currentAddress: '', // 详细地址,
      isAdd: true
    }
  },
  computed: {
    ...mapState(['defaultAddress', 'addressList'])
  },
  mounted () {
    if (this.defaultAddress) {
      this.isAdd = false
      let res = this.defaultAddress
      this.title = [res.name, res.phone].join(' ')
      this.currentAddress = [res.address, res.detAddress].join(' ')
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.address
  margin-top: $headerHeight
  background: #fff
  .addAddress
    display: flex
    justify-content: space-between
    padding: .3rem .2rem .3rem .3rem
    // flex-wrap: wrap
    // height: $headerHeight
    // line-height: $headerHeight
    .wraper
      padding-left: .2rem
      .title
        display: block
        font-size: .3rem
        font-weight: 700
        color: #3c3c3c
      .current_address
        display: block
        margin-top: .23rem
        font-size: .23rem
        color: #757575
    .add
      align-self: center
      font-size: .26rem
      font-weight: 700
    .arrow
      line-height: 100%
      align-self: center
      font-weight: normal
      color: #828282
</style>
