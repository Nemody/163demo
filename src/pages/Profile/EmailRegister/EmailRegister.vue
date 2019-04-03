<template>
  <section class="register-container">
    <div class="regis-title">
      <span>邮箱账号注册</span>
    </div>
    <div class="regis-main">
      <div class="phonenum">
        <input type="text" placeholder="邮箱账号">
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码">
      </div>
      <button class="register" disabled>注册</button>
    </div>
    <div class="toash-info">
      <input type="checkbox">
      <div class="text">
        <span>我同意</span>
        <a href="iavascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="iavascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
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
  .register-container
    height 100%
    background-color #fff
    padding 0 40px
    .regis-title
      margin-top 28px
      display flex
      justify-content center
      span
        font-size 36px
        color #333
    .regis-main
      padding-top 120px
      .phonenum, .pwd, .confirm-pwd
        width 670px
        height 90px
        border-bottom 1px solid #ddd
        margin-top 20px
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
      .register
        width 670px
        height 100px
        font-size 28px
        color #fff
        outline none
        background-color $red
        border 1px solid $red
    .toash-info
      height 40px
      display flex
      align-items center
      margin-top 30px
      input
        width 40px
        height 40px
        outline none
        border 1px solid #333
        background-color #fff
        margin-right 10px
      .text
        a
          color #007AFF
    .email-register
      display flex
      justify-content center
      align-items baseline
      margin-top 30px
      font-size 28px
      i
        font-size 28px
</style>
