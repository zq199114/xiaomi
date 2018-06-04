<!-- 展示模板 -->
<template>
<transition>
  <slot></slot>
</transition>
</template>

<script>
export default {
  name: 'Updown'
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.v-enter, .v-leave-to
  /*opacity: 0*/
  transform: translateY(100%)
.v-enter-active, .v-leave-active
  transition: all .3s
</style>
