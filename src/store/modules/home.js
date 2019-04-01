/**
 * 用于管理首页状态数据的模块
 */
import {reqHomeData} from '../../api';
import {
  UPDATE_FLASHSALE,
  UPDATE_NEWITEM,
  UPDATE_POPULARITEM,
  UPDATE_CLASSIFYLIST
} from '../mutation-types';
const state = {
  flashSale: [],  // 限时购
  newItem: [],    // 新品首发
  popularItem: [], // 人气推荐
  classifyList: []  // 分类列表
};
const mutations = {
  [UPDATE_FLASHSALE] (state, flashSale) {
    state.flashSale = flashSale;
  },
  [UPDATE_NEWITEM] (state, newItem) {
    state.newItem = newItem;
  },
  [UPDATE_POPULARITEM] (state, popularItem) {
    state.popularItem = popularItem;
  },
  [UPDATE_CLASSIFYLIST] (state, classifyList) {
    state.classifyList = classifyList;
  }
};
const actions = {
  async getHomeData ({commit}) {
    const result = await reqHomeData();
    if (result.code === 0) {
      commit(UPDATE_FLASHSALE, result.data.flashSaleModule);
      commit(UPDATE_NEWITEM, result.data.newItemList);
      commit(UPDATE_POPULARITEM, result.data.popularItemList);
      commit(UPDATE_CLASSIFYLIST, result.data.categoryModule);
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
