import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Home from "@/components/Home";
import Register from "@/components/Register";
import Login from "@/components/Login";
import About from "@/components/About";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import axios from "axios";

Vue.config.productionTip = false
axios.defaults.withCredentials = true

const routes = [
    {path: '/', component: Home},
    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/about', component: About}
]

const router = new VueRouter({
    routes
})

export default {
    router,
    routes
}

new Vue({
    data() {
        return {
            info: null
        };
    },
    router,
    render: h => h(App),
}).$mount('#app')
