import { Configuration } from '@nuxt/types'
import pkg from './package.json'

const isDev = process.env.NODE_ENV !== 'production'
const apiBaseUrl = `${
  isDev ? 'http://localhost:8000' : 'https://pokeapi.co'
}/api/v2`

const configuration: Configuration = {
  modern: true,

  env: {
    apiBaseUrl
  },

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap'
      }
    ]
  },

  loading: { color: '#fff' },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa' /* '@nuxtjs/proxy' */
  ],

  plugins: ['~/plugins/api'],

  pwa: {
    workbox: {
      // dev: true,
      importScripts: ['/sw/custom.js'],
      runtimeCaching: [
        {
          urlPattern: '.*/(_nuxt|file)/.*',
          handler: 'staleWhileRevalidate'
        }
      ]
    },
    meta: {
      theme_color: '#F00000',
      name: pkg.name,
      description: pkg.description,
      appleStatusBarStyle: 'black-translucent'
    }
  },

  axios: {
    baseUrl: apiBaseUrl
  }

  // proxy: {
  //   '/file/image': {
  //     pathRewrite: {
  //       '/file/image': '/'
  //     },
  //     target:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
  //   },
  //   '/api': {
  //     pathRewrite: {
  //       '/api': '/api/v2'
  //     },
  //     target: isDev ? 'http://localhost:8000' : 'https://pokeapi.co',
  //     changeOrigin: true
  //   }
  // }
}

export default configuration
