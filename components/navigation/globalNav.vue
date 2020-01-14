<template>
  <div>
    <div class="top_nav">
      <div v-if="Uid">
        <nuxt-link class="top_nav_left" to="/user">
          <UserIcon cls="global_nav_icon" url="samplein.jpg" />
          <baseText cls="global_nav_user_name">{{ User.nickname }}</baseText>
        </nuxt-link>
      </div>
      <div v-if="!Uid">
        <nuxt-link class="top_nav_left" to="/signIn">
          <UserIcon cls="global_nav_icon" url="samplein.jpg" />
          <baseText cls="global_nav_user_name">ログイン</baseText>
        </nuxt-link>
      </div>

      <p class="title">{{ getTitle }}</p>
      <div class="top_nav_right">
        <img class="hamburger" src="naviIcon/menu_gry.svg" alt />
      </div>
    </div>

    <div class="bottom_nav">
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
    </div>
  </div>
</template>

<script>
import NavItem from "~/components/navigation/navItem";
import UserIcon from "~/components/UserIcon";
import { getTitle } from "~/titles";
import { mapGetters } from "vuex";

export default {
  components: {
    NavItem,
    UserIcon
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
.top_nav {
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

.top_nav_left,
.top_nav_right {
  width: 50px;
  height: 50px;
}

.top_nav_left {
  display: flex;
}

.hamburger {
  width: 20px;
  margin: 15px;
}

.bottom_nav {
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
  .top_nav_left {
    width: 250px;
    border-right: 1px solid lightgray;
  }

  .top_nav_right {
    border-left: 1px solid lightgray;
  }

  .bottom_nav {
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