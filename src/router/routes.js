/**
 * 路由管理模块
 */
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue';
import Recommend from '../pages/Recommend/Recommend.vue';
import ShopCart from '../pages/ShopCart/ShopCart.vue';
import Profile from '../pages/Profile/Profile.vue';

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/home'
  }
]
