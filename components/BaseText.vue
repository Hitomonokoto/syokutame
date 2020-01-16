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
    <span
      v-if="link"
      class="link_basic"
      :class="{[color]: true }"
      @click="routerPush"
    >
      <slot />
    </span>
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
  },
  methods: {
    routerPush() {
      if (this.link) {
        this.$router.push(this.link);
      }
    }
  }
};
</script>

<style scoped>
.link_basic {
  cursor: pointer;
}
.black {
  color: black;
}
@media screen and (min-width: 960px) {
}
</style>