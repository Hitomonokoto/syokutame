<template>
  <main>
    <mainImage cls="top_img" url="/mainImage/top-img.jpg" />
    <div class="beginner_area">
      <basicButton
        v-if="!Uid"
        cls="about_shokutame_btn"
        icon="beginner_w"
        @emitClick="goToAboutSyokutame"
      >初めての方はこちら</basicButton>
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
  },
  methods: {
    goToAboutSyokutame() {
      this.$router.push("/aboutMyFarm");
    }
  }
};
</script>



<style scoped>
</style>
