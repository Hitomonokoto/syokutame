<template>
  <p :class="cls">永田悠飛</p>
</template>



<script>
export default {
  props: {
    cls: {
      type: String
    }
  }
};
</script>

<style scoped>
.global_nav_user_name {
  display: none;
  margin: auto 0px;
}

@media screen and (min-width: 560px) {
}

@media screen and (min-width: 960px) {
  .global_nav_user_name {
    display: inline;
  }
}
</style>