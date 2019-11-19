<template>
  <main>
    <input v-model="email" type="email" placeholder="メールアドレス" />
    <basicButton @emitClick="customerRecover">送信</basicButton>
  </main>
</template>

<script>
export default {
  components: {},
  data: () => ({
    email: ""
  }),
  methods: {}
};
</script>

<style scoped>
</style>