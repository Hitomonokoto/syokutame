<template>
  <nuxt-link
    class="nav_link_area"
    :class="{ hover_active: !isOn }"
    :to="linkPath"
  >
    <img
      v-if="!isOn"
      class="icon icon_black"
      :src="'/naviIcon/'+iconBlack+'.svg'"
      alt
    />
    <img
      v-if="!isOn"
      class="icon icon_white"
      :src="'/naviIcon/'+iconWhite+'.svg'"
      alt
    />
    <img
      v-if="isOn"
      class="icon icon_green"
      :src="'/naviIcon/'+iconGreen+'.svg'"
      alt
    />
    <p class="text" :class="{click_active: isOn}">{{ text }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    linkPath: {
      type: String
    },
    iconBlack: {
      type: String
    },
    iconWhite: {
      type: String
    },
    iconGreen: {
      type: String
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      isOn: false,
      path: this.$route.path
    };
  },
  watch: {
    $route() {
      this.path = this.$route.path;
      this.isOn = this.path === this.linkPath ? true : false;
    }
  }
};
</script>

<style scoped>
.nav_link_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.icon {
  width: 25px;
}

.icon_white {
  display: none;
}

.text {
  font-size: 12px;
}

.click_active {
  color: green;
}

@media screen and (min-width: 560px) {
}

@media screen and (min-width: 960px) {
  .nav_link_area {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
  }

  .icon {
    margin-left: 27px;
    margin-right: 21px;
  }

  .text {
    font-size: 16px;
  }

  .hover_active:hover {
    background-color: green;
  }

  .hover_active:hover .icon_black {
    display: none;
  }

  .hover_active:hover .icon_white {
    display: block;
  }

  .hover_active:hover .text {
    color: white;
  }
}
</style>