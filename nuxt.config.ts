// https://nuxt.com/docs/api/configuration/nuxt-config

import MyPreset from './assets/theme.js'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss', 'primeicons/primeicons.css', 'primeflex/primeflex.css'],
  modules: ['@primevue/nuxt-module'],
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          cssLayer: true
        }
      }
    }
  }
})
