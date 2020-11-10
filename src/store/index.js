import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 購物車
    items: []
  },
  mutations: {
    // state代表上面的state,
    // data代表傳入的資料
    addCart (state, data) {
      state.items.push(data)
    },
    delcart (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    items (state) {
      return state.items
    }
  }
})
