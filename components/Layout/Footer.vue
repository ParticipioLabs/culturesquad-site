<template>
  <footer class="footer container-fluid">
    <div class="container">
      <div class="row mb-4" />
      <div class="row d-flex align-items-center">
        <div class="col-md-12 col-sm-12 mb-3 mb-md-0 text-md-right">
          Built with support from Edgeryders. Find us in Brussels, Bedford, Berlin, Cluj, Edinburgh, Stockholm, Yerevan, and all over the world. <br>Meet us at edgeryders.eu.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .footer{
    color: $white;
    background-image: linear-gradient(to top, rgba(48, 54, 57, 0.2), rgba(48, 54, 57, 0.2)), url("../../assets/banner.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding-top: 7rem;
    padding-bottom: 7rem;

    /deep/ {
      .nav-item {
        &:first-of-type {
          .nav-link {
            padding-left: 0;
          }
        }

        &:last-of-type {
          .nav-link {
            border-right: 0;
          }
        }
      }

      .nav-link {
        color: $white;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 0.85rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        padding-right: 1rem;
        border-right: solid 1px $white;

        &:hover {
          color: $white;
        }

        &:active {
          color: $white;
        }
      }
    }
  }
</style>
