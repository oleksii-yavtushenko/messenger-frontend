<template>
<div class="Profile">
  <MainMenu/>
  <div class="container m-5 p-5">
    <h1>Profile info:</h1>
    <h5>Login: <b>{{ user.login }}</b></h5>
    <h5>Email: <b>{{ user.email }}</b></h5>
  </div>
</div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import {mapActions} from "vuex";

export default {
  name: "Profile",
  components: {MainMenu},
  props: {},

  data() {
    return {
      user: {
        id: "",
        login: "",
        email: "",
        password: "",
        onlineStatus: "",
        authorizationToken: "",
      },
    };
  },

  mounted() {
    this.signup();
  },

  methods: {
    ...mapActions(["getAllMessages"]),

    async signup() {
      try {
        await this.getAllMessages();
        this.user = this.$store.getters.StateUser;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>
@import "../../src/assets/menu-styles.css";
</style>