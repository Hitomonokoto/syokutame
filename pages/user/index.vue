<template>
  <main>
    <baseImage class="main_img" :url="image_path" />
    <div class="profile_area">
      <div class="xxx">
        <div class="user_icon">
          <div class="icon_edge">
            <baseIcon cls="user_page_icon" :url="User.user_icon" />
          </div>
        </div>
      </div>
      <div class="mypage_header">
        <baseText class="nickname" :isWeight="true">{{ User.nickname }}</baseText>
      </div>
    </div>

    <div class="mypage_menu_area">
      <mypageMenu v-if="isMenu" @emitEditProfile="editProfile" />
    </div>
    <profileData v-if="isProfileData" :user_data="User" />
    <follower v-if="isFollower" />
    <baseButton cls="logout_btn" @emitClick="signOut">ログアウト</baseButton>
  </main>
</template>


<script>
import mypageMenu from "~/components/user/MypageMenu";
import follower from "~/components/user/Follower";
import profileData from "~/components/user/ProfileData";
import { mapGetters } from "vuex";
import Cookies from "universal-cookie";

export default {
  components: {
    mypageMenu,
    follower,
    profileData
  },
  data() {
    return {
      image_path: null,
      isProfileData: false,
      isFollower: true,
      isMenu: false
    };
  },
  async created() {
    const r = Math.floor(Math.random() * 5) + 1;
    this.image_path = `/mypageImage/${r}.jpg`;
    // this.$store.dispatch("farmers/getFollowerAction", this.User.user_id);
  },
  methods: {
    editProfile() {
      this.isProfileData = true;
      this.isFollower = false;
      this.isMenu = false;
    },
    signOut() {
      const cookies = new Cookies();
      cookies.remove("token");
      this.$store.commit("auth/signOut");
      this.$router.push("/");
    },
    menu() {
      if (!this.isMenu) {
        this.isMenu = true;
      } else {
        this.isMenu = false;
      }
    }
  },
  computed: {
    ...mapGetters("auth", ["Uid", "User"]),
    ...mapGetters("farmers", ["Farmers"])
  },
  head() {
    return {
      title: "マイページ | ショクタメ"
    };
  }
};
</script>



<style scoped>
.profile_area {
  width: 80%;
  display: flex;
  margin-bottom: 50px;
}
.xxx {
  display: flex;
  width: 150px;
}
.user_icon {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.icon_edge {
  background-color: rgb(255, 255, 250);
  border-radius: 5px;
  position: absolute;
  top: -90px;
  left: 20px;
}
.mypage_header {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.mail_and_menu {
  display: flex;
  margin-right: 20px;
}
.mail_area {
  margin-right: 10px;
}
.nickname {
  margin-bottom: 20px;
}

.mypage_menu_area {
  width: 80%;
  position: relative;
}
@media screen and (max-width: 960px) {
  .profile_area {
    width: 100%;
  }
  .xxx {
    width: 150px;
  }
  .icon_edge {
    position: absolute;
    top: -80px;
  }
  .mypage_header {
    margin-top: 10px;
  }
}
@media screen and (max-width: 560px) {
  .xxx {
    width: 90px;
  }
  .icon_edge {
    position: absolute;
    top: -20px;
  }
}
</style>
