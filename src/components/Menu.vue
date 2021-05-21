<template>
  <nav class="menu">
    <ol>
      <li class="menu-item"><a v-on:click="$router.push('/')">Home</a></li>
      <li class="menu-item">
        <a v-on:click="$router.push('/register')">Get Started</a>
        <ol class="sub-menu">
          <li class="menu-item"><a v-on:click="$router.push('/login')">Sign in</a></li>
          <li class="menu-item"><a v-on:click="$router.push('/register')">Sign up</a></li>
        </ol>
      </li>
      <li class="menu-item"><a v-on:click="$router.push('/about')">About</a></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String
  }

}
</script>

<style>
@import "../../src/assets/menu-styles.css";
</style>