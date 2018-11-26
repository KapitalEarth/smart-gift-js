<template>
  <button class="button" :disabled="disabled || loading"><slot></slot></button>
</template>

<script>
export default {
  name: 'Button',
  props: ['disabled', 'loading'],
}
</script>

<style lang="scss" scoped>
.button {
  font-size: $font-size-sm;
  border: 0;
  background: #FFF;
  border: 1px solid $gray-color;
  color: $dark-color;
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  padding: 0 16px;
  cursor: pointer;
  outline: 0;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  align-items: center;
  display: inline-flex;

  &:hover {
    border: 1px solid $button-color;
    background: $button-color;
    color: #FFF;
  }

  &:active {
    border: 1px solid $button-color-dark;
    background: $button-color-dark;
    color: #FFF;
  }
}
</style>

