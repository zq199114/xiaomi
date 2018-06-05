<!-- 展示模板 -->
<template>
<div>
  <!--<div class="cart">{{this.$store.state.count}}可以这样获取</div>-->
  <div class="cart">{{this.todos[1].text}}</div>
  <!--<div class="cart">{{this.doneTodos[0].text}}</div>-->
  <div class="cart">{{this.doneCount[0].text}}</div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapState(['todos']),
    // ...mapGetters(['doneTodos']) // 这一行和下一行的作用相同
    ...mapGetters({
      // 把 `this.doneTodos` 映射为 `this.$store.getters.doneTodos`
      doneCount: 'doneTodos'
    })
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">

</style>
