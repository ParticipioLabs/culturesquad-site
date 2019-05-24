<template>
  <div>
    <hero>
      <h2>{{ pageHeaderTitle }}</h2>
      <p>the squad in action nowadays</p>
    </hero>

    <!--Meetup dates homepage section-->
    <white-section>
      <burning-now-content :content-html="burningNowHtml"/>
    </white-section>
  </div>
</template>

<script>
import Hero from '../components/Layout/Hero'
import WhiteSection from '../components/Shared/WhiteSection'
import BurningNowContent from '../components/BurningNow/BurningNowContent'
import {getLatestByDate, parseError} from '../modules/utils'

export default {
  layout: 'default',
  components: {
    Hero,
    WhiteSection,
    BurningNowContent
  },
  head: {
    title: 'Culture Squad by Edgeryders',
    titleTemplate: '%s | Burning now'
  },
  data() {
    return {
      pageHeaderTitle: 'Burning now'
    }
  },
  async asyncData(context) {
    try {
      // Burning now page @ Text + photos
      const burningNowDiscourseEndpoint = 'https://edgeryders.eu/tags/webcontent-culturessquad-burning';
      const burningNow = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${burningNowDiscourseEndpoint}`);
      const lastTopic = getLatestByDate(burningNow.data.topic_list.topics, 'created_at');

      const burningNowContentDiscourseEndpoint = `https://edgeryders.eu/t/${lastTopic.slug}/${lastTopic.id}`;
      const burningNowContent = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${burningNowContentDiscourseEndpoint}`);
      const burningNowPost = getLatestByDate(burningNowContent.data.post_stream.posts, 'updated_at');
      const burningNowHtml = burningNowPost.cooked;

      return {
        burningNowHtml
      }
    }
    catch (err) {
      context.error(parseError(err));
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

