<template>
  <div class="left_column" ref="wraper">
    <ul class="item_list">
      <li class="item" ref="item" :class="{'active': currentId===item.id}" @click="addActive(item.id)" v-for="item in list" :key="item.key">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'left-column',
  props: {
    list: Array,
    changeId: Number
  },
  data () {
    return {
      currentId: 0
    }
  },
  methods: {
    addActive (id) {
      this.currentId = id
      // console.log(event.target.innerText)
      // console.log(name)
      // console.log(this.bscroll.wheelTo(id))
      console.log(this.changeId)
      this.$emit('change', id)
    },
    rChangeL (id) {
      this.currentId = id
      this.bscroll.scrollToElement(this.$refs.item[id], 100, false, true)
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.bscroll) {
        this.bscroll = new BScroll(this.$refs.wraper, {
          tap: true,
          click: true,
          scrollY: true
        })
      } else {
        this.bscroll.refresh()
      }
    })
  },
  watch: {
    changeId () {
      // console.log(this.changeId)
      this.rChangeL(this.changeId)
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.left_column
  background: #fff
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
