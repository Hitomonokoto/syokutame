<template>
  <main>
    <div class="logo">
      <img src="~/assets/mainlogo2.png" alt />
    </div>

    <basicInput
      v-model="email"
      cls="login"
      type="email"
      placeholder="メールアドレス"
      id="email"
    />
    <basicInput
      v-model="password"
      cls="login"
      type="password"
      placeholder="パスワード"
      id="password"
    />
    <ErrorMessage :errorType="errorType" />
    <basicButton class="login_btn" @emitClick="signIn">ログイン</basicButton>

    <span class="foget_pass_btn" @click="passWordReset">パスワードをお忘れの方はこちら</span>

    <linkButton cls="regist_btn" linkTo="/signUp" text="新規登録" />
  </main>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicInput from "~/components/BasicInput";
import ErrorMessage from "~/components/ErrorMessage";

export default {
  components: { linkButton, basicInput, ErrorMessage },
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