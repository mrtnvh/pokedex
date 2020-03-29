<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="bg-gray-200 flex-grow">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/App/AppHeader.vue'

export default Vue.extend({
  components: {
    AppHeader
  }
})
</script>
