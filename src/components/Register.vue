<template>
  <div class="Register">
    <Menu/>
    <div class="container-center">
      <form method="post" class="d-flex flex-column card-body bg-default-light rounded text-center">
        <h2 class="p-4">Sign up</h2>
        <label class="card-title">Login</label>
        <input v-model="login" class="m-auto input-group-text" size="40px" type="text" name="login">
        <label class="card-title pt-2">Email</label>
        <input v-model="email" class="m-auto input-group-text" size="40px" type="email" name="email">
        <label class="card-title pt-2">Password</label>
        <input v-model="password" class="m-auto input-group-text" size="40px" type="password" name="password">
        <br>
        <button class="btn-group-vertical p-2 m-auto position-static" type="submit" @click.prevent="signup" name="submit-button">Sign up</button>
      </form>
      <h5 class="text-center text-success" v-if="success">Successful registration</h5>
    </div>
  </div>
</template>

<script>

import Menu from "@/components/Menu";
import axios from "axios";

export default {
  name: 'Register',
  props: {
    login: String,
    password: String,
    email: String,
    enabled: Boolean,
    success: Boolean
  },
  components: {
    Menu,
  },

  methods: {
    signup: function () {
      axios({
        method: 'POST',
        data: {
          id: null,
          onlineStatus: null,
          login: this.login,
          username: this.login,
          password: this.password,
          email: this.email,
          enabled: true
        },
        url: 'http://localhost:8080/register', crossDomain: true
      })
          .then(response => {
            alert(JSON.stringify(response.data));
            this.success = true;
          })
          .catch((error) => {
            console.log(error);
            this.success = false;
          });
    }
  }
}

</script>

<style>
@import "../../src/assets/styles.css";
</style>