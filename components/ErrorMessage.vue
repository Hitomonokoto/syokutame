<template>
  <div>
    <p v-if="errorType == 1" class="basic">未入力項目があります。</p>
    <p v-if="errorType == 2" class="basic">パスワードは8文字以上に設定してください。</p>
    <p
      v-if="errorType == 3"
      class="basic"
    >パスワードは「半角英小文字」「半角英大文字」「数字」をそれぞれ1文字以上含める必要があります。</p>
    <p v-if="errorType == 4" class="basic">パスワードに誤りがあります。</p>
    <p v-if="errorType == 5" class="basic">メールアドレスまたはパスワードに誤りがあります。</p>
    <p v-if="errorType == 6" class="basic">※このメールアドレスはすでに登録されています。</p>
    <p
      v-if="errorType == 7"
      class="basic"
    >※なんらかの理由で登録ができませんでした。お手数おかけしますが再度ご入力お願いします。ご不明な点がございましたらお気軽にお問い合わせください。</p>
  </div>
</template>

<script>
export default {
  props: {
    errorType: {
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
.basic {
  font-size: 14px;
  color: $danger;
}
</style>