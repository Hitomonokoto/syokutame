<template>
  <button class="basic" :class="[cls,{opend: isOpen}]" @click="onClick">
    <img v-if="icon" class="icon" :src="'/naviIcon/'+icon+'.svg'" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    cls: {
      type: String
    },
    icon: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      if (this.link) {
        this.$router.push(this.link);
      } else {
        this.$emit("emitClick");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.basic {
  color: white;
  border: none;
  outline: none;
  background-color: $white;
  border-radius: 5px;
}
.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.farmer_page_index {
  color: $black;
  width: calc(100% / 3);
  height: 40px;
  border-radius: 0;
}

.opend {
  color: #b5c97c;
}

/* アイコン入りボタン共通ーーーー */
.about_gift,
.about_shokutame {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
}
/* ーーーーーーーーーーーーーーーー */

.about_shokutame {
  background-color: $pink;
}

.login_btn {
  margin: 10px 0;
  width: 300px;
  padding: 10px 0px;
  background-color: $green;
}

.foget_pass_btn {
  color: #707070;
  background-color: transparent;
  margin-bottom: 50px;
}

.checkout_btn {
  padding: 5px 20px;
  margin-bottom: 20px;
  background-color: $pink;
}
.post_btn {
  padding: 5px 20px;
  margin-bottom: 20px;
  font-size: 14px;
}
.post_edit_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.post_delete_btn {
  background-color: transparent;
  color: red;
  border: none;
  margin: 10px;
}
.post_img_delete_btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: white;
  font-size: 20px;
}
.edit_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.back_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.comment_delete_btn {
  background-color: transparent;
  color: red;
  border: none;
  padding-right: 5px;
}
.update_btn {
  padding: 5px 10px;
}
.send_btn {
  padding: 5px 10px;
}
.info_check_btn {
  padding: 10px 30px;
  margin-bottom: 50px;
}
.info_back_btn {
  padding: 10px 30px;
  background-color: lightgray;
  margin-bottom: 50px;
}
.info_edit_btn {
  padding: 10px 30px;
  background-color: lightgray;
}
.info_send_btn {
  padding: 10px 30px;
}
.regist_btn {
  padding: 10px 30px;
  margin-bottom: 50px;
  background-color: $pink;
}
.logout_btn {
  padding: 5px 10px;
  margin: 10px 20px;
  background-color: lightgray;
}
.user_icon_edit_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.nickname_edit_back_btn {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: lightgray;
}
.nickname_edit_update_btn {
  padding: 5px 10px;
}
.account_edit_btn {
  background-color: transparent;
  color: gray;
}
.basic_info_edit_back_btn {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: lightgray;
}
.basic_info_edit_update_btn {
  padding: 5px 10px;
}
.unsubscribe_back_btn {
  padding: 10px 30px;
  background-color: lightgray;
}
.unsubscribe_btn {
  padding: 10px 30px;
  background-color: rgb(253, 99, 99);
}
.qAndAlink {
  background-color: #efefef;
  font-size: 15px;
  color: #000000;
  cursor: pointer;
  width: 30%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qAndAlink:active {
  background-color: red;
}

.follow_btn {
  position: absolute;
  top: -80px;
  right: 20px;
  background-color: $pink;
  padding: 10px 30px;
}
.followed_btn {
  position: absolute;
  top: -80px;
  right: 20px;
  background-color: #f88ab0;
  padding: 10px 30px;
}
.acount_btn {
  background-color: transparent;
  color: #303030;
  border: none;
  padding-right: 5px;
}

.about_gift {
  background-color: $pink;
}

@media screen and (min-width: 560px) {
}

@media screen and (min-width: 960px) {
  .farmer_page_index {
    &:hover {
      color: $white;
      background-color: $green;
    }
  }

  .opend {
    &:hover {
      color: $green;
      background-color: $white;
    }
  }
}
</style>