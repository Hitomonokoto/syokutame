<template>
  <main>
    <section class="page_info">
      <baseText class="page_title" :isWeight="true">カラダが喜び、心が笑う贈り物。</baseText>
      <baseText
        class="description"
        size="14px"
      >“価値観を共有する”詰め合わせを提案致します。お気に入りの生産者と一緒に夢を描きましょう。</baseText>
    </section>
    <section class="about_button">
      <baseButton cls="about_gift" icon="giftWhite">ギフトとは</baseButton>
    </section>
    <section class="gifts">
      <nuxt-link
        class="gift"
        v-for="(product, index) in this.products.products"
        :to="'/gifts/'+product.sys.id"
        :key="index"
      >
        <baseText class="gift_name">{{ product.fields.productName }}</baseText>

        <img class="gift_img" :src="product.fields.mainImage.fields.file.url" />

        <!-- <div class="gift_header">
          <baseIcon
            cls="gifts_page_farmer_icon"
            :url="product.fields.farmerIcon.fields.file.url"
          />
          <baseText
            class="farmer_name"
            size="14px"
          >{{ product.fields.farmName }}</baseText>
        </div>-->
      </nuxt-link>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  async fetch({ store }) {
    await store.dispatch("products/getProductsAction");
  },
  methods: {},
  computed: mapState({ products: "products" }),
  head() {
    return {
      title: "ギフト一覧 | ショクタメ"
    };
  }
};
</script>

<style scoped>
.gift {
  display: block;
  border-bottom: 1px solid lightgray;
  padding: 20px;
}

.gift:last-child {
  border-bottom: none;
}

.gift_header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.gift_img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}

.gift_name {
  text-align: center;
  margin-bottom: 5px;
}

@media screen and (min-width: 560px) {
  .gifts {
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
  }

  .gift {
    width: 50%;
    border: none;
    padding: 10px;
  }
}

@media screen and (min-width: 960px) {
  .gift {
    width: 33.33%;
  }
}
</style>