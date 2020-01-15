<template>
  <p
    :class="{
      [color]: true,
      [other]: true,
    }"
    :style="{
    fontSize: size,
    fontWeight: isWeight ? 'bold': 'nomal'
  }"
  >
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ""
    },
    other: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "1rem"
    },
    isWeight: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 960px) {
}
</style>