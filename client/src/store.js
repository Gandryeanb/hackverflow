import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '@/assets/config'

const {
  host
} = config

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: null,
      fname: null,
      role: null,
      avatar: null
    }
  },
  mutations: {
    sendCurrentUser(state, payload) {
      state.currentUser = payload
    }
  },
  actions: {
    getCurrentUser({
      commit
    }, payload) {
      axios({
          url: host + '/users',
          method: 'get',
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(data => {
          commit('sendCurrentUser', data.data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    resetCurrentUser({
      commit
    }, payload) {
      commit('sendCurrentUser', {
        id: null,
        fname: null,
        role: null,
        avatar: null
      })
    }
  }
})
