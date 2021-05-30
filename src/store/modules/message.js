import axios from 'axios';
import store from '../index'

const state = {
    foundedUsers: null,
    currentReceiver: null,
    toSendMessage: null,
    messageList: null,
    chosenUsers: null,
    allUsers: null,
};
const getters = {
    getFoundedUsers: state => state.foundedUsers,
    getCurrentReceiver: state => state.currentReceiver,
    getToSendMessage: state => state.toSendMessage,
    getMessageList: state => state.messageList,
    getChosenUsers: state => state.chosenUsers,
    getAllUsers: state => state.allUsers,

};
const actions = {
        async sendMessage({dispatch}, message) {
            await axios.post("/message/send", message).then(dispatch('getAllMessages'));
        },

        async getAllUsers({state, commit}) {
            let allUsers = await axios({
                method: 'GET',
                url: 'user',
            });
            await commit('setAllUsers', allUsers.data);

            if (state.chosenUsers == null) {
                await commit('setChosenUsers', allUsers.data);
            }
        },

        async getAllMessages({commit, state}) {
            let messageList = await axios({
                method: 'GET',
                url: "message",
                params: {'firstUserId': store.getters.StateUser.id, 'secondUserId': state.currentReceiver.id},
            });
            await commit('setMessageList', messageList.data);
        },

        async getUserLoginById(id) {
            console.log(JSON.stringify(id))
            console.log('user/' + JSON.stringify(id.getters));
            let userResponse = await axios({
                method: 'GET',
                url: JSON.parse(id),
            });
            return userResponse.data.user;
        },

        async setNewCurrentReceiver({commit, dispatch}, receiver) {
            await commit('setCurrentReceiver', receiver);
            await dispatch('getAllMessages');
        },

        async search({state, commit}, userLogin) {
            let filteredUsers = state.allUsers.filter((x)=>{
                return x.login.includes(userLogin)
            });
            commit('setChosenUsers', filteredUsers);
        }
    }
;
const mutations = {
    setFoundedUsers(state, foundedUsers) {
        state.foundedUsers = foundedUsers;
    },

    setCurrentReceiver(state, currentReceiver) {
        state.currentReceiver = currentReceiver;
    },

    setToSendMessage(state, toSendMessage) {
        state.toSendMessage = toSendMessage;
    },

    setMessageList(state, messageList) {
        state.messageList = messageList;
    },

    setChosenUsers(state, chosenUsers) {
        state.chosenUsers = chosenUsers;
    },

    setAllUsers(state, allUsers) {
        state.allUsers = allUsers;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};