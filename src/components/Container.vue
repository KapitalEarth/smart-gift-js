<template>
  <div>
    <div class="smart-gift-message-container" v-if="isLoading">
      <loading-spinner />
      <div class="smart-gift-spinner-text">
        <p>Loading Smart Gift...</p>
      </div>
    </div>
    <div class="smart-gift-content-container" v-if="!isLoading && !isLoadingError">
      <div class="smart-gift-message-container" v-if="!isGiftCreated && !disableGiftCreationGuide">
        <p>Smart Gift for {{ giftId }} is not created.</p>
        <p>If you are website administrator, please <a href="#link_todo">click here</a> to create.</p>
      </div>
      <div v-if="isGiftCreated">
        <Button>Reward Author</Button>
      </div>
    </div>
    <div class="smart-gift-message-container" v-if="isLoadingError">
      <p>Oops! Something went wrong when loading Smart Gift.</p>
      <p><a href="javascript:;" @click="load()">Try again</a></p>
    </div>
  </div>
</template>

<script>
import * as API from '@/api.js';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import Button from '@/components/Button.vue';

export default {
  components: {
    LoadingSpinner,
    Button,
  },
  props: ['giftId', 'disableGiftCreationGuide'],
  data: () => ({
    isLoadingError: false,
    isLoading: true,
    isGiftCreated: false,
  }),
  methods: {
    async load() {
      this.isLoadingError = null;
      this.isLoading = true;
      try {
        this.isGiftCreated = await API.isSmartGiftIdCreatedAsync(this.giftId);
      } catch (e) {
        console.error(e);
        this.isLoadingError = true;
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.load();
  },
};
</script>

<style lang="scss" scoped>
.smart-gift {
  &-message-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: $font-size-sm;
    color: $gray-color-dark;
  }
  &-spinner-text {
    margin: 10px 0;
  }
}
</style>
