<template>
  <div class="posts">
    <div class="post" v-for="(post, index) in posts" :key="index">
      <div class="head">
        <nuxt-link :to="'/farmers/farmer/'+post.farmer_id">
          <userIcon cls="post_icon" :url="post.user_icon" />
        </nuxt-link>

        <div class="user_name_and_posted_time">
          <nuxt-link :to="'/farmers/farmer/'+post.farmer_id">
            <baseText cls="user_name">{{ post.name }}</baseText>
          </nuxt-link>

          <p class="posted_time">{{ post.created.seconds | timestampToDate }}</p>
        </div>
        <div class="edit_btn">
          <basicButton cls="post_edit_btn" @emitClick="edit(post)">編集</basicButton>
          <!-- <basicButton
        v-if="this.auth.user_id == user_id"
        cls="post_edit_btn"
        @emitClick="edit"
          >編集</basicButton>-->
        </div>
      </div>

      <div class="title">
        <baseText cls="post_title">{{ post.title }}</baseText>
      </div>

      <div class="image">
        <img :src="post.fileUrl" />
      </div>

      <div class="text" v-html="post.text"></div>

      <div class="reactions">
        <postActions
          @openComments="openComments"
          @closeComments="closeComments"
          :post_id="post.post_id"
          :like_count="post.like_count"
          :comment_count="post.comment_count"
          :timeline_type="timeline_type"
        />
        <comments
          v-if="isComments"
          :post_id="post.post_id"
          :business_id="post.business_id"
          :comments="post.comments"
          :login_user_id="Uid"
          :timeline_type="timeline_type"
        />
      </div>
    </div>
  </div>
</template>



<script>
// コンポーネント
import postActions from "~/components/timeline/PostActions";
import comments from "~/components/timeline/Comments";
import userIcon from "~/components/UserIcon";

// その他
import { mapGetters } from "vuex";

export default {
  components: {
    postActions,
    comments,
    userIcon
  },
  data() {
    return {
      isComments: false,
      isComment_btn: false,
      isLike_btn: false
    };
  },
  props: {
    posts: {
      type: Array
    },
    timeline_type: {
      type: String
    }
  },
  methods: {
    edit(post_data) {
      this.$emit("post_edit", post_data);
    },
    sendComment(payload) {
      this.$emit("sendComment", payload);
    },
    commentDelete(payload) {
      this.$emit("commentDelete", payload);
    },
    openComments(post_id) {
      this.isComments = true;
      this.$store.dispatch("timeline/getCommentsAction", post_id);
    },
    closeComments() {
      this.isComments = false;
    }
  },
  filters: {
    timestampToDate(value) {
      const d = new Date(value * 1000);
      const x = Date.now() - value * 1000;
      if (x < 60000) {
        return "数秒前";
      }
      if (x < 3600000) {
        const y = Math.floor(x / 60000);
        return y + "分前";
      }
      if (x < 86400000) {
        const z = Math.floor(x / 3600000);
        return z + "時間前";
      }
      const month = d.getMonth() + 1;
      const day = d.getDate();
      if (x < 31536000000) {
        return `${month}月${day}日`;
      }
      const year = d.getFullYear();
      return `${year}年${month}月${day}日`;
    }
  },
  computed: {
    ...mapGetters("auth", ["Uid"])
  }
};
</script>



<style scoped>
.posts {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post {
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
}

.post:last-child {
  border-bottom: none;
}
@media screen and (min-width: 560px) {
  .post {
    width: 500px;
  }
}

.head {
  padding: 10px;
  display: flex;
  align-items: center;
}

.edit_btn {
  margin: 0 0 0 auto;
}

.posted_time {
  color: #b5c97c;
  font-size: 12px;
}

.title {
  padding: 10px;
}

.text {
  padding: 10px;
  font-size: 14px;
}

.image > img {
  width: 100%;
  display: block;
}

.reactions {
  padding: 10px;
}
</style>
