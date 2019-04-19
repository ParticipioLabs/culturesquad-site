<template>
  <section class="m-2 p-3 event-card">
    <span>
      <img
        v-if="event.image"
        :src="event.image"
        class="img-fluid rounded mb-4"
        alt="image">
      <img
        v-else
        src="@/assets/no_image_placeholder.png"
        class="img-fluid rounded mb-4"
        alt="image">
    </span>
    <a :href="`/event/${event.slug}/${event.id}`">
      <h4 class="mb-3">{{ event.title }}</h4>
    </a>
    <p class="m-0"><small><strong>Time:</strong> {{ event.time }}</small></p>
    <p class="m-0"><small v-html="event.location"/></p>
    <p class="mt-5"> {{ truncate(event.content, 100, '...') }}</p>
    <a :href="`/event/${event.slug}/${event.id}`"><small>Read more...</small></a>
  </section>
</template>

<script>
  import {truncate} from '../../modules/utils'

  export default {
    props: {
      event: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
    data () {
      return {
        truncate
      }
    }
  }
</script>

<style lang="scss" scoped>
  .event-card {
    border: 1px solid #eaeaea;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: 15rem;
    width: 50rem;
  }
</style>
