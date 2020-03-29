<template>
  <pre>
    <code>{{ JSON.stringify(detail) }}</code>
  </pre>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({
    app,
    route: {
      params: { id }
    }
  }) {
    const { data } = await app.$api.retrievePokemon(id)
    return {
      detail: data
    }
  }
})
</script>
