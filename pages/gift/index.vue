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
      <basicButton cls="about_gift" icon="giftWhite">ギフトとは</basicButton>
    </section>
    <section class="gifts">
      <nuxt-link
        class="gift"
        v-for="(product, index) in this.products.products"
        :to="'/gift/'+product.sys.id"
        :key="index"
      >
        <div class="farmer">
          <UserIcon
            cls="gifts_page_farmer_icon"
            :url="product.fields.farmerIcon.fields.file.url"
          />
          <baseText
            class="farmer_name"
            size="14px"
          >{{ product.fields.farmName }}</baseText>
        </div>
        <img class="gift_img" :src="product.fields.mainImage.fields.file.url" />
        <baseText class="gift_name">{{ product.fields.productName }}</baseText>
      </nuxt-link>
    </section>
  </main>
</template>

<script>
import UserIcon from "~/components/UserIcon";
// その他
import { mapState } from "vuex";
export default {
  components: { UserIcon },
  async fetch({ store }) {
    await store.dispatch("products/getProductsAction");
  },
  methods: {},
  head: {
    title: "生産者紹介"
  },
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

.farmer {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.gift_img {
  width: 100%;
  border-radius: 5px;
}

.gift_name {
  text-align: center;
  padding: 5px 0px;
}

.farmer_name {
  margin-left: 50px;
  padding: 5px 0px;
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