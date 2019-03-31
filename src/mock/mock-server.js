/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs';
import categoryList from './categoryList.json';

Mock.mock('/home', {code: 0, data: categoryList});
Mock.mock('/category', {code: 0, data: categoryList});
