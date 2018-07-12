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
  .v-enter
    transform: translateX(100%)
  .v-enter-to
    // opacity: 0
    // transform: translateX(100%)
  .v-leave-to
    transform: translateX(100%)
  .v-enter-active, .v-leave-active
    transition: all .3s
    // transform: translateX(100%)
    // transition: opacity .3s
  /*.main*/
    /*position: fixed*/
    /*top: 0*/
    /*bottom: 0*/
    /*width: 100%*/
    /*margin: 0 auto*/
    /*overflow-y: auto*/
    /*overflow-x: hidden*/
    /*-webkit-overflow-scrolling: touch*/
</style>
