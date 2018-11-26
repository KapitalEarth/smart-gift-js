import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Vue from 'vue';
import Main from '@/Main.vue';

ScatterJS.plugins(new ScatterEOS());

const SmartGift = {
  DEFAULT_OPTIONS: {
    // Required. The selector or instance of target DOM. SmartGift UI will be appended to the DOM.
    target: null,

    // Required. The unique SmartGift ID.
    giftId: null,

    // Whether SmartGift should be auto loaded according to `SMART_GIFT_OPTIONS`.
    // This is ignored in create().
    autoLoad: false,

    // When SmartGift ID is not initialized, there will be a button to guide for initialization.
    // If this set to false, there will be no such button.
    disableGiftCreationGuide: false,
  },
  create(userOptions = {}) {
    const { target, autoLoad, ...options } = { ...SmartGift.DEFAULT_OPTIONS, ...userOptions };
    if (!target) {
      throw new Error('`target` must be specified.');
    }
    if (!options.giftId) {
      throw new Error('`giftId` must be specified.');
    }
    const instance = new Vue({
      ...Main,
      el: target,
      propsData: { options },
    });
    return instance;
  },
};

export default SmartGift;

// Auto create
if (typeof window === 'object' && window.SMART_GIFT_OPTIONS && window.SMART_GIFT_OPTIONS.autoLoad) {
  SmartGift.create(window.SMART_GIFT_OPTIONS);
}
