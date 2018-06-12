<template>
  <div class="login_top">
    <div class="logo">
      <div class="iconfont logo_mi">&#xe646;</div>
      <span class="logo_title">小米账号登陆</span>
    </div>
    <form class="login_input">
      <div class="phone">
        <span v-show="this.model">
          <span class="area">+86</span>
          <span class="iconfont arrow">&#xe62d;</span>
        </span><input type="tel" :placeholder="this.place_one" v-model="userContent">
      </div>
      <div class="verification">
        <input :type="this.inp_type" :placeholder="this.verification" v-model="passContent">
        <span v-show="this.model" @click="getCode">获取验证码</span>
        <span v-show="!this.model" @click="changeType" class="iconfont eye" :class="{'active':'text'===inp_type}">&#xe607;</span>
      </div>
    </form>
    <span class="tips" v-show="this.show_tips">{{this.tipsContent}}</span>
    <div class="register">{{this.register}}</div>
    <div class="user_login" @click="loginMode">{{this.user_login}}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginTop',
  data () {
    return {
      model: true,
      user_login: '用户名密码登陆',
      register: '立即登陆/注册',
      place_one: '手机号码',
      verification: '短信验证码',
      inp_type: 'number',
      show_tips: false,
      passContent: '',
      userContent: '',
      tipsContent: ''
    }
  },
  methods: {
    loginMode () {
      this.model = !this.model
      let istrue = this.model
      this.user_login = istrue ? '用户名密码登陆' : '手机短信登陆/注册'
      this.register = istrue ? '立即登陆/注册' : '登陆'
      this.place_one = istrue ? '手机号码' : '邮箱/手机号码/小米ID'
      this.verification = istrue ? '短信验证码' : '密码'
      this.inp_type = istrue ? 'number' : 'password'
      this.passContent = ''
      this.userContent = ''
      this.show_tips = false
    },
    changeType () {
      this.inp_type = this.inp_type === 'password' ? 'text' : 'password'
    },
    getCode () {
      if (this.userContent === '') {
        this.show_tips = true
        this.tipsContent = '请输入手机号码'
      }
    }
  },
  watch: {
    userContent () {
      this.show_tips = false
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.login_top
  padding: .5rem
  .logo
    text-align center
    .logo_mi
      margin: 0 auto
      width: .96rem
      height: .96rem
      background: $mainColor
      border-radius: .07rem
      color: #fff
      font-size: .7rem
      line-height: .96rem
      text-align: center
      margin-bottom: .35rem
    .logo_title
      font-size: .35rem
      color: #000
  .login_input
    margin-top: .3rem
    font-size: .4rem
    color: #9b9b9b
    input
      font-family: none
      font-size: .38rem
    input::placeholder // 改变placeholder字体颜色
      color: #9b9b9b
    .phone
      overflow: hidden
      line-height: $headerHeight
      height: $headerHeight
      border-bottom: 0.02rem solid #d3d3d3
      .area, .arrow
        vertical-align: middle
      .arrow
        margin-right: .3rem
    .verification
      overflow: hidden
      height: $headerHeight
      line-height: $headerHeight
      border-bottom: 0.02rem solid #d3d3d3
      span
        color: #2ea5e5
        font-size: .28rem
      .eye
        float: right
        color: #4d4d4d
        font-size: .45rem
      .active
        color: $mainColor
  .tips
    color: red
    line-height: .9rem
  .tips::before
    content: '!'
    display: inline-block
    width: .3rem
    height: .3rem
    border-radius: .15rem
    line-height: .3rem
    text-align: center
    background: red
    color: #fff
  .register, .user_login
    margin-top: .5rem
    width: 100%
    line-height: .9rem
    text-align: center
    font-size: .4rem
    border-radius: .15rem
  .register
    background: $mainColor
    color: #ffffff
  .user_login
    border: 0.02rem solid #d3d3d3
</style>
