<template>
  <div class="login">
    <login-top :fromName="fromName"></login-top>
  </div>
</template>

<script>
import LoginTop from './components/LoginTop'

export default {
  name: 'Login',
  data () {
    return {
      fromName: ''
    }
  },
  components: {
    LoginTop
  },
  beforeRouteEnter (to, from, next) {
    console.log(from.name)
    next(res => {
      res.fromName = from.name
    })
  }
}
</script>

<style scoped>

</style>
