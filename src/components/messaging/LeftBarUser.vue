<template>
  <li v-on:click="choose" :class="personClass" class="person" data-chat="person1">
    <div class="user">
      <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="Avatar">
      <span class="status"></span>
    </div>
    <p class="name-time">
      <span v-text="User.login" class="name"></span>
    </p>
  </li>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "LeftBarUser",
  props: {
    User: Object,
    isActive: Boolean,
  },
  data() {
    return {
      personClass: 'active-person',
    }
  },
  methods: {
    ...mapActions(['setNewCurrentReceiver']),

    async choose() {
      await this.setNewCurrentReceiver(this.User);
    },

    async calculateData() {
      if (!this.isActive) {
        this.personClass = '';
      }
    }
  }
}
</script>

<style scoped>

</style>