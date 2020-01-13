<template>
  <main>
    <section class="page_info">
      <p class="sub_title">日々を楽しむ。</p>
      <p class="description">“価値観を共有する”詰め合わせを提案致します。お気に入りの生産者と一緒に夢を描きましょう。</p>
    </section>
    <section class="gifts">
      <timeline
        :posts="timeline.posts"
        timeline_type="all"
        @post_edit="post_edit"
      />
    </section>
  </main>
</template>

<script>
import timeline from "~/components/timeline/Timeline";
// その他
import { mapState } from "vuex";
export default {
  components: { timeline },
  async fetch({ store }) {
    await store.dispatch("timeline/getPostsAction", { timeline_type: "all" });
  },
  methods: {
    post_edit(post_data) {
      console.log(post_data);
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
.gift {
  display: block;
  border-bottom: 1px solid lightgray;
  padding: 20px;
}

.gift:last-child {
  border-bottom: none;
}

.farmer {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.gift_img {
  width: 100%;
  border-radius: 5px;
}

@media screen and (min-width: 560px) {
  .gifts {
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
  }

  .gift {
    width: 50%;
    border: none;
    padding: 10px;
  }
}

@media screen and (min-width: 960px) {
  .gift {
    width: 33.33%;
  }
}
</style>