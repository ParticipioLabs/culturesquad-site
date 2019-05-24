<template>
  <div class="container">
    <div class="row mx-auto py-3 d-flex align-items-center hero__container">
      <div class="col-sm-12 col-lg-8 text-left hero__text">
        <div class="hero__text__inner" />
      </div>
      <div class="col-sm-12 col-lg-4 hero__buttons pl-lg-5">
        <div class="hero__buttons__inner">
          <b-button
            class="w-100 mb-4"
            variant="light"
            href="/burning-now"
            size="lg"
            type="link">
            Burning now
          </b-button>

          <b-button
            class="w-100"
            variant="light"
            href="https://edgeryders.eu/c/culture-squad"
            size="lg"
            type="link">
            Join the forum
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeroContent",
    data() {
      return {
        pageHeaderTitle: 'Culture for social change'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    &__container {
      max-width: 920px;
    }

    @keyframes pushUp {
      0% {
        transform: translateY(30px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes pullDown {
      0% {
        transform: translateY(-30px);
      }
      100% {
        transform: translateY(0);
      }
    }

    &__text {
      &__inner {
        animation-name: pullDown;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;

        h1 {
          color: white;
        }
      }
    }

    &__buttons {
      position: relative;

      @media only screen and (max-width: 990px) {
        border-left: none;
        border-top: 1px solid #fff;
        margin-top: 20px;
        padding-top: 30px;
      }

      @media only screen and (min-width: 990px) {
        border-left: 1px solid #fff;
      }

      &__inner {
        animation-name: pushUp;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
      }
    }
  }
</style>
