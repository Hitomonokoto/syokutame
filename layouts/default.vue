<template>
  <div class="container">
    <navigation />
    <nuxt />
  </div>
</template>

<script>
import { fireauth } from "~/plugins/firebase";
import navigation from "~/components/Navigation";
export default {
  components: {
    navigation
  },
  mounted() {
    if (!this.$store.state.auth.uid) {
      fireauth.onAuthStateChanged(async user => {
        if (user) {
          await this.$store.dispatch("auth/getUserAction", user.uid);
        }
      });
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
p {
  color: black;
}
img {
  display: block;
}
.container {
  display: flex;
  width: 100%;
  background-color: rgb(255, 255, 250);
}

/* これより下は全ページ共通のCSS */

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.page_info {
  width: 100%;
  padding: 20px;
}

.page_title {
  margin-bottom: 20px;
}

.about_button {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 560px) {
  .about_button {
    display: flex;
    justify-content: flex-end;
  }
}

@media screen and (min-width: 960px) {
  main {
    margin-left: 250px;
    margin-bottom: 0px;
  }
}

.home_title {
  margin-bottom: 10px;
}

.follower_title {
  margin-bottom: 20px;
}
</style>
