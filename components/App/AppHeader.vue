<template>
  <header class="bg-red-500 text-white px-3 shadow-lg flex items-center">
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
    <div class="py-3 mr-6">
      <input
        v-model="query"
        type="search"
        class="text-black py-2 px-3 rounded-md"
        placeholder="Zoeken"
      />
    </div>
    <FileUpload class="mr-12" @input="handleFileUploadInput" />
    <div class="text-sm text-right">
      <span class="font-bold">{{ greet }},</span>
      <br />Floris & Adriaan
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import debounce from 'lodash/debounce'
import { POKEMON_CONSTANTS } from '~/store/pokemon'
const FileUpload = () => import('../FileUpload.vue')

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
    },
    query: {
      get() {
        return this.$store.getters[`pokemon/${POKEMON_CONSTANTS.SEARCH_GETTER}`]
      },
      set: debounce(function(value) {
        // @ts-ignore
        this.$store.dispatch(
          `pokemon/${POKEMON_CONSTANTS.SEARCH_ASSIGN}`,
          value
        )
      }, 250)
    }
  },
  methods: {
    handleFileUploadInput(value) {
      this.query = value || ''
    }
  }
})
</script>

<style module>
.grid {
  display: grid;
  gap: the me('spacing.3');
  grid-template-columns:
    theme('spacing.12') theme('spacing.3') theme('spacing.3')
    theme('spacing.3') 1fr;
}
</style>
