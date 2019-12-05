<template>
  <div class="container">
    <GlobalNavigation />
    <nuxt />
  </div>
</template>

<script>
import GlobalNavigation from "~/components/navi/globalNavigation";
export default {
  components: {
    GlobalNavigation
  },
  data() {
    return {
      isBtn: true
    };
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
.container {
  display: flex;
  width: 100%;
  background-color: rgb(255, 255, 250);
}
/* 
@media screen and (max-width: 960px) {
  .container {
    flex-direction: column;
  }
  .pc_navi_area {
    display: none;
  }
  .tablet_navi_area {
    display: block;
  }
}
@media screen and (max-width: 560px) {
  .tablet_navi_area {
    display: none;
  }
  .mobile_navi_area {
    display: block;
  }
} */

/* これより下は全ページ共通のCSS */

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
@media screen and (min-width: 960px) {
  main {
    margin-left: 250px;
    margin-bottom: 0px;
  }
}
.page_title {
  margin-top: 50px;
  margin-bottom: 20px;
}
.description {
  margin-bottom: 50px;
  text-align: center;
}
.home_title {
  margin-bottom: 10px;
}
.follower_title {
  margin-bottom: 20px;
}
</style>
