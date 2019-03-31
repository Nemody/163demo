<template>
  <div class="home-nav">
    <ul class="home-nav-box">
      <li class="home-nav-item" v-for="(category, index) in categoryList" :key="index">
        <img :src="category.imgUrl" alt="居家生活">
        <span>{{category.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        categories: []
      }
    },
    computed: {
      ...mapState(['categoryList'])
       /* getCatogoryList () {
        let newObj = {};
        let newArr = [];
        this.categories.filter((category, index) => {
          if (category.superCategoryId === 0) {
            newObj.name = category.name;
            newObj.imgUrl = category.imgUrl;
            newArr.push(newObj);
            console.log(newArr);
          }
        });
        return newArr;
      } */
    },
    mounted () {
      this.$store.dispatch('getCategoryList');
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .home-nav
    padding-bottom 30px
    background-color #F4F4F4
    .home-nav-box
      clearFix()
      text-align center
      .home-nav-item
        float left
        margin 10px 20px
        img
          width 110px
          height 110px
          margin-bottom 10px

</style>
