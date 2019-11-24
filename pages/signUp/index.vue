<template>
  <main>
    <h1 class="page_title">ファミリー登録</h1>
    <iconAndTextButton cls="about_gift_btn" text="ファミリーとは" icon="gift_pink" />
    <div class="regist_form">
      <dl>
        <dt>お名前</dt>
        <dd class="name_area">
          <basicInput
            cls="regist_type1"
            type="text"
            v-model="lastName"
            placeholder="姓"
          />
          <basicInput
            cls="regist_type1"
            type="text"
            v-model="firstName"
            placeholder="名"
          />
        </dd>
      </dl>
      <dl>
        <dt>ニックネーム</dt>
        <dd>
          <basicInput cls="regist_type2" type="text" v-model="nickname" />
        </dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>
          <basicInput cls="regist_type2" type="email" v-model="email" />
        </dd>
      </dl>
      <dl>
        <dt>パスワード</dt>
        <dd class="dd_password">
          <basicInput
            cls="regist_type2"
            type="password"
            v-model="password"
            id="password"
          />
          <basicInput
            cls="regist_type2"
            type="password"
            v-model="passwordCheck"
            placeholder="パスワード（確認用）"
            id="passwordCheck"
          />
        </dd>
      </dl>
    </div>
    <ErrorMessage :errorType="errorType" />
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
      lastName: "",
      firstName: "",
      nickname: "",
      email: "",
      password: "",
      passwordCheck: "",
      errorType: 0
    };
  },

  methods: {
    signUp() {
      // 未入力チェック
      if (
        !this.nickname ||
        !this.lastName ||
        !this.firstName ||
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

      this.$store.dispatch("auth/signUpAction", this.signUpData);
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
.dd_password {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 560px) {
  .regist_form {
    width: 90%;
  }
}
</style>
