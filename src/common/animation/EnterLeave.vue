<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'EnterLeave'
}
</script>

<style lang="stylus" scoped type="text/stylus">
  .v-enter, .v-leave-to
    /*opacity: 0*/
    transform: translateX(100%)
  .v-enter-active, .v-leave-active
    transition: all .3s
</style>
