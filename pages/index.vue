<template>
  <main>
    <mainImage cls="top_img" url="/mainImage/top-img.jpg" />
    <div class="beginner_area">
      <nuxt-link to="/aboutMyFarm">
        <basicButton
          v-if="!Uid"
          cls="about_shokutame_btn"
          icon="beginner_w"
        >初めての方はこちら</basicButton>
      </nuxt-link>
    </div>
  </main>
</template>



<script>
import mainImage from "~/components/MainImage";
import { mapGetters } from "vuex";

export default {
  components: {
    mainImage
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["Uid", "User"])
  },
  head() {
    return {
      title: "ショクタメ"
    };
  }
};
</script>



<style scoped>
</style>
