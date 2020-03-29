<template>
  <div class="p-3">
    <h1 class="text-6xl mb-3 font-black uppercase">Pokedex</h1>
    <ul :class="$style.grid">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="text-center bg-gray-200 flex flex-col justify-center items-center p-3"
      >
        <img :src="item.image" :alt="item.name" />
        <div>{{ item.name }}</div>
      </li>
    </ul>
    <div>
      <h2 class="text-3xl mb-3 font-black uppercase">List</h2>
      <pre
        class="bg-gray-800 text-gray-100 p-3 font-mono"
      ><code>{{ JSON.stringify(list, null, 2) }}</code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ app }) {
    const { data } = await app.$api.listPokemons()

    return {
      // @ts-ignore
      list: data.results
    }
  }
})
</script>

<style module>
.grid {
  display: grid;
  gap: theme('spacing.6');
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0;
  margin: 0 0 3rem 0;
}
</style>
