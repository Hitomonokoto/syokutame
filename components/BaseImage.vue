<template>
  <img class="basic" :src="url" />
</template>



<script>
export default {
  props: {
    url: {
      type: String
    },
    cls: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>



<style scoped>
.basic {
  width: 100%;
  display: block;
}
@media screen and (min-width: 960px) {
}
</style>