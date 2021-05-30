<template>
  <div class="logout">
    <h3>Logging out...</h3>
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: "Logout",
  mounted() {
    this.logOut();
    this.$router.push('login');
  },

  methods: {
    ...mapActions(['logOut']),
  }
}
</script>

<style scoped>

</style>