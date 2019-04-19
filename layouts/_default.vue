<template>
  <div
    id="__content-wrapper">
    <navigation :sticky="!heroNav"/>
    <nuxt id="__content"/>
    <website-footer/>
  </div>
</template>

<script>
  import Navigation from '../components/Layout/Navigation'
  import WebsiteFooter from '../components/Layout/Footer'

  export default {
    components: {
      Navigation,
      WebsiteFooter
    },
    props: {
      heroNav: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  #__nuxt,
  #__layout,
  #__content-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #__content-wrapper {
    position: relative;
  }

  #__content {
    flex: 1;
  }
</style>
