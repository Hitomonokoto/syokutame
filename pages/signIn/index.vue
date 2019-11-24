<template>
  <main>
    <div class="logo">
      <img src="~/assets/mainlogo2.png" alt />
    </div>

    <basicInput
      v-model="signInData.email"
      cls="login"
      type="text"
      placeholder="メールアドレス"
    />
    <basicInput
      v-model="signInData.password"
      cls="login"
      type="password"
      placeholder="パスワード"
    />
    <basicButton class="login_btn" @emitClick="signIn">ログイン</basicButton>

    <span class="foget_pass_btn" @click="passWordReset">パスワードをお忘れの方はこちら</span>

    <linkButton cls="regist_btn" linkTo="/signUp" text="新規登録" />
  </main>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicInput from "~/components/BasicInput";

// その他
import Cookies from "universal-cookie";

export default {
  components: { linkButton, basicInput },
  data: () => ({
    signInData: {
      email: "",
      password: ""
    }
  }),
  methods: {
    signIn() {
      this.$store.dispatch("auth/signInAction", this.signInData);
    },

    passWordReset() {
      this.$router.push("/signIn/passWordReset");
    }
  },
  head() {
    return {
      title: "ログイン | ショクタメ"
    };
  }
};
</script>

<style scoped>
main {
  height: 100vh;
}
.logo {
  margin-top: 50px;
  margin-bottom: 100px;
}
.logo > img {
  width: 150px;
}

.foget_pass {
  width: 90%;
}
.foget_pass_p {
  color: #707070;
  padding: 20px 0;
  text-align: center;
}
.foget_pass_btn {
  color: #707070;
  margin-bottom: 50px;
  cursor: pointer;
}

@media screen and (max-width: 960px) {
  main {
    margin-top: 150px;
  }
}
@media screen and (max-width: 560px) {
  main {
    margin-top: 50px;
  }
}
</style>