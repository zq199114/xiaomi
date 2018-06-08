<!-- 展示模板 -->
<template>
<div class="num_count">
<div class="num_change">
  <div class="reduce" @click="reduce">-</div>
  <div class="num_show">{{numA}}</div>
  <div class="add" @click="add">+</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Count',
  props: {
    num: Number
  },
  data () {
    return {
      numA: this.num
    }
  },
  methods: {
    reduce () {
      if (this.numA === 1) {
        this.numA = 1
        return
      }
      this.numA--
      this.$emit('numState', this.numA)
      this.$emit('stateItem')
    },
    add () {
      this.numA++
      this.$emit('numState', this.numA)
      this.$emit('stateItem')
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
  .num_change
    border: .02rem solid rgba(0,0,0,.15)
    box-sizing: border-box
    display: flex
    width: 1.8rem
    height: .6rem
    font-size: .3rem
    text-align: center
    line-height: .6rem
    .reduce
      flex: 1
      background: #FAFAFA
    .num_show
      flex: 1
    .add
      flex: 1
      background: #FAFAFA
</style>
