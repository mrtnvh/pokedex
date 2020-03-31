import { Configuration } from '@nuxt/types'

const isDev = process.env.NODE_ENV !== 'production'

const configuration: Configuration = {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
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

  modules: ['@nuxtjs/dotenv', '@nuxtjs/axios', '@nuxtjs/pwa'],

  pwa: {
    workbox: {
      runtimeCaching: [
        {
          urlPattern:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/.*',
          handler: 'cacheFirst'
        }
      ]
    },
    meta: {
      theme_color: '#F00000'
    }
  },

  plugins: ['~/plugins/api'],

  axios: {
    baseUrl: '/api'
  },

  proxy: {
    '/file/image': {
      pathRewrite: {
        '/file/image': '/'
      },
      target:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
    },
    '/api': {
      pathRewrite: {
        '/api': '/api/v2'
      },
      target: isDev ? 'http://localhost:8000' : 'https://pokeapi.co',
      changeOrigin: true
    }
  }
}

export default configuration
