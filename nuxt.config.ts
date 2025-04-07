// https://nuxt.com/docs/api/configuration/nuxt-config

import MyPreset from './assets/theme.js'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Heavy Petting App', // default fallback title
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

  modules: ['@primevue/nuxt-module', '@nuxtjs/supabase', '@nuxtjs/tailwindcss'],

  supabase: {
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYmtwYXdicWF4cG10aGp5d2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MTY4NjQsImV4cCI6MjA1ODQ5Mjg2NH0.50kL1nJPG4sNj2XQaU2wnw1yKzPLzrehwzOwEv2lni8',
    url: 'https://klbkpawbqaxpmthjywhz.supabase.co',
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
  },

  runtimeConfig: {
    public: {
      environment: process.env.environment ?? 'local',
      supabaseAuthSignInRedirectTo: process.env.environment === 'local' ? 'http://localhost:3000' : 'https://google.com',
      supabaseKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYmtwYXdicWF4cG10aGp5d2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MTY4NjQsImV4cCI6MjA1ODQ5Mjg2NH0.50kL1nJPG4sNj2XQaU2wnw1yKzPLzrehwzOwEv2lni8',
      supabaseUrl: 'https://klbkpawbqaxpmthjywhz.supabase.co',
      supabaseAuthTokenName: 'sb-klbkpawbqaxpmthjywhz-auth-token'
    }
  }
})