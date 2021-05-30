<template>
  <div id="Login">
    <HomeMenu/>
    <div class="container-center">
      <form method="POST" class="d-flex flex-column card-body bg-default-light rounded text-center">
        <h2 class="p-4">Sign in</h2>
        <label for="login-input" class="card-title">Login</label>
        <input v-model="user.login" class="m-auto input-group-text" size="40px" type="text" name="login-input"
               id="login-input">
        <label for="password-input" class="card-title pt-2">Password</label>
        <input v-model="user.password" class="m-auto input-group-text" size="40px" type="password" name="password-input"
               id="password-input">
        <br>

        <label for="remember-me"><input type="checkbox" class="mr-1" name="remember-me" id="remember-me">Remember
          me</label>
        <input type="submit" class="btn-group-vertical p-2 m-auto position-static" @click.prevent="signIn"/>
      </form>
      <h5 class="text-center text-success p-3"  v-if="showError">Invalid Data</h5>
    </div>
  </div>
</template>

<script>
import HomeMenu from "@/components/HomeMenu";
import {mapActions} from "vuex";

export default {
  name: "Login",
  props: {},
  components: {HomeMenu},
  data() {
    return {
      user: {
        login: "",
        email: "",
        password: "",
        enabled: true
      },
      showError: false,
    };
  },

  methods: {
    ...mapActions(["LogIn"]),

    async signIn () {
      try {
        console.log(this.user)
        await this.LogIn(this.user);
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

<style scoped>

</style>