<template>
  <div class="postForm">
    <div class="head">
      <div class="user">
        <baseIcon cls="post_form_icon" :url="auth.user.user_icon" />
      </div>
      <div class="actions">
        <baseButton cls="back_btn" @emitClick="back">戻る</baseButton>
        <baseButton cls="send_btn" @emitClick="sendPost">投稿する</baseButton>
      </div>
    </div>
    <baseInput
      cls="post_title"
      v-model="title"
      type="text"
      placeholder="タイトルを入力してください..."
      fontSize="font-size:20px;"
    />
    <img v-if="this.fileUrl" class="post_img" :src="this.fileUrl" />
    <textarea
      v-model="text"
      class="post_text"
      placeholder="本文を入力してください..."
      @input="updateValue"
      style="font-size:16px;"
      ref="adjust_textarea"
      @keydown="adjustHeight"
    ></textarea>
    <label for="picture">
      <iconAndTextButton cls="insert_img" text="画像を挿入する" icon="picture" />
      <input
        class="picture"
        id="picture"
        type="file"
        @change="setFiles($event)"
      />
    </label>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uuid from "uuid";

export default {
  components: {},
  props: {
    timeline_type: {
      type: String
    }
  },
  data() {
    return {
      title: null,
      text: "",
      fileName: null,
      fileUrl: null
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    async setFiles(e) {
      const file = (e.target.files || e.dataTransfer.files)[0];
      if (file) {
        const fileName = uuid();
        if (this.fileName) {
          const url = await this.$store.dispatch("timeline/changeUploadImage", {
            name: fileName,
            file: file
          });
          this.fileName = fileName;
          this.fileUrl = url;
        } else {
          const url = await this.$store.dispatch("timeline/uploadImage", {
            name: fileName,
            file: file
          });
          this.fileName = fileName;
          this.fileUrl = url;
        }
      }
    },
    sendPost() {
      if (!this.title && !this.text && !this.fileName) {
        alert("投稿内容がありません");
        return;
      }
      // if (this.text) {
      //一応タグを使えないように置き換える
      this.text = this.text.split("<").join("&lt;");
      this.text = this.text.split(">").join("&gt;");
      //改行を改行タグに置き換える
      this.text = this.text.split("\n").join("<br>");
      console.log(this.text);
      // }

      this.$store.dispatch("timeline/PostAction", {
        user_id: this.auth.user.user_id,
        business_id: this.auth.user.business_id,
        farmer_id: this.auth.user.farmer_id,
        name: this.auth.user.nickname,
        user_icon: this.auth.user.user_icon,
        title: this.title,
        // text: text_html,
        text: this.text,
        fileName: this.fileName,
        fileUrl: this.fileUrl
      });
      this.$emit("emitBack");
    },
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    },
    adjustHeight() {
      const textarea = this.$refs.adjust_textarea;
      const resetHeight = new Promise(function(resolve) {
        resolve((textarea.style.height = "auto"));
      });
      resetHeight.then(function() {
        textarea.style.height = textarea.scrollHeight + "px";
      });
    }
  },
  computed: mapState({
    auth: state => state.auth
  })
};
</script>

<style scoped>
.postForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.user {
  display: flex;
  align-items: center;
}
.post_text {
  width: 100%;
  padding: 10px;
  border: none;
}
.user_icon {
  width: 50px;
  border-radius: 10%;
  margin-right: 10px;
}
.post_img {
  width: 100%;
}
.picture {
  display: none;
}
@media screen and (min-width: 560px) {
}
</style>
