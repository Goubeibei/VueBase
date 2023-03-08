import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  isFirst: true,
  isLoading: false,
  errMsg: '',
  users: []
}

const mutations = {
  REQUESTING(state){
    state.isFirst = false
    state.isLoading = true
  },
  REQUESTSUCCESS(state,users){
    state.isLoading = false
    state.users = users
  },
  REQUESTFAILED(state,error){
    state.isLoading = false
    state.errMsg = error.message;
  }

}

const actions = {
  // 如果是actions中的方法，第一个参数必须是context，就算不用也要占位
  // 第二个参数才是dispatch的时候传过来的参数
  async searchAjax({commit},q) {
    // this.isFirst = false
    // this.isLoading = true
    commit('REQUESTING')
    try {
      const response = await axios({
        // url:'https://api.github.com/search/users?q='+keyword
        // url:'https://api.github.com/search/users?q=${keyword}'
        url: 'https://api.github.com/search/users',
        method: 'get',
        params: {
          q
        }
      })
      // this.isLoading = false

      // foreach map filter some every reduce 都暗含遍历
      // map
      // 功能：加工数组，根据已有的数组创建新数组，新数组当中每一项和老数组当中的每一项对应有关系
      // 参数：回调函数（item，index，arr）每个数组项都会执行回调函数，返回一个新的项，放在数组中
      // 返回值：把每一项都返回的新项组成的新数组返回

      let users = response.data.items.map(item => ({
        username: item.login,
        userurl: item.url,
        userimg: item.avatar_url
      }));

      commit('REQUESTSUCCESS',users)
      
    } catch (error) {
      // this.isLoading = false
      // this.errMsg = error.message
      commit('REQUESTFAILED',error)
    }
  },
}

const getters = {

}



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})