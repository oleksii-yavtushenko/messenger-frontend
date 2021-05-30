<template>
  <div class="Register">
    <HomeMenu/>
    <div class="container-center">
      <form method="post" class="d-flex flex-column card-body bg-default-light rounded text-center">
        <h2 class="p-4">Sign up</h2>
        <label class="card-title">Login</label>
        <input v-model="user.login" class="m-auto input-group-text" size="40px" type="text" name="login">
        <label class="card-title pt-2">Email</label>
        <input v-model="user.email" class="m-auto input-group-text" size="40px" type="email" name="email">
        <label class="card-title pt-2">Password</label>
        <input v-model="user.password" class="m-auto input-group-text" size="40px" type="password" name="password">
        <br>
        <button class="btn-group-vertical p-2 m-auto position-static" type="submit" @click.prevent="signup" name="submit-button">Sign up</button>
      </form>
      <h5 class="text-center text-danger" v-if="showError">Invalid input</h5>
    </div>
  </div>
</template>

<script>

import HomeMenu from "@/components/HomeMenu";
import {mapActions} from "vuex";

export default {
  name: 'Register',
  props: {
  },
  components: {
    HomeMenu,
  },
  data() {
    return {
      user: {
        login: "" ,
        email: "",
        password: "",
        enabled: true
      },
      showError: false,
    };
  },

  methods: {
    ...mapActions(["Register"]),

    async signup() {
      try {
        console.log(this.user)
        await this.Register(this.user);
        await this.$router.push("/home");
        this.showError = false
      } catch (error) {
        console.log(error);
        this.showError = true;
      }
    }
  }
}

</script>

<style>
@import "../../src/assets/styles.css";
</style>