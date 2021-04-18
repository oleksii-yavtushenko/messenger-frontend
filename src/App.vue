<template>
  <div id="app">
    <Menu></Menu>
    <img class="shake-object" alt="Letter logo" src="./assets/logo.png">
    <Home msg="Letter.com - lean and simple messenger"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Home,
  }
}
</script>

<style>
@import "../src/assets/styles.css";
</style>
