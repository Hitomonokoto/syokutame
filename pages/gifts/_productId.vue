<template>
  <main>
    <baseImage
      class="main_img"
      :src="Products.product.fields.mainImage.fields.file.url"
    />
    <div class="top_checkout_area">
      <span @click="checkout">
        <baseButton cls="about_gift" icon="giftWhite">購入する</baseButton>
      </span>
    </div>
    <description />
    <farmer />
    <div class="bottom_checkout_area">
      <h3 class="checkout_title">Gift</h3>
      <div class="line_area">
        <hr class="line" />
        <p class="home_sub_title">豊さを味わう</p>
        <hr class="line" />
      </div>
      <p class="checkout_product_name">{{ Products.product.fields.productName }}</p>
      <p class="checkout_price">12,000円/年</p>
      <baseButton cls="checkout_btn" @emitClick="checkout">購入する</baseButton>
    </div>
    <baseButton cls="about_gift" icon="giftWhite">ギフトとは</baseButton>
  </main>
</template>

<script>
import description from "~/components/farmer&product/Description";
import farmer from "~/components/farmer&product/Farmer";
import { mapState } from "vuex";

export default {
  components: {
    description,
    farmer
  },
  data() {
    return {
      product_id: ""
    };
  },
  async fetch({ params, store }) {
    await store.dispatch("products/getProductAction", params);
  },
  async created() {
    this.$store.dispatch(
      "farmers/getFarmerByMyfarmAction",
      this.Products.product.fields.businessId
    );
    c;
    this.product_id = data.data.node.variants.edges[0].node.id;
  },
  methods: {},
  computed: mapState({
    Products: state => state.products
  }),
  head() {
    return {
      title: this.Products.product.fields.productName + " | ショクタメ"
    };
  }
};
</script>

<style scoped>
.top_checkout_area {
  width: 80%;
  position: relative;
}
.bottom_checkout_area {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
  margin-bottom: 50px;
}

.line_area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.line {
  width: 50px;
  margin: 0 10px;
}
.checkout_title {
  margin-top: 20px;
  margin-bottom: 10px;
}
.checkout_product_name {
  margin-bottom: 5px;
}
.checkout_price {
  margin-bottom: 20px;
}
@media screen and (max-width: 960px) {
  .top_checkout_area {
    width: 100%;
  }
}
@media screen and (max-width: 560px) {
  .bottom_checkout_area {
    width: 95%;
  }
}
</style>