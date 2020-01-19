<template>
  <div class="postEditForm">
    <div class="user">
      <baseIcon cls="post_edit_icon" :url="auth.user.user_icon" />
      <div class="name_and_back">
        <p class="nickname">{{name}}</p>
        <div class="actions">
          <baseButton cls="back_btn" @emitClick="back">戻る</baseButton>
          <baseButton cls="update_btn" @emitClick="updatePost">更新する</baseButton>
        </div>
      </div>
    </div>
    <baseInput
      cls="post_title"
      v-model="title"
      type="text"
      placeholder="タイトルを入力してください..."
      fontSize="font-size:20px;"
    />
    <div class="img_area">
      <img class="post_img" :src="this.fileUrl" />
      <baseButton
        v-show="this.fileUrl"
        cls="post_img_delete_btn"
        @emitClick="fileDalete"
      >×</baseButton>
    </div>
    <!-- <adjustedTextarea
      v-model="text"
      :text="this.post_data.text"
      cls="post_text"
      placeholder="本文を入力してください..."
    />-->

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
      <baseButton cls="about_gift" icon="giftWhite">画像を挿入する</baseButton>
      <input
        class="picture"
        id="picture"
        type="file"
        @change="setFiles($event)"
      />
    </label>
    <div class="delete_area">
      <baseButton cls="post_delete_btn" @emitClick="deletePost">投稿を削除する</baseButton>
    </div>
  </div>
</template>

<script>
import adjustedTextarea from "~/components/AdjustedTextarea";

// その他
import { mapState } from "vuex";
import uuid from "uuid";

export default {
  components: {
    adjustedTextarea
  },
  data() {
    return {
      name: this.edit_data.name,
      title: this.edit_data.title,
      text: this.edit_data.text.split("<br>").join("\n"),
      fileName: this.edit_data.fileName,
      fileUrl: this.edit_data.fileUrl
    };
  },
  props: {
    edit_data: {
      type: Object
    },
    timeline_type: {
      type: String
    }
  },
  methods: {
    back() {
      this.$emit("back");
    },
    fileDalete() {
      this.fileUrl = null;
    },
    deletePost() {
      this.$store.dispatch("timeline/deletePostAction", {
        post_data: this.post_data,
        timeline_type: this.timeline_type
      });
      this.emitBack();
    },
    setFiles(e) {
      const file = (e.target.files || e.dataTransfer.files)[0];
      if (file) {
        const fileName = uuid();
        if (this.fileName) {
          this.$store
            .dispatch("timeline/changeUploadImage", {
              oldFileName: this.fileName,
              name: fileName,
              file: file
            })
            .then(url => {
              this.fileName = fileName;
              this.fileUrl = url;
            });
        } else {
          this.$store
            .dispatch("timeline/uploadImage", {
              name: fileName,
              file: file
            })
            .then(url => {
              this.fileName = fileName;
              this.fileUrl = url;
            });
        }
      }
    },
    updatePost() {
      if (this.text == "" && !this.fileName) {
        return;
      }
      let text_html;
      text_html = this.text;
      //一応タグを使えないように置き換える
      text_html = text_html.split("<").join("&lt;");
      text_html = text_html.split(">").join("&gt;");
      //改行を改行タグに置き換える
      text_html = text_html.split("\n").join("<br>");

      this.$store.dispatch("timeline/PostEditAction", {
        post_id: this.post_data.post_id,
        business_id: this.post_data.business_id,
        title: this.title,
        text: text_html,
        fileName: this.fileName,
        fileUrl: this.fileUrl,
        timeline_type: this.timeline_type
      });
      this.emitBack();
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
.postEditForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
.img_area {
  position: relative;
}
.post_img {
  width: 100%;
  display: block;
}
.post_text {
  width: 100%;
  padding: 10px;
  border: none;
}
.user {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}

.user_icon {
  width: 50px;
  border-radius: 10%;
  margin-right: 10px;
}
.name_and_back {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.picture {
  display: none;
}
.delete_area {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
@media screen and (min-width: 560px) {
}
</style>
