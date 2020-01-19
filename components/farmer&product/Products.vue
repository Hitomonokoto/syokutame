<template>
  <div class="products">
    <h2 class="home_title">Gift</h2>
    <div class="line_area">
      <hr class="line" />
      <p class="home_sub_title">豊さを味わう</p>
      <hr class="line" />
    </div>
    <nuxt-link
      class="product"
      :to="'/products/product/'+products.productsByfarmer[0].sys.id"
    >
      <div class="product_img">
        <img
          :src="products.productsByfarmer[0].fields.mainImage.fields.file.url"
        />
        <baseButton cls="about_gift" icon="giftWhite">購入する</baseButton>
      </div>
    </nuxt-link>
    <P class="product_name">{{products.productsByfarmer[0].fields.productName}}</P>
    <baseButton
      cls="about_gift"
      icon="giftWhite"
      :link="'/products/product/'+products.productsByfarmer[0].sys.id"
    >詳しく見る</baseButton>
    <baseButton cls="about_gift" icon="giftWhite">ギフトとは</baseButton>
  </div>
</template>



<script>
import { mapState } from "vuex";

export default {
  components: {},
  computed: mapState({
    products: state => state.products
  })
};
</script>



<style scoped>
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
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_img {
  width: 50%;
  position: relative;
  margin-bottom: 20px;
}
.product_img > img {
  width: 100%;
  display: block;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.product_name {
  margin-bottom: 30px;
}
@media screen and (max-width: 960px) {
  .product_img {
    width: 60%;
  }
}
@media screen and (max-width: 560px) {
  .product_img {
    width: 80%;
  }
}
</style>