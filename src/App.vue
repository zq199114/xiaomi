<template>
  <div id="app">
    <!--判断页面时候需要缓存-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <enter-leave>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </enter-leave>
  </div>
</template>

<script>
import EnterLeave from 'common/animation/EnterLeave'
export default {
  name: 'App',
  components: {
    EnterLeave
  }
}
</script>

<style>
</style>
