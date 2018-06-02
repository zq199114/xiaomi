<template>
<transition>
  <slot></slot>
</transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped type="text/stylus">
  .v-leave-to
    opacity: 0
  .v-leave-active
    transition: opacity .5s
</style>
