<template>
  <main>loading...</main>
</template>



<script>
// コンポーネント

// その他
import { mapState } from "vuex";
import Cookies from "universal-cookie";

export default {
  components: {},
  data() {
    return {};
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>



<style scoped>
</style>
