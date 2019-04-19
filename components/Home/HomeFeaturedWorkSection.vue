<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
      </div>
      <featured-work-card 
        v-for="work of featuredWork"
        :key="work.id"
        :work="work"/>
    </div>
  </div>
</template>

<script>
  import FeaturedWorkCard from './FeaturedWorkCard';
  import {removeSquareBracketsTag} from '../../modules/utils'

  export default {
    components: {
      FeaturedWorkCard
    },
    props: {
      featuredWork: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        sectionTitle: 'Featured work',
        edgerydersUrl: process.env.edgerydersUrl,
        removeSquareBracketsTag
      }
    }
  }
</script>

<style lang=scss scoped>

</style>
