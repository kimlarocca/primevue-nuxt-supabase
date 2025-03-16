// https://nuxt.com/docs/api/configuration/nuxt-config

import MyPreset from './assets/theme.js'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'PrimeVue Nuxt Supabase Boilerplate', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#0a84ff' },
        { name: 'theme-color', content: '#0a84ff' }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff3904' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        }
      ],
      // script: [
      //   { src: 'https://www.googletagmanager.com/gtag/js?id=G-7GDC05EZKE' }
      // ]
    }
  },


  css: ['primeicons/primeicons.css', '~/assets/scss/main.scss', 'tailwindcss-primeui'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss/global.scss";',
  //       },
  //     },
  //   },
  // },


  modules: ['@primevue/nuxt-module', '@nuxtjs/supabase', '@nuxtjs/tailwindcss'],

  supabase: {
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnaHlmdnZuYmdpcGZrcnhqd2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2Mzk3NjgsImV4cCI6MjA1NzIxNTc2OH0.pysh57Dw9QNtgauMMgJvleJZM4fUgUsF08lOg_lqvxs',
    url: 'https://fghyfvvnbgipfkrxjwia.supabase.co',
    redirect: false,
  },

  tailwindcss: {
    exposeConfig: true,
  },

  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: ".dark-mode",
        }
      }
    }
  }
})