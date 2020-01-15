<template>
  <main>
    <section v-if="!isPostForm && !isPostEditForm" class="page_info">
      <baseText class="page_title" :isWeight="true">日々を楽しむ。</baseText>
      <baseText
        class="description"
        size="14px"
      >価値観を共有する詰め合わせを提案致します。お気に入りの生産者と一緒に夢を描きましょう。</baseText>
    </section>
    <basicButton
      v-if="!isPostForm && !isPostEditForm"
      cls="post_btn"
      @emitClick="post"
    >Diaryを書く</basicButton>
    <postList
      v-if="!isPostForm && !isPostEditForm"
      :posts="timeline.posts"
      timeline_type="all"
      @editPost="editPost"
    />
    <postForm v-if="isPostForm" @back="back" timeline_type="all" />
    <postEditForm
      v-if="isPostEditForm"
      @back="back"
      :edit_data="this.edit_data"
      timeline_type="all"
    />
  </main>
</template>

<script>
import postList from "~/components/timeline/PostList";
import postForm from "~/components/timeline/PostForm";
import postEditForm from "~/components/timeline/PostEditForm";
// その他
import { mapState } from "vuex";
export default {
  components: {
    postList,
    postForm,
    postEditForm
  },
  async fetch({ store }) {
    await store.dispatch("timeline/getPostsAction", { timeline_type: "all" });
  },
  data() {
    return {
      isPostForm: false,
      isPostEditForm: false,
      edit_data: {}
    };
  },
  methods: {
    post() {
      this.isPostForm = true;
    },
    editPost(post_data) {
      this.edit_data = post_data;
      this.isPostEditForm = true;
    },
    back() {
      this.isPostForm = false;
      this.isPostEditForm = false;
    }
  },
  head: {
    title: "生産者紹介"
  },
  computed: {
    ...mapState({
      timeline: state => state.timeline
    })
  },
  head() {
    return {
      title: "ダイアリー | ショクタメ"
    };
  }
};
</script>

<style scoped>
@media screen and (min-width: 560px) {
}

@media screen and (min-width: 960px) {
}
</style>