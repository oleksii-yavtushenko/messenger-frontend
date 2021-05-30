<template>
  <div class="home centralized-text">
    <HomeMenu/>
    <img class="shake-object" alt="Letter logo" src="./../assets/logo.png">
    <h1>Letter.com - lean and simple messenger</h1>
    <p class="content">
      Easy message your friends and relatives with our web-application!<br>
      You do not need any downloads or additional software.<br>
    </p>
    <button class="click-button" v-on:click="$router.push('/register')">Get Started</button>
  </div>
</template>

<script>
import HomeMenu from "@/components/HomeMenu";

export default {
  name: 'Home',
  components: {
    HomeMenu
  },
  computed: {
    username() {
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
