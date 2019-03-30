<template>
  <div class="header-container">
    <div class="header-search-login">
      <span class="logo"></span>
      <div class="searchInput">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共xxxxx款好物</span>
      </div>
      <button>登录</button>
    </div>
    <div class="header-nav">
      <ul class="header-nav-left" @click="toggleActive">
        <li class="active"><a href="javascript:void(0);">推荐</a></li>
        <li><a href="javascript:void(0);">居家生活</a></li>
        <li><a href="javascript:void(0);">服饰鞋包</a></li>
        <li><a href="javascript:void(0);">美食酒水</a></li>
        <li><a href="javascript:void(0);">个护清洁</a></li>
        <li><a href="javascript:void(0);">母婴亲子</a></li>
        <li><a href="javascript:void(0);">运动旅行</a></li>
        <li><a href="javascript:void(0);">数码家电</a></li>
        <li><a href="javascript:void(0);">全球特色</a></li>
      </ul>
      <span class="iconfont icon-arrow header-nav-arrow"></span>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  export default {
    methods: {
      toggleActive (event) {
        const lis = document.querySelectorAll('li');
        Array.from(lis).forEach((li, index) => {
          li.className = '';
        });
        event.target.parentElement.className = 'active';
      }
    },
    mounted () {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.header-nav', {
          click: true,
          scrollX: true
        });
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header-container
    height 150px
    width 100%
    .header-search-login
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 25px
      box-sizing border-box
      .logo
        flex 2
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 138px 40px
        background-position center
        margin-right 10px
      .searchInput
        flex 7
        height 56px
        border-radius 10px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 56px
        i
          font-size 30px
        .placeholder
          font-size 30px
          color #666
      button
        flex 1
        height 40px
        margin-left 10px
        font-size 24px
        border-radius 10px
        outline none
        color $red
        border 1px solid $red
        background-color #fff
    .header-nav
      width 100%
      height 60px
      position relative
      .header-nav-left
        width 1650px
        font-size 30px
        height 60px
        li
          float left
          height 50px
          margin 5px 20px
          padding 0 10px
          text-align center
          &.active
            border-bottom 4px solid $red
            a
              color $red
      .header-nav-arrow
        position absolute
        right 0
        top 0
        width 100px
        height 60px
        font-size 30px
        text-align center
        line-height 60px
        background-color #fff
</style>
