<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
      </div>
      <div class="event-cards-container d-flex flex-wrap">
        <event-card
          v-for="event of events"
          :key="event.id"
          :event="event"/>
      </div>
    </div>
  </div>
</template>

<script>
  import EventCard from '../Event/EventCard';

  export default {
    components: {
      EventCard
    },
    props: {
      events: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        sectionTitle: 'Events'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .event-cards-container {
    width: calc(100% + 1em);
  }

  .event-cards-container section {
    border-radius: 4px;
    text-align: center;
    width: calc(33.33333% - 1em);
  }

  @media screen and (max-width: 1280px) {

    .event-cards-container section {
      padding: 3em 2em 1em 2em ;
    }

  }

  @media screen and (max-width: 980px) {

    .event-cards-container section {
      width: calc(50% - 1em);
    }

  }

  @media screen and (max-width: 736px) {

    .event-cards-container section {
      padding: 3em 1.5em 1em 1.5em ;
    }

  }

  @media screen and (max-width: 480px) {

    .event-cards-container {
      display: block;
      margin: 0 0 2em 0;
      width: 100%;
    }

    .event-cards-container section {
      margin: 0 0 1em 0;
      width: 100%;
    }

  }

  .event-cards-container section {
    background-color: #ffffff;
    border-bottom: solid 1px #eaeaea;
  }
</style>
