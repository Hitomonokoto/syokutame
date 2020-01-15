<template>
  <main>
    <section class="page_info">
      <baseText class="page_title" :isWeight="true">豊さを繋ぐひと</baseText>
      <baseText
        class="description"
        size="14px"
      >価値だけでは表現することの出来ない"モノの価値"。夢を描く素敵な方々を紹介致します。</baseText>
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
        <baseText class="farm_name">{{ farmer.fields.farmName }}</baseText>
      </nuxt-link>
    </div>
  </main>
</template>



<script>
import UserIcon from "~/components/UserIcon";
import { mapState } from "vuex";

export default {
  components: {
    UserIcon
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

.farm_name {
  text-align: center;
  padding: 5px 0px;
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
