<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p class="content">
      Easy message your friends and relatives with our web-application!<br>
      You do not need any downloads or additional software.<br>
    </p>
    <button class="click-button">Get Started</button>
    <footer>&copy;letter.com</footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>
