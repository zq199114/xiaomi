<template>
  <div class="set">
    <use-header :title="title" :back="back"></use-header>
    <router-link  tag="div" to="/Address/list" class="address_manage border-bottom">地址管理<i>></i></router-link>
    <div class="login_out" @click="loginOut">退出账号</div>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import { mapMutations } from 'vuex'
export default {
  name: 'set',
  data () {
    return {
      title: '个人中心',
      back: '/User'
    }
  },
  components: {
    UseHeader
  },
  methods: {
    ...mapMutations(['LOGIN_OUT']),
    loginOut () {
      this.LOGIN_OUT()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.set
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: #ffffff
  z-index: 999
  .address_manage
    padding: 0 .1rem
    margin-top: 1rem
    height: .7rem
    line-height: .7rem
    font-size: .3rem
    color: #5c5c5c
    i
      float: right
      color: #f3f3f3
  .login_out
    position: fixed
    left: 0
    bottom: 0
    right: 0
    height: 1rem
    line-height: 1rem
    background: #f3f3f3
    font-size: .3rem
    color: #5c5c5c
    text-align: center
    box-shadow: 0 -.07rem .4rem #f3f3f3
</style>
