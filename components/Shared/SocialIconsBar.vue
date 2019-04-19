<template>
  <ul class="social-icons-bar">
    <li class="social-icons-bar__icon">
      <a>
        <i class="fab fa-twitter"/>
      </a>
    </li>
    <li class="social-icons-bar__icon">
      <a>
        <i class="fab fa-facebook"/>
      </a>
    </li>
    <li class="social-icons-bar__icon">
      <a>
        <i class="fab fa-instagram"/>
      </a>
    </li>
    <li class="social-icons-bar__icon">
      <a>
        <i class="fab fa-github"/>
      </a>
    </li>
    <li class="social-icons-bar__icon">
      <a>
        <i class="fab fa-linkedin"/>
      </a>
    </li>
    <li class="social-icons-bar__icon">
      <a>
        <i class="fas fa-envelope"/>
      </a>
    </li>
    <li class="social-icons-bar__icon">
      <a>
        <i class="fab fa-forumbee"/>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .social-icons-bar {
    cursor: default;
    list-style: none;
    padding-left: 0;
    font-size: 1.2rem;

    &__icon {
      display: inline;
      text-align: right;
      cursor: pointer;
      margin-right: 0.5rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
</style>
