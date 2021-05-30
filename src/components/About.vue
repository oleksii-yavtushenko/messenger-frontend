<template>
  <div id="about" class="centralized-text">
    <HomeMenu/>
    <div class="content p-5">
    <h1>Letter.com - lean and simple messenger</h1>
    <p class="content">
      Client-side tech stack: VueJs 2.6.11, Vuex, Axios<br>
      Backend-side tech stack: Java 11, PostgreSQL DB, Spring Boot<br>
    </p>
    </div>
  </div>
</template>

<script>
import HomeMenu from "@/components/HomeMenu";
export default {
  name: "About",
  components: {HomeMenu}
}
</script>

<style scoped>

</style>