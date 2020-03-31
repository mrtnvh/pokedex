<template>
  <PokemonGrid :items="list" />
</template>

<script lang="ts">
import Vue from 'vue'
import startCase from 'lodash/startCase'
import PokemonGrid from '~/components/PokemonGrid.vue'

// const BASE_SPRITE = `/file/image`
const BASE_SPRITE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

export default Vue.extend({
  components: {
    PokemonGrid
  },
  async asyncData({ app, error }) {
    const response = await app.$api.listPokemons(0, 1000).catch((err) => {
      error(err)
    })

    return {
      list:
        response &&
        response.data.results?.map((pokemon, index) => ({
          ...pokemon,
          id: index,
          image: `${BASE_SPRITE}/${index + 1}.png`,
          name: startCase(pokemon.name)
        }))
    }
  }
})
</script>
