<template>
  <div class="home-container">
    <Header/>
    <!--分页器部分-->
   <div class="page">
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
         </div>
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
         </div>
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
         </div>
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站">
         </div>
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新">
         </div>
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集">
         </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
     </div>
   </div>
    <!--中部网站特点区-->
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
    <!--首页主导航区-->
    <HomeNav />
    <Footer />
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';

  import HomeNav from './HomeNav/HomeNav.vue';
  export default {
    components: {
      HomeNav
    },
    mounted () {
      this.$nextTick(() => {
        this._initSwiper();
      });
    },
    methods: {
      _initSwiper () {
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay: true, // 自动轮播
          speed: 1000,
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              let customPaginationHtml = '';
              for (let i = 0; i < total; i++) {
                // 判断哪个分页器此刻应该被激活
                if (i === current - 1) {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs"></span>';
                }
              }
//              return '<span class="swiperPag">' + customPaginationHtml + '</span>';
              return customPaginationHtml;
            }
          }
        });
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .swiper-container
      width 750px
      height 400px
      img
        width 100%
        height 100%
      .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
        width 100%
        height 4px
        bottom 50px
        .swiper-pagination-customs
          width 40px
          height 4px
          display inline-block
          margin-right 10px
          background-color rgba(255, 255, 255, .5)
        .swiper-pagination-customs-active
          width 40px
          height 4px
          display inline-block
          border-radius 2px
          background-color $red
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
