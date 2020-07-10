import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from 'axios'

export default new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem('user')),
        guests: []
    },
    mutations: {
        add_user(state, data) {
            state.user = data
        },

        getGuests(state, data) {
            state.guests = data
        }
    },
    actions: {

        async login({ commit }, id) {
            console.log(id)
            return new Promise((resolve, reject) => {
                axios({ url: 'http://127.0.0.1:3000/api/auth/' + id, method: 'GET' })
                    .then(resp => {

                        if (resp.data) {
                            console.log("Success!", resp.data)
                            resp.data.isLoggedIn = true
                                // this.updateUser(id)
                            localStorage.setItem('user', JSON.stringify(resp.data))
                            commit('add_user', resp.data)
                            resolve(resp)
                        }
                    })
                    .catch(err => {
                        localStorage.removeItem('user')
                        reject(err)
                    })
            })
        },

        async getGuests({ commit }) {
            return new Promise((resolve, reject) => {
                axios({ url: 'http://127.0.0.1:3000/api/guests/', method: 'GET' })
                    .then(resp => {
                        if (resp.data) {
                            console.log("Success!", resp.data)
                            commit('getGuests', resp.data)
                            resolve(resp)
                        }
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },

        async updateUser(id) {
            axios({ url: 'http://127.0.0.1:3000/api/setLog/' + id, method: 'GET' })
                .then(resp => {
                    if (resp.data) {
                        console.log("Success!", resp.data)
                    }
                })
        }
    },

    getters: {
        getUser: state => state.user,
        guestsGetter: state => {
            state.guests.forEach(elem => {
                if (elem.isLoggedIn == true) {
                    elem.isLoggedIn = "Авторизован"
                    elem.color = true
                } else {
                    elem.isLoggedIn = "Не авторизован"
                    elem.color = false
                }
            })
            return state.guests
        }
    },

    modules: {}
});