import { Plugin } from '@nuxt/types'
import {
  DefaultApiFactory,
  DefaultApi
} from '../node_modules/pokeapi-sdk-typescript-axios/src'

declare module 'vue/types/vue' {
  interface Vue {
    $api: DefaultApi
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: DefaultApi
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: DefaultApi
  }
}

const ApiPlugin: Plugin = ({ $axios, env }, inject) => {
  const api = DefaultApiFactory(undefined, env.apiBaseUrl, $axios)
  inject('api', api)
}

export default ApiPlugin
