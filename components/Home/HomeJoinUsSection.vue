<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <h5 class="mb-5">{{ title }}</h5>
        <div v-html="descriptionHtml" />
        <social-icons-bar />
      </div>
    </div>
  </div>
</template>

<script>
  import SocialIconsBar from '../Shared/SocialIconsBar'

  export default {
    components: {
      SocialIconsBar
    },
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
