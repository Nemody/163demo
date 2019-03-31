<template>
  <div class="home-container">
    <Header/>  <!--头部-->
    <HomeSwiper ref="swiper"/>  <!--轮播图部分-->
    <ul class="wangyi-grow">
      <li>
        <i class="grow-icon"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="grow-icon"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="grow-icon"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <HomeNav />   <!--首页主导航区-->
    <HomeGift />  <!--首页福利区-->
    <Split />
    <HomeManufacturer /> <!--首页品牌制造商区-->
    <Split />
    <HomePopular /> <!--首页热销榜单区-->
    <Split />
    <Footer />   <!--底部导航区-->
  </div>
</template>
<script>
  import HomeSwiper from './components/HomSwiper/HomeSwiper.vue';
  import HomeNav from './components/HomeNav/HomeNav.vue';
  import HomeGift from './components/HomeGift/HomeGift.vue';
  import HomeManufacturer from './components/HomeManufacturer/HomeManufacturer.vue';
  import HomePopular from './components/HomePopular/HomePopular.vue';
  export default {
    components: {
      HomeNav,
      HomeSwiper,
      HomeGift,
      HomeManufacturer,
      HomePopular
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.swiper._initSwiper();
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .home-container
      min-height 100%
      padding-bottom 100px
      .wangyi-grow
        display flex
        justify-content space-around
        align-items center
        height 72px
        li
          display flex
          &:nth-of-type(1)
            i
              background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          &:nth-of-type(2)
            i
              background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
          &:nth-of-type(3)
            i
              background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
          .grow-icon
            width 32px
            height 32px
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
            background-size 32px 32px
            background-repeat no-repeat
            background-position center
            margin 0 10px 0 0
</style>
