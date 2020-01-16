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
    <slot v-if="!link" />
    <nuxt-link v-if="link" :to="link" :class="{[color]: true}">
      <slot />
    </nuxt-link>
  </p>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "black"
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
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.black {
  color: black;
}
@media screen and (min-width: 960px) {
}
</style>