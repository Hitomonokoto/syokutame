<template>
  <textarea
    class="basic"
    :class="cls"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    style="font-size:16px;"
  ></textarea>
</template>

<script>
export default {
  props: {
    cls: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
};
</script>

<style scoped>
.basic {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
}
.info {
  width: 600px;
  height: 400px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.unsubscribe {
  width: 600px;
  height: 200px;
  margin-top: 5px;
  margin-bottom: 20px;
}
</style>