<template>
  <header class="bg-red-500 text-white p-3 shadow-lg flex items-center">
    <div :class="[$style.grid, 'flex-grow']">
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
    <div>
      <FileUpload v-model="prediction" />
    </div>
    <div class="text-sm text-right">
      <span class="font-bold">{{ greet }},</span> <br />
      Floris & Adriaan
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import FileUpload from '../FileUpload.vue'

export default Vue.extend({
  components: {
    FileUpload
  },
  data() {
    return {
      prediction: null
    }
  },
  computed: {
    greet() {
      const nowHour = new Date().getHours()

      if (nowHour >= 7 && nowHour < 12) {
        return 'Goedemorgen'
      }

      if (nowHour >= 12 && nowHour < 17) {
        return 'Goedemiddag'
      }

      if (nowHour >= 17 && nowHour < 20) {
        return 'Goedeavond'
      }

      return 'Tijd om te slapen'
    }
  }
})
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
