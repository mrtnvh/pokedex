<template>
  <div :class="$style.grid">
    <div
      v-for="({ image, name }, index) in items"
      :key="index"
      class="text-center bg-white flex flex-col justify-center items-center p-4"
    >
      <div class="w-24 h-24">
        <div class="relative pb-1/1 w-full">
          <img
            :src="image"
            :alt="name"
            loading="lazy"
            class="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
      <div class="mt-2 font-bold">{{ name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      required: true,
      type: Array
    }
  }
})
</script>

<style module>
.grid {
  display: grid;
  gap: theme('spacing.4');
  grid-template-columns: repeat(auto-fit, minmax(theme('spacing.48'), 1fr));
  padding: theme('spacing.4');
}
</style>
