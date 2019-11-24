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
            v-model="signUpData.lastName"
            placeholder="姓"
          />
          <basicInput
            cls="regist_type1"
            type="text"
            v-model="signUpData.firstName"
            placeholder="名"
          />
        </dd>
      </dl>
      <dl>
        <dt>ニックネーム</dt>
        <dd>
          <basicInput
            cls="regist_type2"
            type="text"
            v-model="signUpData.nickname"
          />
        </dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>
          <basicInput
            cls="regist_type2"
            type="text"
            v-model="signUpData.email"
          />
        </dd>
      </dl>
      <dl>
        <dt>パスワード</dt>
        <dd class="dd_password">
          <basicInput
            cls="regist_type2"
            type="password"
            v-model="signUpData.password"
          />
          <basicInput
            cls="regist_type2"
            type="password"
            v-model="password_check"
            placeholder="パスワード（確認用）"
          />
        </dd>
      </dl>
    </div>
    <p v-if="error1" class="error_text">※未入力項目があります。</p>
    <p v-if="error2" class="error_text">※パスワードに誤りがあります。</p>
    <basicButton cls="regist_btn" @emitClick="signUp">登録</basicButton>
  </main>
</template>



<script>
// コンポーネント
import basicInput from "~/components/BasicInput";

export default {
  components: { basicInput },
  data: () => ({
    signUpData: {
      lastName: null,
      firstName: null,
      nickname: null,
      email: null,
      password: null
    },
    password_check: null,
    error1: false,
    error2: false
  }),
  methods: {
    signUp() {
      if (this.signUpData.password != this.password_check) {
        this.error1 = false;
        this.error2 = true;
        return;
      }
      if (
        !this.nickname &&
        !this.signUpData.lastName &&
        !this.signUpData.firstName &&
        !this.signUpData.email &&
        !this.signUpData.email
      ) {
        this.error1 = true;
        this.error2 = false;
        return;
      }
      this.$store.dispatch("auth/signUpAction", this.signUpData);
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
.error_text {
  color: red;
  margin-bottom: 20px;
}
@media screen and (max-width: 560px) {
  .regist_form {
    width: 90%;
  }
}
</style>
