<template>
  <p :class="cls">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    cls: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.user_name {
  font-size: 14px;
}

.post_title {
  font-weight: bold;
}
</style>