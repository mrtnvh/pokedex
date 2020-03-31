<template>
  <div :class="$style.grid">
    <div
      v-for="({ image, name }, index) in items"
      :key="index"
      class="text-center bg-white flex flex-col justify-center items-center p-4 shadow-lg rounded-md"
    >
      <img :src="image" :alt="name" loading="lazy" width="96" height="96" />
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
