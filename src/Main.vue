<template>
  <div class="smart-gift">
    <Container v-bind="options" />
  </div>
</template>

<script>
import Container from '@/components/Container.vue';

export default {
  components: {
    Container,
  },
  props: ['options'],
};
</script>

<style lang="scss">
// Base styles
.smart-gift {
  font-family: $body-font-family;
  font-size: $font-size;

  a {
    color: $link-color;
    outline: none;
    text-decoration: none;

    &:focus,
    &:hover,
    &:active,
    &.active {
      color: $link-color-dark;
      text-decoration: underline;
    }

    &:visited {
      color: $link-color-light;
    }
  }

  p {
    margin: 0 0 $line-height;
  }
}

.smart-gift {
  padding: 20px 0;
}
</style>
