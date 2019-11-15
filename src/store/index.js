import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 用户ID
    userId: ''
  },
  mutations: {
    setUserId: (state, userId) => {
      state.userId = userId
    }
  },
  actions: {}
})

export default store
