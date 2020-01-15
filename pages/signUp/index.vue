<template>
  <main>
    <h1 class="page_title">新規登録</h1>
    <basicButton cls="about_gift" icon="giftWhite">ファミリーとは</basicButton>
    <div class="regist_form">
      <dl>
        <dt>
          <baseText cls="input_item">ニックネーム</baseText>
        </dt>
        <dd>
          <basicInput cls="regist_type2" type="text" v-model="nickname" />
        </dd>
      </dl>
      <dl>
        <dt>
          <baseText cls="input_item">メールアドレス</baseText>
        </dt>
        <dd>
          <basicInput
            cls="regist_type2"
            type="email"
            v-model="email"
            id="email"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <baseText cls="input_item">パスワード</baseText>
        </dt>
        <dd>
          <basicInput
            cls="regist_type2"
            type="password"
            v-model="password"
            id="password"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <baseText cls="input_item">パスワード（確認用）</baseText>
        </dt>
        <dd>
          <basicInput
            cls="regist_type2"
            type="password"
            v-model="passwordCheck"
            id="passwordCheck"
          />
        </dd>
      </dl>
    </div>
    <ErrorMessage
      v-if="errorType!==0"
      class="error_text"
      :errorType="errorType"
    />
    <basicButton cls="regist_btn" @emitClick="signUp">登録</basicButton>
  </main>
</template>



<script>
// コンポーネント
import basicInput from "~/components/BasicInput";
import ErrorMessage from "~/components/ErrorMessage";

export default {
  components: { basicInput, ErrorMessage },

  data() {
    return {
      nickname: "",
      email: "",
      password: "",
      passwordCheck: "",
      errorType: 0
    };
  },

  methods: {
    async signUp() {
      // 未入力チェック
      if (
        !this.nickname ||
        !this.email ||
        !this.password ||
        !this.passwordCheck
      ) {
        this.errorType = 1;
        return;
      }

      // 8文字以上かつ半角大文字小文字数字を含む文字列
      const pw_regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

      // パスワード文字数チェック
      if (this.password.length < 8) {
        this.errorType = 2;
        this.passwordInit();
        return;
      }

      // パスワード文字列チェック
      if (!this.password.match(pw_regexp)) {
        this.errorType = 3;
        this.passwordInit();
        return;
      }

      // パスワード二重チェック
      if (this.password != this.passwordCheck) {
        this.errorType = 4;
        this.passwordInit();
        return;
      }

      // サインアップ処理
      const result = await this.$store.dispatch("auth/signUpAction", {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      });

      // 結果処理
      if (result.code == "auth/email-already-in-use") {
        this.errorType = 6;
        this.emailInit();
        this.passwordInit();
      } else {
        this.errorType = 7;
        this.emailInit();
        this.passwordInit();
      }
    },

    emailInit() {
      // メールアドレス入力フォーム初期化
      document.getElementById("email").value = "";
      this.email = "";
    },

    passwordInit() {
      // パスワード入力フォーム初期化
      document.getElementById("password").value = "";
      document.getElementById("passwordCheck").value = "";
      this.password = "";
      this.passwordCheck = "";
    }
  }
};
</script>

<style scoped>
.page_title {
  margin-bottom: 60px;
}

.name_area {
  display: flex;
  justify-content: space-between;
}

.error_text {
  padding: 10px 20px;
  margin-bottom: 30px;
}

@media screen and (max-width: 560px) {
  .regist_form {
    width: 90%;
  }
}
</style>
