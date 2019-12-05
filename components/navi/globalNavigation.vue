<template>
  <div>
    <div class="top_nav">
      <div class="top_nav_left"></div>
      <!-- <div class="top_nav_center"> -->
      <p class="title">{{ getTitle }}</p>
      <!-- </div> -->
      <div class="top_nav_right"></div>
    </div>
    <div class="bottom_nav">
      <nuxt-link class="navi_link" to="/">
        <naviSingle icon_b="home_b" icon_w="home_w" text="HOME" />
      </nuxt-link>

      <nuxt-link class="navi_link" to="/gift">
        <naviSingle icon_b="gift_b" icon_w="gift_w" text="GIFT" />
      </nuxt-link>

      <nuxt-link class="navi_link" to="/farmer">
        <naviSingle icon_b="farmer_b" icon_w="farmer_w" text="FARMER" />
      </nuxt-link>
      <nuxt-link class="navi_link" to="/stamp">
        <naviSingle icon_b="question_b" icon_w="question_w" text="STAMP" />
      </nuxt-link>
      <div class="navi_link" @click="mypage">
        <naviSingle icon_b="mypage_b" icon_w="mypage_w" text="DIARY" />
      </div>
    </div>
  </div>
</template>

<script>
// コンポーネント
import naviSingle from "~/components/naviSingle";
import linkButton from "~/components/LinkButton";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";
import { getTitle } from "~/titles";

export default {
  components: {
    naviSingle,
    linkButton,
    userIcon
  },
  data() {
    return {
      path: this.$route.path
    };
  },
  methods: {
    mypage() {
      if (this.auth.token) {
        this.$router.push("/user");
      } else {
        this.$router.push("/uid");
      }
    }
  },
  computed: {
    getTitle() {
      return getTitle(this.path, { spaceName: this.name });
    }
  },
  watch: {
    $route() {
      this.path = this.$route.path;
    }
  }
};
</script>

<style scoped>
.top_nav {
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: pink;
}

.top_nav_left,
.top_nav_right {
  width: 50px;
  height: 50px;
  background-color: blue;
}

.bottom_nav {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  background-color: white;
}

.navi_link {
  width: 20%;
}

@media screen and (min-width: 560px) {
}

@media screen and (min-width: 960px) {
  .top_nav_left,
  .top_nav_right {
    width: 250px;
    height: 50px;
    background-color: blue;
  }

  .bottom_nav {
    position: fixed;
    top: 0px;
    width: 250px;
    height: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
}
</style>