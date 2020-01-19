<template>
  <main>
    <baseImage
      class="main_img"
      :src="Farmers.farmer.fields.mainImage.fields.file.url"
      alt
    />
    <div class="top_area">
      <baseButton v-if="!isFollow" cls="follow_btn" @emitClick="follow">フォローする</baseButton>
      <baseButton v-if="isFollow" cls="followed_btn" @emitClick="follow">フォロー中</baseButton>
    </div>
    <div class="index">
      <baseButton @emitClick="openStory" :isOpen='isStory'>Story</baseButton>
      <baseButton @emitClick="openDiary" :isOpen='isDiary'>Diary</baseButton>
      <baseButton @emitClick="openGift" :isOpen='isGift'>Gift</baseButton>
    </div>
    <div class="contents_area" v-show="isStory">
      <story :content="Farmers.farmer.fields.story" />
    </div>
    <div class="contents_area" v-show="isDiary">
      <timeline />
    </div>
    <div class="contents_area" v-show="isGift">
      <products v-if="Products.productsByfarmer.length" />
    </div>
  </main>
</template>

<script>
import story from "~/components/farmer&product/Story";
import products from "~/components/farmer&product/Products";
import timeline from "~/components/farmer&product/Timeline";
import { mapState } from "vuex";

export default {
  components: {
    story,
    products,
    timeline
  },
  data() {
    return {
      products: [],
      isStory: true,
      isDiary: false,
      isGift: false,
      isFollow: false
    };
  },
  async fetch({ params, store }) {
    await store.dispatch("farmers/getFarmerAction", params);
  },
  async created() {
    this.$store.dispatch(
      "products/getProductsByfarmerAction",
      this.Farmers.farmer.fields.businessId
    );
    this.$store.dispatch("timeline/getPostsAction", {
      business_id: this.Farmers.farmer.fields.businessId,
      timeline_type: "single"
    });
    if (this.Login.token) {
      await this.$store.dispatch(
        "farmers/getFollowerAction",
        this.Login.user.user_id
      );
      if (this.Farmers.follower.indexOf(this.Farmers.farmer.sys.id) >= 0) {
        this.isFollow = true;
      }
    }
  },
  methods: {
    follow() {
      if (!this.Login.token) {
        return;
      }
      if (this.Farmers.follower.indexOf(this.Farmers.farmer.sys.id) >= 0) {
        this.$store.dispatch("farmers/quitFollowAction", {
          farmer_id: this.Farmers.farmer.sys.id,
          user_id: this.Login.user.user_id
        });
        this.isFollow = false;
      } else {
        this.$store.dispatch("farmers/followAction", {
          farmer_id: this.Farmers.farmer.sys.id,
          user_id: this.Login.user.user_id
        });
        this.isFollow = true;
      }
    },
    openStory() {
      this.isStory = true;
      this.isDiary = false;
      this.isGift = false;
    },
    openDiary() {
      this.isStory = false;
      this.isDiary = true;
      this.isGift = false;
    },
    openGift() {
      this.isStory = false;
      this.isDiary = false;
      this.isGift = true;
    }
  },
  computed: mapState({
    Farmers: state => state.farmers,
    Products: state => state.products,
    Login: state => state.auth
  }),
  head() {
    return {
      title: this.Farmers.farmer.fields.farmName + " | ショクタメ"
    };
  }
};
</script>

<style lang='scss' scoped>
.top_area {
  width: 80%;
  position: relative;
}
.contents_area {
  width: 100%;
  display: flex;
  justify-content: center;
}

.index {
  width: 100%;
  display: flex;
  margin-bottom: 50px;
  border-bottom: 1px solid $border;
  position:sticky;
  top:50px;
}

.contents_area {
  width: 100%;
}

@media screen and (min-width: 960px) {
}
</style>
