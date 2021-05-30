import Vue from 'vue'
import store from "./store";
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Home from "@/components/Home";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Logout from "@/components/Logout"
import About from "@/components/About";
import Profile from "@/components/Profile"
import MessageHome from "@/components/MessageHome";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import axios from "axios";

Vue.config.productionTip = false
axios.defaults.headers.common['authorization'] = store.state.auth.authorization;
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080'

const routes = [
    {
        name: 'Unauthorized Home', path: '/', component: Home, meta: {
            requiresAuth: false
        }
    },
    {
        name: 'Registration', path: '/register', component: Register, meta: {
            requiresAuth: false
        }
    },
    {
        name: 'Login', path: '/login', component: Login, meta: {
            requiresAuth: false
        }
    },
    {
        name: 'About', path: '/about', component: About, meta: {
            requiresAuth: false
        }
    },
    {
        name: 'Authorized Home', path: '/home', component: MessageHome, meta: {
            requiresAuth: true
        }
    },
    {
        name: 'Profile', path: '/profile', component:Profile, meta: {
            requiresAuth: true
        }
    },
    {
        name: 'Logout', path: '/logout', component:Logout, meta: {
            requiresAuth: true
        }
    },
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default {
    router,
    routes
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log("finding requresAuth")
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.getters.isAuthorized == false) {
            console.log("authorization is null");
            next({name: 'Login'});
        } else {
            console.log("authorization is " + store.getters.isAuthorized);
            next(); // go to wherever I'm going
        }
    } else {
        next() // does not require auth, make sure to always call next()!
    }
})

new Vue({
    data() {
        return {
            info: null
        };
    },
    router,
    store,
    render: h => h(App),
}).$mount('#app')
