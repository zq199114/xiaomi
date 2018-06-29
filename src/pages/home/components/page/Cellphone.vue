<template>
<div class="cellphone" @click="test">
  哈哈{{token}}
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeCellphone',
  methods: {
    test () {
      console.log(this.token)
    }
  },
  computed: {
    ...mapState(['token'])
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
.cellphone
  width: 100%
</style>
