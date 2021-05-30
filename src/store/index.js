import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import auth from "@/store/modules/auth";
import message from "@/store/modules/message";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        auth,
        message,
    },
    plugins: [createPersistedState()],
});