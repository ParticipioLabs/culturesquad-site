<template>
  <div 
    class="d-flex mb-3 border-bottom pb-3 flex-wrap w-100" 
  >
    <div class="col-md-4 col-12 mb-4 mb-md-0">
      <h5 class="mb-4">{{ member.title }}</h5>
      <img
        v-if="member.post_stream.posts[0].avatar_template"
        :src="'https://edgeryders.eu/' + member.post_stream.posts[0].avatar_template.replace('{size}', '500')"
        class="img-fluid rounded"
        alt="image">
      <img
        v-else
        src="@/assets/no_member_image_placeholder.png"
        class="img-fluid rounded"
        alt="image">
    </div>
    <div 
      class="col-md-8 col-12 align-self-center" 
      v-html="member.post_stream.posts[0].cooked" 
    />
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
