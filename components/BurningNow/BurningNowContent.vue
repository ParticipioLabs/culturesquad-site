<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <div v-html="contentHtml" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      contentHtml: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
