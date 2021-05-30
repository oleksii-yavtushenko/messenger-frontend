<template>
  <li :class="chatPosition">
    <div class="chat-hour" v-if="chatPosition == 'chat-right'" v-text="time"><span class="fa fa-check-circle"></span></div>
    <div v-text="message.messageText" class="chat-text"/>
    <div class="chat-avatar">
      <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="avatar">
      <div v-text="login" class="chat-name"/>
    </div>
    <div class="chat-hour" v-if="chatPosition == 'chat-left'" v-text="time"><span class="fa fa-check-circle"></span></div>
  </li>
</template>

<script>

import {mapActions} from "vuex";
import axios from "axios";

export default {
  name: "MessageComponent",
  props: {
    message : Object,
  },
  data() {
    return {
      chatPosition: 'chat-right',
      anotherUser: null,
      login: null,
      time: String,
    }
  },
  created() {
    this.calculateData()
  },
  methods: {
    ...mapActions(['getUserLoginById']),

    async calculateData() {
      let currentUser = this.$store.getters.StateUser;
      if (currentUser.id === this.message.senderId) {
        this.chatPosition = 'chat-right';
        this.login = currentUser.login;
      } else {
        this.chatPosition = 'chat-left';
        let userResponse = await axios({
          method: 'GET',
          url: 'user/' + JSON.stringify(this.message.senderId),
        });
        this.anotherUser = userResponse.data;
        this.login = userResponse.data.login;
      }
      let time = new Date(this.message.createTime);
      this.time = time.toDateString() + ' ' + time.toLocaleTimeString();
    }
  }
}
</script>

<style scoped>
@import "../../../src/assets/message.css";
@import "../../../src/assets/styles.css";
</style>