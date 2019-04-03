<template>
  <section class="login-container">
    <div class="main-logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <div class="login-main">
      <div class="phone-num">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入短信验证码">
        <button class="get-code">获取验证码</button>
      </div>
      <div class="get-help">
        <span>遇到问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <button class="login" disabled>登录</button>
    </div>
    <div class="other-login"  @click="toggleLoginMethod()">
      <span>其他登录方式</span>
    </div>
    <div class="register" @click="$router.push('/profile/phoneregister')">
      <span>注册账号</span>
      <i class="iconfont icon-52"></i>
    </div>
    <router-view />
  </section>
</template>
<script>
  export default {
    props: {
      setIsShow: Function
    },
    methods: {
      toggleLoginMethod () {
        this.setIsShow();
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .login-container
    height 100%
    background-color #fff
    padding 0 40px
    .main-logo
      margin-top 56px
      display flex
      justify-content center
      img
        width 200px
        height 64px

    .login-main
      padding-top 120px
      .phone-num, .code
        width 670px
        height 90px
        margin-top 20px
        border-bottom 1px solid #ddd
        clearFix()
        input
          float left
          margin 28px 0
          font-size 28px
          color #666
          border none
        button
          float right
          width 168px
          height 58px
          font-size 28px
          color #333
          outline none
          margin 15px 10px 0 0
          background-color #fff
          border-radius 10px
          border 1px solid #333

      .get-help
        padding 40px 0 80px
        display flex
        justify-content space-between
        font-size 30px
        color #333
      .login
        width 670px
        height 100px
        font-size 28px
        color #fff
        outline none
        background-color $red
        border 1px solid $red
    .other-login
      width 670px
      height 100px
      text-align center
      line-height 100px
      font-size 28px
      color $red
      border 1px solid $red
      margin-top 30px
    .register
      display flex
      justify-content center
      align-items baseline
      margin-top 30px
      font-size 28px
      i
        font-size 28px
</style>
