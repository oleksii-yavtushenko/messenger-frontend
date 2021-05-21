<template>
  <div id="Login">
    <Menu/>
    <div class="container-center">
      <form method="POST" class="d-flex flex-column card-body bg-default-light rounded text-center">
        <h2 class="p-4">Sign in</h2>
        <label for="login-input" class="card-title">Login</label>
        <input v-model="login" class="m-auto input-group-text" size="40px" type="text" name="login-input"
               id="login-input">
        <label for="password-input" class="card-title pt-2">Password</label>
        <input v-model="password" class="m-auto input-group-text" size="40px" type="password" name="password-input"
               id="password-input">
        <br>

        <label for="remember-me"><input type="checkbox" class="mr-1" name="remember-me" id="remember-me">Remember
          me</label>
        <input type="submit" class="btn-group-vertical p-2 m-auto position-static" @click.prevent="signIn"/>
      </form>
      <h5 class="text-center text-success p-3" v-bind="localStorage" v-if="success">Successful login</h5>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import axios from "axios";

export default {
  name: "Login",
  props: {
    login: String,
    password: String,
    success: Boolean
  },
  components: {Menu},
  methods: {
    signIn: function () {
        axios({
          method: 'POST',
          data: {
            login: this.login,
            username: this.login,
            password: this.password,
          },
          url: 'http://localhost:8080/login', crossDomain: true
        })
            .then(response => {
              if (response.headers['authorization']) {
                this.success = true;
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('authorization', JSON.stringify(response.headers['authorization']));
                alert(JSON.stringify(response.headers));
              }
            })
            .catch((error) => {
              this.success = false;
              console.log(error);
            });
      }
    }
}
</script>

<style scoped>

</style>