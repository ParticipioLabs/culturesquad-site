<template>
  <header
    :class="{'hero--extend': extend}"
    class="container-fluid hero">
    <div class="container">
      <div class="row">
        <div class="col">
          <slot/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      extend: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    color: $white;
    background-color: #303639;
    background-image: linear-gradient(to top, rgba(48, 54, 57, 0.2), rgba(48, 54, 57, 0.2)), url("../../assets/banner.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding: 6rem 0;
    text-align: center;

    &--extend {
      padding-top: 12rem;
    }

    h1, h2, h3, h4, h5, h6 {
      color: $white;
    }
  }
</style>
