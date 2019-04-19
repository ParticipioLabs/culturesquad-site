<template>
  <div class="d-flex mb-3 border-bottom pb-3 flex-wrap w-100">
    <div class="col-md-4 col-12 mb-4 mb-md-0">
      <img
        v-if="member.image_url"
        :src="member.image_url"
        class="img-fluid rounded"
        alt="image">
      <img
        v-else
        src="@/assets/no_member_image_placeholder.png"
        class="img-fluid rounded"
        alt="image">
    </div>
    <div class="col-md-8 col-12 align-self-center">
      <h5 class="mb-4">{{ member.title }}</h5>
      <p v-html="removeBeginningSquareBracketsTag(member.excerpt)"/>
    </div>
  </div>
</template>

<script>
  import {removeBeginningSquareBracketsTag} from '../../modules/utils'

  export default {
    props: {
      member: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
    data () {
      return {
        removeBeginningSquareBracketsTag
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
