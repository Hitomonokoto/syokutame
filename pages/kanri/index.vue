<template>
  <div>
    <button @click="getProduct">shopify</button>
    <button @click="getFarmersAction">Farmer</button>
    <div v-for="(product, index) in this.products" :key="index">
      {{product.node.id}}
      {{product.node.title}}
      <p>-------------------</p>
    </div>
    <div v-for="(farmer, index) in this.farmers" :key="index">
      {{farmer.sys.id}}
      {{farmer.fields.farmName}}
      <p>-------------------</p>
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  data() {
    return {
      products: "",
      farmers: ""
    };
  },
  methods: {
    async getFarmersAction() {
      const entries = await client.getEntries({
        content_type: "farmer",
        order: "-sys.createdAt"
      });
      console.log(entries.items);
      this.farmers = entries.items;
    }
  }
};
</script>

<style scoped>
button {
  width: 300px;
  height: 100px;
  background-color: salmon;
}
</style>