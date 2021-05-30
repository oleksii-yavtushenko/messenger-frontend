<template>
  <div class="messageHome">
    <MainMenu/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container">

      <!-- Page header start -->
      <!-- Page header end -->

      <!-- Content wrapper start -->
      <div class="content-wrapper">

        <!-- Row start -->
        <div class="row gutters">

          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

            <div class="card m-0">

              <!-- Row start -->
              <div class="row no-gutters">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                  <div class="users-container">
                    <div class="chat-search-box">
                      <div class="input-group">
                        <input v-model="searchLogin" v-on:input="search(searchLogin)"  class="form-control" placeholder="Search">
                        <div class="input-group-btn">
                          <button  type="button" class="btn">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <ul class="users">
                      <LeftBarUser :User="user" v-for="user in this.$store.getters.getChosenUsers" :key="user.id"/>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                  <div class="selected-user">
                    <span>To: <span v-text="$store.getters.getCurrentReceiver.login" class="name"></span></span>
                  </div>
                  <div class="chat-container">
                    <div ref="scroll-panel" class="scroll" onload="this.scrollToBottom()">
                      <ul class="chat-box chatContainerScroll">
                        <MessageComponent :message="message"
                                          v-for="message in this.$store.getters.getMessageList.content"
                                          :key="message.id"/>
                      </ul>
                      <h5 v-if="$store.getters.getMessageList.length === 0">
                        There is no messages yet...
                      </h5>
                    </div>
                    <div class="form-group mt-3 mb-0">
                      <textarea v-on:keypress.shift.enter="sendMessageFunc()" v-model="textToSend" class="form-control" rows="3"
                                placeholder="Type your message here..."></textarea>
                      <button class="position-absolute" v-on:keypress.enter="sendMessageFunc()" @click.prevent="sendMessageFunc()">Send</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Row end -->
            </div>

          </div>

        </div>
        <!-- Row end -->

      </div>
      <!-- Content wrapper end -->

    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import {mapActions} from "vuex";
import MessageComponent from "@/components/messaging/MessageComponent";
import LeftBarUser from "@/components/messaging/LeftBarUser";

export default {
  name: "MessageHome",
  components: {LeftBarUser, MessageComponent, MainMenu},
  mounted() {
    this.getUsers();
    this.interval = setInterval(() => this.getMessages(), 1000)
  },
  data() {
    return {
      currentReceiver: Object,
      textToSend: null,
      searchLogin: '',
    }
  },
  methods: {
    ...mapActions(["getAllMessages"]),
    ...mapActions(["sendMessage"]),
    ...mapActions(["getAllUsers"]),
    ...mapActions(["search"]),

    async getMessages() {
      await this.getAllMessages();
    },

    async getUsers() {
      await this.getAllUsers();
    },

    async sendMessageFunc() {
      let message = {};
      message.senderId = this.$store.getters.StateUser.id;
      message.recipientId = this.$store.getters.getCurrentReceiver.id;
      message.messageText = this.textToSend;
      this.textToSend = '';
      await this.sendMessage(message).then(this.scrollToBottom);
    },
    scrollToBottom: function () {
      let objDiv = this.$refs["scroll-panel"];
      this.$refs["scroll-panel"].scrollTop = objDiv.scrollHeight;
    }
  }
}
</script>

<style scoped>
@import "../../src/assets/message.css";
@import "../../src/assets/styles.css";
</style>