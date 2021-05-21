<template>
  <div id="app">
    <div class="bg-sky full-screen">
    <router-view></router-view>
    <footer class="footer">&copy;letter.com</footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueCookies)
Vue.use(VueRouter)

export default {
  name: 'App'
}
</script>

<style>
@import "../src/assets/styles.css";
</style>
