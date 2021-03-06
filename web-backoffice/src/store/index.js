//Created by wangshuyi on 27/02/2018.

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state:{
    userInfo: null,
    token: null,
    loading:false,
    cookieName: 'Wind_back',
    windowSize: null,
  },
  mutations: mutations,
  actions: actions,

  modules: {},
  strict: debug
})
