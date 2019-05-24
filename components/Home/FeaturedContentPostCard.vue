<template>
  <b-list-group-item>
    <div class="d-md-flex w-100 justify-content-between">
      <a :href="`${edgerydersUrl}/t/${post.slug}/${post.id}`"><h5 class="mb-1">{{ post.title }}</h5></a>
      <small>{{ formatDate(post.created_at, 'lll') }}</small>
    </div>

    <div
      class="mb-1 mt-3 mt-md-0"
      v-html="truncate(removeSquareBracketsTag(removeHTMLTags(post.excerpt, 300, '...')))"/>
  </b-list-group-item>
</template>

<script>
  import {truncate, formatDate, removeSquareBracketsTag, removeHTMLTags} from '../../modules/utils'

  export default {
    props: {
      post: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
    data () {
      return {
        removeSquareBracketsTag,
        removeHTMLTags,
        edgerydersUrl: process.env.edgerydersUrl,
        truncate,
        formatDate
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
