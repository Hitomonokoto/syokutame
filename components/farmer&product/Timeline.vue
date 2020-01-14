<template>
  <div class="timeline">
    <h2 class="home_title">Diary</h2>
    <div class="line_area">
      <hr class="line" />
      <p class="home_sub_title">日々を楽しむ</p>
      <hr class="line" />
    </div>
    <div class="post_btn" v-if="isPost_btn && auth.user">
      <div v-if="farmers.farmer">
        <basicButton
          cls="post_btn"
          v-if="auth.user.farmer_id == farmers.farmer.sys.id"
          @emitClick="post"
        >Diaryを書く</basicButton>
      </div>
    </div>

    <postList
      v-if="isTimeline"
      @post="post"
      @post_edit="post_edit"
      :posts="timeline.PostsSingle"
      timeline_type="single"
    />
    <postForm v-if="isPost" @emitBack="postBack" timeline_type="single" />
    <postEditForm
      v-if="isPostEdit"
      @editBack="editBack"
      :post_data="this.post_data"
      timeline_type="single"
    />
  </div>
</template>



<script>
// コンポーネント
import postList from "~/components/timeline/PostList";
import postForm from "~/components/timeline/PostForm";
import postEditForm from "~/components/timeline/PostEditForm";

// その他
import { mapState } from "vuex";

export default {
  components: { postList, postForm, postEditForm },
  data() {
    return {
      isPost_btn: true,
      isTimeline: true,
      isPost: false,
      isPostEdit: false,
      post_data: "",
      ttt: null
    };
  },
  methods: {
    post() {
      this.isTimeline = false;
      this.isPost = true;
      this.isPost_btn = false;
    },
    postBack() {
      this.isPost = false;
      this.isTimeline = true;
      this.isPost_btn = true;
    },
    editBack() {
      this.isTimeline = true;
      this.isPostEdit = false;
      this.isPost_btn = true;
    },
    post_edit(post_data) {
      this.post_data = post_data;
      this.isPostEdit = true;
      this.isTimeline = false;
      this.isPost_btn = false;
    }
  },
  computed: mapState({
    farmers: state => state.farmers,
    timeline: state => state.timeline,
    auth: state => state.auth
  })
};
</script>



<style scoped>
.line_area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.line {
  width: 50px;
  margin: 0 10px;
}
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>