<script setup>
import useDarkMode from "~/composables/useDarkMode"
const { isDarkMode } = useDarkMode()
</script>

<template>
  <div class="container p-4">
    <p>{{ isDarkMode ? " (Dark Mode)" : " (Light Mode)" }}</p>
    <h1 class="mb-4">PrimeVue Nuxt Supabase Boilerplate</h1>
    <nuxt-link to="/styleguide">
      <Button label="go to styleguide" />
    </nuxt-link>
  </div>
</template>
