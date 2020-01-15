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

.farmers_page_farm_name {
  text-align: center;
  padding: 5px 0px;
}

.gifts_page_gift_name {
  text-align: center;
  padding: 5px 0px;
}

.gifts_page_farmer_name {
  margin-left: 50px;
  padding: 5px 0px;
  font-size: 14px;
}

.global_nav_user_name {
  display: none;
  margin: auto 0px;
}

.input_item {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
}

@media screen and (min-width: 960px) {
  .global_nav_user_name {
    display: inline;
  }
}
</style>