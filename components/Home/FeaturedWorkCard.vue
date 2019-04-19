<template>
  <div
    class="d-flex mb-lg-3 mb-sm-5 border-bottom pb-3 flex-wrap w-100">
    <div class="col-lg-6 col-sm-12 mb-3">
      <img
        v-if="work.image_url"
        :src="work.image_url"
        class="img-fluid rounded"
        alt="image">
      <img
        v-else
        src="@/assets/no_image_placeholder.png"
        class="img-fluid rounded"
        alt="image">
    </div>
    <div class="col-lg-6 col-sm-12">
      <h5 class="mb-4">{{ work.title }}</h5>
      <p v-html="removeSquareBracketsTag(work.excerpt)"/>
      <a :href="`${edgerydersUrl}/t/${work.slug}/${work.id}`"><small>Read more...</small></a>
    </div>
  </div>
</template>

<script>
  import {removeSquareBracketsTag} from '../../modules/utils'

  export default {
    props: {
      work: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
    data () {
      return {
        edgerydersUrl: process.env.edgerydersUrl,
        removeSquareBracketsTag
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
