<template>
  <div class="edit_basic_data_area">
    <div class="edit_area">
      <dl>
        <dt>名前</dt>
        <dd>
          <basicInput
            cls="edit_user_name"
            type="text"
            v-model="lastName"
            placeholder="姓"
          />
          <basicInput
            cls="edit_user_name"
            type="text"
            v-model="firstName"
            placeholder="名"
          />
        </dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>
          <basicInput cls="edit_email" type="text" v-model="email" />
        </dd>
      </dl>
    </div>

    <div class="actions">
      <basicButton cls="basic_info_edit_back_btn" @emitClick="back">戻る</basicButton>
      <basicButton
        cls="basic_info_edit_update_btn"
        @emitClick="customerUpdate"
      >変更する</basicButton>
    </div>
  </div>
</template>

<script>
// コンポーネント
import basicInput from "~/components/BasicInput";

// その他
import { mapState } from "vuex";

export default {
  components: {
    basicInput
  },
  data() {
    return {
      lastName: this.auth.user.lastName,
      firstName: this.auth.user.firstName,
      email: this.auth.user.email,
      user_id: this.auth.user.user_id
    };
  },
  methods: {
    back() {
      this.$emit("emitClick");
    }
  },
  computed: mapState({
    auth: state => state.auth
  })
};
</script>

<style scoped>
.edit_basic_data_area {
  width: 100%;
  display: flex;
}
dl {
  display: flex;
  align-items: center;
}
dt {
  width: 150px;
}
dd {
  display: flex;
}
.actions {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
</style>