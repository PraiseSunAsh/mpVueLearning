import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getter'

//声明使用vuex
Vue.use(Vuex);
//暴露vuex最核心的store对象
export default new Vuex.Store({
  // 在es6中，同名的属性可以省略不写
  state,
  actions,
  getters,
  mutations,
})