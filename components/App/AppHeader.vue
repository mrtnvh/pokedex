<template>
  <header class="bg-red-500 text-white p-3 shadow-lg">
    <div :class="$style.grid">
      <div
        id="#sensor"
        class="w-12 h-12 bg-blue-400 rounded-full border-white border-2"
      />
      <div
        id="#red-sensor"
        class="w-3 h-3 bg-red-800 rounded-full border-white border-2"
      />
      <div
        id="#yellow-sensor"
        class="w-3 h-3 bg-yellow-500 rounded-full border-white border-2"
      />
      <div
        id="#green-sensor"
        class="w-3 h-3 bg-green-500 rounded-full border-white border-2"
      />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style module>
.grid {
  display: grid;
  gap: theme('spacing.3');
  grid-template-columns:
    theme('spacing.12') theme('spacing.3') theme('spacing.3')
    theme('spacing.3') 1fr;
}
</style>
