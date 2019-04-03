/**
 * 路由管理模块
 */
import Home from '../pages/Home/Home.vue';
import CategoryList from '../pages/CategoryList/CategoryList.vue';
import Recommend from '../pages/Recommend/Recommend.vue';
import ShopCart from '../pages/ShopCart/ShopCart.vue';
import Profile from '../pages/Profile/Profile.vue';
import Category from '../pages/CategoryList/Category/Category.vue';
import RecoFind from '../pages/Recommend/RecoFind/RecoFind.vue';
import RecoSelect from '../pages/Recommend/RecoSelect/RecoSelect.vue';

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/categorylist',
    component: CategoryList,
    children: [
      {
        path: '/categorylist/category',
        component: Category
      },
      {
        path: '',
        redirect: '/categorylist/category'
      }
    ]
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: '/recommend/find',
        component: RecoFind
      },
      {
        path: '/recommend/select',
        component: RecoSelect
      },
      {
        path: '',
        redirect: '/recommend/find'
      }
    ]
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
