/**
 * 入口文件
 */
import Vue from 'vue';
import 'lib-flexible/flexible';
import App from './App.vue';
import Footer from './components/Footer/Footer.vue'
import router from './router';

// 注册全局组件
Vue.component('Footer', Footer);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App />'
});
