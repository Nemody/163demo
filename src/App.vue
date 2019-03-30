<template>
  <div>
    <router-view />
  </div>
</template>
<script>
  import Home from './pages/Home/Home.vue';
  import Category from './pages/Category/Category.vue';
  import Recommend from './pages/Recommend/Recommend.vue';
  import ShopCart from './pages/ShopCart/ShopCart.vue';
  import Profile from './pages/Profile/Profile.vue';
  export default {
    components: {
      Home,
      Category,
      Recommend,
      ShopCart,
      Profile
    }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus">

</style>
