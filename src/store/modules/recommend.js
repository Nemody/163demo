/**
 * 用于管理recommend识物页面的状态数据的模块
 */
import {
  reqRecommendTabs,
  reqRecommendData,
  reqAutoRecommendData,
  reqOrderShowTop,
  reqOrderShowRatings

} from '../../api';
import {
  RECEIVE_RECOMMENDTABS,
  RECEIVE_RECOMMENDS,
  RECEIVE_AUTORECOMMENDS,
  RECEIVE_ORDERSHOWTOP,
  RECEIVE_ORDERSHOWRATINGS

} from '../mutation-types';
const state = {
  recommendTabs: [], // 识物页面导航列表
  recommends: [], // 推荐商品
  autoRecommends: {}, // 上拉自动加载的商品
  orderShowTop: [], // 晒单页面顶部数据
  orderShowRatings: [] // 晒单页面评价数据
};

const mutations = {
  [RECEIVE_RECOMMENDTABS] (state, recommendTabs) {
    state.recommendTabs = recommendTabs;
  },
  [RECEIVE_RECOMMENDS] (state, recommends) {
    state.recommends = recommends;
  },
  [RECEIVE_AUTORECOMMENDS] (state, autoRecommends) {
    state.autoRecommends = autoRecommends;
  },
  [RECEIVE_ORDERSHOWTOP] (state, orderShowTop) {
    state.orderShowTop = orderShowTop;
  },
  [RECEIVE_ORDERSHOWRATINGS] (state, orderShowRatings) {
    state.orderShowRatings = orderShowRatings;
  }
};

const actions = {
  async getRecommendTabs ({commit}) {
    const result = await reqRecommendTabs();
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDTABS, result.data);
    }
  },
  async getRecommends ({commit}) {
    const result = await reqRecommendData();
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDS, result.data);
    }
  },
  async getAutoRecommends ({commit}, page, size) {
    const result = await reqAutoRecommendData(page, size);
    if (result.code === '200') {
      commit(RECEIVE_AUTORECOMMENDS, result.data);
    }
  },
  async getOrderShowTop ({commit}, id) {
    const result = await reqOrderShowTop(id);
    if (result.code === '200') {
      commit(RECEIVE_ORDERSHOWTOP, result.data);
    }
  },
  async getOrderShowRatings ({commit}, obj) {
    const result = await reqOrderShowRatings(obj);
    if (result.code === '200') {
      commit(RECEIVE_ORDERSHOWRATINGS, result.data);
    }
  }
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
