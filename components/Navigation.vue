<template>
  <div>
    <header class="header">
      <div v-if="Uid">
        <nuxt-link class="header_left" to="/user">
          <baseIcon cls="global_nav_icon" url="samplein.jpg" />
          <baseText class="user_name">{{ User.nickname }}</baseText>
        </nuxt-link>
      </div>
      <div v-if="!Uid">
        <nuxt-link class="header_left" to="/signIn">
          <baseIcon cls="global_nav_icon" url="samplein.jpg" />
          <baseText class="user_name">ログイン</baseText>
        </nuxt-link>
      </div>

      <p class="title">{{ getTitle }}</p>
      <div class="header_right">
        <img class="hamburger" src="naviIcon/menu_gry.svg" alt />
      </div>
    </header>

    <footer class="footer">
      <NavItem
        linkPath="/"
        iconBlack="homeBlack"
        iconWhite="homeWhite"
        iconGreen="homeGreen"
        text="HOME"
      />
      <NavItem
        linkPath="/gift"
        iconBlack="giftBlack"
        iconWhite="giftWhite"
        iconGreen="giftGreen"
        text="GIFT"
      />
      <navItem
        linkPath="/diary"
        iconBlack="diaryBlack"
        iconWhite="diaryWhite"
        iconGreen="diaryGreen"
        text="DIARY"
      />
      <NavItem
        linkPath="/stamp"
        iconBlack="stampBlack"
        iconWhite="stampWhite"
        iconGreen="stampGreen"
        text="STAMP"
      />
      <NavItem
        linkPath="/farmer"
        iconBlack="farmerBlack"
        iconWhite="farmerWhite"
        iconGreen="farmerGreen"
        text="FARMER"
      />
    </footer>
  </div>
</template>

<script>
import NavItem from "~/components/NavItem";
import { getTitle } from "~/titles";
import { mapGetters } from "vuex";

export default {
  components: {
    NavItem
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
    },
    ...mapGetters("auth", ["Uid", "User"])
  },
  watch: {
    $route() {
      this.path = this.$route.path;
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid lightgray;
}

.header_left,
.header_right {
  width: 50px;
  height: 50px;
}

.header_left {
  display: flex;
}

.hamburger {
  width: 20px;
  margin: 15px;
}

.user_name {
  display: none;
  margin: auto 0px;
}

.footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: white;
  border-top: 1px solid lightgray;
}

@media screen and (min-width: 560px) {
}

@media screen and (min-width: 960px) {
  .title {
    margin-left: 50px;
  }
  .header_left {
    width: 250px;
    border-right: 1px solid lightgray;
  }

  .header_right {
    border-left: 1px solid lightgray;
  }

  .user_name {
    display: inline;
  }

  .footer {
    position: fixed;
    top: 0px;
    width: 250px;
    height: 100%;
    margin-top: 50px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    border-top: none;
    border-right: 1px solid lightgray;
  }
}
</style>