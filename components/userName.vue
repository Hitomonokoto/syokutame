<template>
  <p :class="cls">{{ name }}</p>
</template>



<script>
export default {
  props: {
    cls: {
      type: String
    },
    name: {
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

.gifts_page_farmer_name {
  margin-left: 50px;
  padding: 5px 0px;
  font-size: 14px;
}

.gifts_page_gift_name,
.farmers_page_farm_name {
  text-align: center;
  padding: 5px 0px;
}

@media screen and (min-width: 560px) {
}

@media screen and (min-width: 960px) {
  .global_nav_user_name {
    display: inline;
  }
}
</style>