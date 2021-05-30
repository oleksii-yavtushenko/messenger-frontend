<template>
  <nav class="menu">
    <ol>
      <li class="menu-item"><a v-on:click="$router.push('/home')">Home</a></li>
      <li class="menu-item">
        <a v-on:click="$router.push('/profile')">{{this.$store.getters.StateUser.login}}</a>
        <ol class="sub-menu">
          <li class="menu-item"><a v-on:click="$router.push('/profile')">Profile</a></li>
          <li class="menu-item"><a v-on:click="$router.push('/logout')">Logout</a></li>
        </ol>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
}
</script>

<style scoped>

</style>