<template>
  <div 
    class="container p-4" 
  >
    <div class="row">
      <div class="col">
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

<style scoped>

</style>
