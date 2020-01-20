<template>
  <main>
    <baseImage class="main_img" url="/mainImage/top-img.jpg" />
    <div class="beginner_area">
      <baseButton
        v-if="!Uid"
        cls="about_shokutame"
        icon="beginner_w"
        @emitClick="goToAboutSyokutame"
      >初めての方はこちら</baseButton>
    </div>
  </main>
</template>



<script>
import { mapGetters } from "vuex";

export default {
  components: {},
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
