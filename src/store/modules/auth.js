import axios from 'axios';

const state = {
    user: null,
    authorization: null,
};
const getters = {
    isAuthorized: state => !!state.authorization,
    Authorization: state => state.authorization,
    StateUser: state => state.user,
};
const actions = {
        async Register({dispatch}, user) {
            await axios.post('register', user)
            await dispatch('LogIn', user)
        },

        async LogIn({commit}, User) {
            let response = await axios.post('login', User);
            let authorization = response.headers["authorization"];
            await commit('setUser', response.data.content)
            await commit('setAuthorization', authorization)
        },

        async logOut({commit}) {
            commit('setUser', null);
            commit('setAuthorization', null);
            commit('setChosenUsers', null);
        }
    }
;
const mutations = {
    setAuthorization(state, authorization) {
        state.authorization = 'Bearer ' + authorization;
    },

    setUser(state, user) {
        state.user = user;
    },
};
export default {
    state,
    getters,
    actions,
    mutations
};