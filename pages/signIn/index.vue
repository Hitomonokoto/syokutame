<template>
  <main>
    <div class="logo">
      <img src="~/assets/mainlogo2.png" alt />
    </div>

    <baseInput
      v-model="email"
      cls="login"
      type="email"
      placeholder="メールアドレス"
      id="email"
    />
    <baseInput
      v-model="password"
      cls="login"
      type="password"
      placeholder="パスワード"
      id="password"
    />
    <ErrorMessage
      v-if="errorType!==0"
      class="error_text"
      :errorType="errorType"
    />
    <baseButton class="login_btn" @emitClick="signIn">ログイン</baseButton>
    <baseButton
      class="foget_pass_btn"
      @emitClick="passWordReset"
    >パスワードをお忘れの方はこちら</baseButton>
    <baseButton cls="about_gift" icon="giftWhite" link="/signUp">新規登録</baseButton>
  </main>
</template>

<script>
import ErrorMessage from "~/components/ErrorMessage";

export default {
  components: { ErrorMessage },
  data() {
    return {
      email: "",
      password: "",
      errorType: 0
    };
  },
  methods: {
    async signIn() {
      // 未入力チェック
      if (!this.email || !this.password) {
        this.errorType = 1;
        return;
      }

      // サインイン処理
      const result = await this.$store.dispatch("auth/signInAction", {
        email: this.email,
        password: this.password
      });

      // 結果処理
      if (!result) {
        this.errorType = 5;
        this.formInit();
      } else {
      }
    },

    formInit() {
      // パスワード入力フォーム初期化
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      this.email = "";
      this.password = "";
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
.logo {
  margin-top: 50px;
  margin-bottom: 100px;
}
.logo > img {
  width: 150px;
}

.error_text {
  padding: 10px 20px;
  margin-bottom: 30px;
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