<template>
  <div>
    <img v-if="!link" class="basic" :class="cls" :src="url" />
    <nuxt-link v-if="link" :to="link">
      <img class="basic" :class="cls" :src="url" />
    </nuxt-link>
  </div>
</template>



<script>
export default {
  props: {
    cls: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.global_nav_icon,
.gifts_page_farmer_icon {
  border-radius: 50%;
}

.farmers_page_farmer_icon {
  border-radius: 5px;
}

.gifts_page_farmer_icon {
  width: 40px;
  margin-right: 5px;
}

.farmers_page_farmer_icon {
  width: 100%;
}

.mydata_icon {
  width: 80px;
  border-radius: 5px;
  margin: 10px;
}
.user_page_icon {
  display: block;
  width: 120px;
  border-radius: 5px;
  margin: 5px;
}
@media screen and (max-width: 960px) {
  .user_page_icon {
    width: 120px;
    margin: 4px;
  }
}
@media screen and (max-width: 560px) {
  .user_page_icon {
    width: 60px;
    margin: 3px;
  }
}
.post_icon {
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.global_nav_icon {
  width: 40px;
  margin: 5px;
}
@media screen and (min-width: 960px) {
  .global_nav_icon {
    margin: 5px 10px 5px 20px;
  }
}

.commenter_icon {
  width: 50px;
  border-radius: 50%;
  margin-left: 10px;
}
.commenter_icon_i {
  width: 50px;
  border-radius: 50%;
  margin: 0 10px 20px 10px;
}
.send_comment_icon {
  width: 50px;
  border-radius: 50%;
}
.senb_post_icon {
  display: flex;
  align-items: center;
  width: 50px;
  border-radius: 10%;
}
.post_form_icon {
  width: 50px;
  border-radius: 10%;
  margin-right: 10px;
}
.post_edit_icon {
  width: 50px;
  border-radius: 10%;
  margin-right: 10px;
}
</style>