<template>
  <div>
    <hero>
      <h2>{{ eventTitle }}</h2>
    </hero>

    <!--Event details-->
    <white-section>
      <event-details :event="event"/>
    </white-section>
  </div>
</template>

<script>
  import Hero from '../../../../components/Layout/Hero';
  import WhiteSection from '../../../../components/Shared/WhiteSection';
  import EventDetails from '../../../../components/Event/EventDetails';
  import {parseError} from '../../../../modules/utils';

  export default {
    layout: 'default',
    components: {
      Hero,
      WhiteSection,
      EventDetails
    },
    head: {
      title: 'Event details',
      titleTemplate: '%s | WIP'
    },
    async asyncData(context) {
      if(context.params.slug && context.params.id){
        try {
          const eventDetailsDiscourseEndpoint = `https://edgeryders.eu/t/${context.params.slug}/${context.params.id}`;
          const eventDetails = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${eventDetailsDiscourseEndpoint}`);
          const eventTitle = eventDetails.data.title;
          const event = eventDetails.data.post_stream.posts[0];

          return {
            eventTitle,
            event
          }
        }
        catch (err) {
          context.error(parseError(err));
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

