<template>
  <PokemonGrid :items="list" />
</template>

<script lang="ts">
import Vue from 'vue'
import PokemonGrid from '~/components/PokemonGrid.vue'
import { POKEMON_CONSTANTS } from '~/store/pokemon'

export default Vue.extend({
  components: {
    PokemonGrid
  },
  async fetch() {
    await this.$store.dispatch(`pokemon/${POKEMON_CONSTANTS.LIST_FETCH}`)
  },
  computed: {
    list() {
      return this.$store.getters[
        `pokemon/${POKEMON_CONSTANTS.LIST_FILTERED_BY_QUERY}`
      ]
    }
  }
})
</script>
