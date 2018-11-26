<template>
  <div class="smart-gift-spinner"></div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style lang="scss" scoped>
$loading-spinner-color: $gray-color;

.smart-gift-spinner {
  border-radius: 50%;
  animation: smart-gift-spinner-rotation .6s infinite linear;
  width: 32px;
  height: 32px;
  border: 4px transparent solid;
  border-top: 4px $loading-spinner-color solid;
}
@keyframes smart-gift-spinner-rotation {
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
}
</style>
