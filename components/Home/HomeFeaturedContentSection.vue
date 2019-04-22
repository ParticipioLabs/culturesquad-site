<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
        <b-list-group>
          <featured-content-post-card
            v-for="post of featuredContent"
            :key="post.id"
            :post="post" />
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
  import FeaturedContentPostCard from './FeaturedContentPostCard';
  import {truncate, formatDate} from '../../modules/utils'

  export default {
    components: {
      FeaturedContentPostCard
    },
    props: {
      featuredContent: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        edgerydersUrl: process.env.edgerydersUrl,
        sectionTitle: 'Jump right into the conversations',
        truncate,
        formatDate
      }
    },
  }
</script>

<style lang="scss" scoped>
  .list-group-item {
    margin-bottom: 1rem;
    padding-left: 0 !important;
    padding-right: 0 !important;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
  }
</style>
