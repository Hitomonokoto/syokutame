<template>
  <main>
    <form class="regist_form">
      <dl>
        <dt>
          <baseText class="input_item" size="12px" :isWeight="true">ニックネーム</baseText>
        </dt>
        <dd>
          <baseInput cls="regist_type2" type="text" v-model="nickname" />
        </dd>
      </dl>
      <dl>
        <dt>
          <baseText class="input_item" size="12px" :isWeight="true">メールアドレス</baseText>
        </dt>
        <dd>
          <baseInput
            cls="regist_type2"
            type="email"
            v-model="email"
            id="email"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <baseText class="input_item" size="12px" :isWeight="true">パスワード</baseText>
        </dt>
        <dd>
          <baseInput
            cls="regist_type2"
            type="password"
            v-model="password"
            id="password"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <baseText class="input_item" size="12px" :isWeight="true">パスワード（確認用）</baseText>
        </dt>
        <dd>
          <baseInput
            cls="regist_type2"
            type="password"
            v-model="passwordCheck"
            id="passwordCheck"
          />
        </dd>
      </dl>
    </form>
    <ErrorMessage
      v-if="errorType!==0"
      class="error_text"
      :errorType="errorType"
    />
    <baseButton cls="regist_btn" @emitClick="signUp">登録</baseButton>
  </main>
</template>



<script>
import ErrorMessage from "~/components/ErrorMessage";

export default {
  components: { ErrorMessage },

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

.input_item {
  margin-bottom: 5px;
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
