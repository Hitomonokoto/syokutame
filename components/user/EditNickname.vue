<template>
  <div class="edit_nickname_area">
    <p>新しいニックネームを入力してください。</p>
    <div>
      <baseInput cls="edit_nickname" type="text" v-model="new_nickname" />
    </div>

    <div class="actions">
      <baseButton cls="nickname_edit_back_btn" @emitClick="back">戻る</baseButton>
      <baseButton
        cls="nickname_edit_update_btn"
        @emitClick="changeNickname"
      >変更する</baseButton>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      new_nickname: null,
      user_id: this.auth.user.id
    };
  },
  methods: {
    changeNickname() {
      if (!this.new_nickname) {
        return;
      }
      this.$store.dispatch("auth/changeNicknameAction", {
        new_nickname: this.new_nickname,
        user_id: this.auth.user.id
      });
      this.$emit("emitClick");
    },
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
.edit_nickname_area {
  width: 100%;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>