import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import firebase from '../firebase'

export default new Vuex.Store({
  state: {
    overlay: false,
    button_load: false
  },
  mutations: {
    SET_OVERLAY: (state, payload) => state.overlay = payload,
    SET_BUTTON_LOAD: (state, payload) => state.button_load = payload
  },
  actions: {
    login({ commit }, para) {
      return new Promise( (resolve, reject) => {
        commit('SET_BUTTON_LOAD', true)
        firebase.auth().signInWithEmailAndPassword(para.email, para.password).then( res => {
          console.log(res)
          resolve(res)
        }).catch( e => {
          console.log(e.message)
          reject(e)
        })
        commit('SET_BUTTON_LOAD', false)
      })
    },
    register({ commit }, para) {
      return new Promise( (resolve, reject) => {
        commit('SET_BUTTON_LOAD', true)
        firebase.auth().createUserWithEmailAndPassword(para.email, para.password).then( res => {
          console.log(res)
          resolve(res)
        }).catch( e => {
          console.log(e.message)
          reject(e)
        })
        commit('SET_BUTTON_LOAD', false)
      })
    }
  }
})
