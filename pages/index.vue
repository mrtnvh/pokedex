<template>
  <PokemonGrid :items="list" />
</template>

<script lang="ts">
import Vue from 'vue'
import startCase from 'lodash/startCase'
import PokemonGrid from '~/components/PokemonGrid.vue'

const BASE_SPRITE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

export default Vue.extend({
  components: {
    PokemonGrid
  },
  async asyncData({ app }) {
    const { data } = await app.$api.listPokemons(0, 1000)
    return {
      list: data.results?.map((pokemon, index) => ({
        ...pokemon,
        id: index,
        image: `${BASE_SPRITE}${index + 1}.png`,
        name: startCase(pokemon.name)
      }))
    }
  }
})
</script>
