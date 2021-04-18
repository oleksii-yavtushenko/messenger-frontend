<template>
  <nav class="menu">
    <ol>
      <li class="menu-item"><a href="#0">Home</a></li>
      <li class="menu-item">
        <a href="#0">Get Started</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="#0">Sign in</a></li>
          <li class="menu-item"><a href="#0">Sign up</a></li>
        </ol>
      </li>
      <li class="menu-item"><a href="#0">About</a></li>
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