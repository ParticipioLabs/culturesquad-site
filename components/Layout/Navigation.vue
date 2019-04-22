<template>
  <b-navbar
    :sticky="isSticky"
    :class="{'navigation--hero': !isSticky, 'navigation--animate-down': latestSwitch === 'toSticky'}"
    class="navigation"
    toggleable="xs">
    <div
      :class="{'navigation__hero-container': !isSticky}"
      class="container-fluid">
      <b-navbar-brand
        class="navigation__logo"
        to="/">
        {{ websiteName }}
      </b-navbar-brand>

      <div
        class="navigation__menu-link"
        @click="expandMenu = true">
        <span class="navigation__menu-link__text mr-2">Menu</span>
        <i class="fas fa-bars"/>
      </div>

      <b-navbar-nav
        v-on-clickout="() => expandMenu = false"
        :class="{expand: expandMenu}">

        <a
          class="navigation__close"
          @click="expandMenu = false">
          &nbsp;&nbsp;
        </a>

        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/burning-now">Burning now</b-nav-item>
        <b-nav-item to="/team">Team</b-nav-item>

        <b-button
          href="https://edgeryders.eu/c/culture-squad"
          class="mt-3 mb-3"
          variant="primary"
          type="link"
          size="lg">
          Join the forum
        </b-button>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
import { directive as onClickout } from 'vue-clickout'
const stickyNavBreakpoint = 450;

export default {
  directives: {
    onClickout: onClickout
  },
  props: {
    sticky: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      expandMenu: false,
      stickyOverride: null,
      latestSwitch: null,
      edgerydersUrl: process.env.edgerydersUrl,
      websiteName: process.env.websiteName
    }
  },
  computed: {
    isSticky () {
      if (this.stickyOverride !== null) {
        return this.stickyOverride;
      }
      return this.sticky;
    }
  },
  mounted () {
    if (process.client && !this.sticky) {
      this.toggleNavStyle();
      window.addEventListener('scroll', this.toggleNavStyle);
    }
  },
  destroyed () {
    if (process.client && !this.sticky) {
      window.removeEventListener('scroll', this.toggleNavStyle);
    }
  },
  methods: {
    toggleNavStyle() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop <= stickyNavBreakpoint && this.latestSwitch !== 'toHero') {
        this.stickyOverride = false;
        this.latestSwitch = 'toHero';
      } else if (scrollTop > stickyNavBreakpoint && this.latestSwitch !== 'toSticky') {
        this.stickyOverride = true;
        this.latestSwitch = 'toSticky';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation {
    background-color: $white;
    border-bottom: solid 1px rgba(144, 144, 144, 0.2);

    &--animate-down {
      @keyframes pullDown {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0);
        }
      }

      animation-name: pullDown;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
    }

    &__logo {
      // height: 100%;
      // max-height: 40px;
      // width: auto;
      color: #707070;
      font-size: 1.1rem;

      &:hover {
        color: #707070;
      }
    }

    &--hero {
      background-color: transparent;
      position: absolute;
      width: 100%;
      color: $white;
      border: 0;
      padding-top: 3rem;
    }

    &--hero &__logo {
      color: $white;

      &:hover {
        color: $white;
      }
    }

    &__hero-container {
      max-width: 90%;
      border-bottom: solid 1px $white;
      padding-bottom: 0.8rem;
    }

    &__menu-link {
      cursor: pointer;
      text-transform: uppercase;

      &__text {
        letter-spacing: 0.1rem;
      }
    }

    &__close {
      background-image: url("../../assets/close.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: top right;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      border: 0;
      color: #999999;
      cursor: pointer;
      display: block;
      height: 4rem;
      text-align: right;
      width: 6rem;
      position: absolute;
      right: 0;
      top: 0;
    }

    /deep/ {
      .navbar-nav {
        position: fixed;
        background-color: $white;
        z-index: 10002;
        right: 0;
        top: 0;
        min-height: 100vh;
        height: 100%;
        min-width: 280px;
        max-width: 80%;
        width: 25rem;
        padding: $grid-gutter-width;
        padding-top: $grid-gutter-width * 2;
        border-left: solid 1px rgba(144, 144, 144, 0.2);
        visibility: hidden;
        transform: translateX(100%);
        transition: transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;

        &.expand {
          transform: translateX(0);
          visibility: visible;
          box-shadow: 0 0 2em 0 rgba(0, 0, 0, 0.05);
        }

        .nav-link {
          font-size: 1.25rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .nav-item {
          border-bottom: solid 1px rgba(144, 144, 144, 0.2);

          &:last-of-type {
            border-bottom: 0;
          }
        }
      }
    }
  }
</style>
