<template>
  <div class="left_column" ref="wraper">
    <ul class="item_list">
      <li class="item" :class="{'active': currentId===item.id}" @click="addActive(item.id)" v-for="item in list" :key="item.key">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'left-column',
  data () {
    return {
      list: null,
      currentId: 0
    }
  },
  methods: {
    addActive (id) {
      this.currentId = id
    }
  },
  mounted () {
    this.bscroll = new BScroll(this.$refs.wraper)
    this.$axios.get('/list/item').then(res => {
      if (res.status === 200) {
        console.log(res)
        this.list = res.data
      }
    })
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.left_column
  overflow: hidden
  position: fixed
  left: 0
  top: $headerHeight
  bottom: 1.04rem
  width: 20%
  .item_list
    .item
      font-size: .3rem
      text-align: center
      height: 1rem
      line-height: 1rem
    &>.active
      font-size: .4rem
      color: $mainColor
</style>
