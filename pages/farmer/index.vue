<template>
  <main>
    <section class="page_info">
      <p class="sub_title">豊さを繋ぐひと</p>
      <p class="description">価値だけでは表現することの出来ない"モノの価値"。夢を描く素敵な方々を紹介致します。</p>
    </section>
    <div class="farmers">
      <nuxt-link
        v-for="(farmer, index) in this.farmers.farmers"
        :to="'/farmers/farmer/'+farmer.sys.id"
        class="farmer"
        :key="index"
      >
        <UserIcon
          cls="farmers_page_farmer_icon"
          :url="farmer.fields.farmerIcon.fields.file.url"
        />
        <UserName cls="farmers_page_farm_name" :name="farmer.fields.farmName" />
      </nuxt-link>
    </div>
  </main>
</template>



<script>
//コンポーネント
import UserIcon from "~/components/UserIcon";
import UserName from "~/components/userName";

//その他
import { mapState } from "vuex";

export default {
  components: {
    UserIcon,
    UserName
  },
  async fetch({ store }) {
    await store.dispatch("farmers/getFarmersAction");
  },
  head: {
    title: "生産者紹介"
  },
  computed: mapState({ farmers: "farmers" }),
  head() {
    return {
      title: "創り手一覧 | ショクタメ"
    };
  }
};
</script>



<style scoped>
.farmers {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.farmer {
  display: block;
  width: 50%;
  padding: 10px;
}

@media screen and (min-width: 560px) {
  .farmer {
    width: 33.33%;
  }
}

@media screen and (min-width: 960px) {
  .farmer {
    width: 25%;
  }
}
</style>
