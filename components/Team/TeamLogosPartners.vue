<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <h5 class="mb-5">{{ title }}</h5>
        <div v-html="descriptionHtml" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      descriptionHtml: {
        type: String,
        default: '<template />'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
