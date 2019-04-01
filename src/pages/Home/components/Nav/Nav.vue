<template>
  <section class="nav-container">
    <ul class="nav-box">
      <li class="nav-item" v-for="(category, index) in categoryList" :key="index">
        <img :src="category.imgUrl" alt="居家生活">
        <span>{{category.name}}</span>
      </li>
    </ul>
  </section>
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
      ...mapState({
        categoryList: state => state.categoryList.categoryList
      })
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
  .nav-container
    padding-bottom 30px
    background-color #F4F4F4
    .nav-box
      clearFix()
      text-align center
      .nav-item
        float left
        width 110px
        height 156px
        margin 10px 20px 9px
        img
          width 110px
          height 110px
          margin-bottom 10px
        span
          font-size 24px
          width 110px
          height 36px
          margin-top 10px

</style>
