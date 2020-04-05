import Fuse from 'fuse.js'
import startCase from 'lodash/startCase'

const MAX_AMOUNT = 151
const BASE_SPRITE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

export const POKEMON_CONSTANTS = Object.freeze({
  LIST_ASSIGN: 'list$assign',
  LIST_GETTER: 'list$getter',
  LIST_FETCH: 'list$fetch',
  SEARCH_ASSIGN: 'search$assign',
  SEARCH_GETTER: 'search$getter',
  LIST_FILTERED_BY_QUERY: 'list$getter$filtered$query'
})

interface PokemonStore {
  list: string[]
  search: string
}

export const state = (): PokemonStore => ({
  list: [],
  search: ''
})

export const mutations = {
  [POKEMON_CONSTANTS.LIST_ASSIGN](state: PokemonStore, payload: string[]) {
    state.list = payload
  },
  [POKEMON_CONSTANTS.SEARCH_ASSIGN](state: PokemonStore, payload: string) {
    state.search = payload
  }
}

export const actions = {
  async [POKEMON_CONSTANTS.LIST_FETCH]({ commit }) {
    // const response = await this.$api
    //   // @ts-ignore
    //   .listPokemons(0, MAX_AMOUNT)

    // @ts-ignore
    const response = await this.$axios.get('/pokemon.json')

    const payload = response?.data?.results?.map((pokemon, index) => ({
      ...pokemon,
      id: index,
      image: `${BASE_SPRITE}/${index + 1}.png`,
      name: startCase(pokemon.name)
    }))

    commit(POKEMON_CONSTANTS.LIST_ASSIGN, payload)
  },
  [POKEMON_CONSTANTS.SEARCH_ASSIGN]({ commit }, payload: string) {
    commit(POKEMON_CONSTANTS.SEARCH_ASSIGN, payload)
  }
}

export const getters = {
  [POKEMON_CONSTANTS.LIST_GETTER]: ({ list }) => list,
  [POKEMON_CONSTANTS.SEARCH_GETTER]: ({ search }) => search,
  [POKEMON_CONSTANTS.LIST_FILTERED_BY_QUERY]: ({ list, search }) => {
    if (search.length) {
      const fuse = new Fuse(list, { keys: ['name'] })
      return fuse.search(search).map(({ item }) => item)
    }
    return list
  }
}
