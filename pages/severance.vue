<template>
  <div class="container p-6">
    <p>
      <nuxt-link to="/" class="mr-4">Latin</nuxt-link>
      <nuxt-link to="/italian" class="mr-4">Italian</nuxt-link>
      <nuxt-link to="/severance">Severance</nuxt-link>
    </p>
    <Divider class="mt-3 mb-5" />
    <LoremIpsumGenerator category="severance" />
  </div>
</template>
