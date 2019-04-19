<template>
  <div>
    <hero
      id="heroElement"
      :extend="true"
      class="hero">
      <home-hero-content />
    </hero>

    <!--First homepage section-->
    <grey-section>
      <home-first-section
        :title="firstSectionTitle"
        :description-html="firstSectionParagraphDescription"/>
      <google-map />
    </grey-section>

    <!--Team homepage section-->
    <white-section>
      <home-team-section
        :title="teamSectionTitle"
        :description-html="teamSectionParagraphDescription"/>
    </white-section>

    <!--Meetup dates homepage section-->
    <grey-section>
      <home-events-section :events="events"/>
    </grey-section>

    <!--Featured work homepage section-->
    <grey-section>
      <home-featured-work-section
        :featured-work="featuredWork" />
    </grey-section>

    <!--Featured content homepage section-->
    <white-section>
      <home-featured-content-section :featured-content="featuredContent"/>
    </white-section>

    <!--Join us homepage section-->
    <grey-section>
      <home-join-us-section
        :title="joinUsSectionTitle"
        :description-html="joinUsSectionParagraphDescription"/>
    </grey-section>
  </div>
</template>

<script>
import Hero from '../components/Layout/Hero';
import GoogleMap from '../components/Shared/GoogleMap';
import SocialIconsBar from '../components/Shared/SocialIconsBar';
import WhiteSection from '../components/Shared/WhiteSection';
import GreySection from '../components/Shared/GreySection';
import HomeHeroContent from '../components/Home/HomeHeroContent';
import HomeFirstSection from '../components/Home/HomeFirstSection';
import HomeTeamSection from '../components/Home/HomeTeamSection';
import HomeEventsSection from '../components/Home/HomeEventsSection';
import HomeFeaturedWorkSection from "../components/Home/HomeFeaturedWorkSection";
import HomeFeaturedContentSection from "../components/Home/HomeFeaturedContentSection";
import HomeJoinUsSection from "../components/Home/HomeJoinUsSection";
import {parseEvents, parseError, sortByDate} from '../modules/utils';

export default {
  layout: 'home',
  components: {
    Hero,
    GoogleMap,
    SocialIconsBar,
    WhiteSection,
    GreySection,
    HomeHeroContent,
    HomeFirstSection,
    HomeTeamSection,
    HomeEventsSection,
    HomeFeaturedWorkSection,
    HomeFeaturedContentSection,
    HomeJoinUsSection
  },
  head: {
    title: 'Home',
    titleTemplate: '%s | WIP'
  },
  async asyncData(context) {
    try {
      // Title and 1 paragraph description
      const homepageFirstSectionDiscourseEndpoint = 'https://edgeryders.eu/t/edgeryders-culture-squad/9591';
      const firstSection = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${homepageFirstSectionDiscourseEndpoint}`);
      const firstSectionTitle = firstSection.data.title;
      const firstSectionParagraphDescription = firstSection.data.post_stream.posts[0].cooked;

      // Team 1 paragraph description + photos
      const homepageTeamSectionDiscourseEndpoint = 'https://edgeryders.eu/t/about-us/9592/2';
      const teamSection = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${homepageTeamSectionDiscourseEndpoint}`);
      const teamSectionTitle = teamSection.data.title;
      const teamSectionParagraphDescription = teamSection.data.post_stream.posts[0].cooked;

      // Meetup dates
      const meetupDatesSectionDiscourseEndpoint = 'https://edgeryders.eu/tags/webcontent-culturesquad-event';
      const meetupDatesSection = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${meetupDatesSectionDiscourseEndpoint}`);
      let events = parseEvents(meetupDatesSection.data.topic_list.topics, 'excerpt');
      events = sortByDate(events, 'eventStartDate', 'desc');

      // Featured work
      const featuredWorkSectionDiscourseEndpoint = 'https://edgeryders.eu/tags/webcontent-culturesquad-featured';
      const featuredWorkSection = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${featuredWorkSectionDiscourseEndpoint}`);
      const featuredWork = featuredWorkSection.data.topic_list.topics;

      // Featured content
      const featuredContentSectionDiscourseEndpoint = 'https://edgeryders.eu/tags/webcontent-culturesquad-post';
      const featuredContentSection = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${featuredContentSectionDiscourseEndpoint}`);
      const featuredContent = featuredContentSection.data.topic_list.topics;

      // Join us
      const joinUsSectionDiscourseEndpoint = 'https://edgeryders.eu/t/join-us/9597';
      const joinUsSection = await context.$axios.get(`${process.env.cacheMiddlewareBaseEndpoint}/get-data?endpoint=${joinUsSectionDiscourseEndpoint}`);
      const joinUsSectionTitle = joinUsSection.data.title;
      const joinUsSectionParagraphDescription = joinUsSection.data.post_stream.posts[0].cooked;

      return {
        firstSectionTitle,
        firstSectionParagraphDescription,
        teamSectionTitle,
        teamSectionParagraphDescription,
        events,
        featuredWork,
        featuredContent,
        joinUsSectionTitle,
        joinUsSectionParagraphDescription
      }
    }
    catch (err) {
      context.error(parseError(err));
    }
  }
}
</script>

<style lang="scss" scoped>
  #home-europe-map {
    height: 300px;
    width: 100%;
  }
</style>

