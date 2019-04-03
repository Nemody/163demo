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
import PhoneLogin from '../pages/Profile/PhoneLogin/PhoneLogin.vue';
import EmailLogin from '../pages/Profile/EmailLogin/EmailLogin.vue';
import PhoneRegister from '../pages/Profile/PhoneRegister/PhoneRegister.vue';
import EmailRegister from '../pages/Profile/EmailRegister/EmailRegister.vue';

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/categorylist',
    component: CategoryList,
    meta: {
      isShow: true
    },
    children: [
      {
        path: '/categorylist/category',
        component: Category,
        meta: {
          isShow: true
        },
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
    meta: {
      isShow: true
    },
    children: [
      {
        path: '/recommend/find',
        component: RecoFind,
        meta: {
          isShow: true
        },
      },
      {
        path: '/recommend/select',
        component: RecoSelect,
        meta: {
          isShow: true
        },
      },
      {
        path: '',
        redirect: '/recommend/find'
      }
    ]
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: '/profile/phonelogin',
        component: PhoneLogin
      },
      {
        path: '/profile/emaillogin',
        component: EmailLogin
      },
      {
        path: '/profile/phoneregister',
        component: PhoneRegister
      },
      {
        path: '/profile/emailregister',
        component: EmailRegister
      },
      {
        path: '',
        redirect: '/profile/phonelogin'
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]
