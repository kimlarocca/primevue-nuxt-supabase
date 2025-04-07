<script setup>
definePageMeta({
  layout: 'default',
  middleware: 'auth'
})

const currentUser = useSupabaseUser()
const currentUserProfile = useCurrentUserProfile()
</script>

<template>
  <Html lang="en">
    <Head>
      <Title>Dashboard</Title>
    </Head>
  </Html>
  <div>
    <h1 class="mb-4">Dashboard</h1>
    <p class="mb-4">
      <NuxtLink @click="logOutUser()" class="clickable">Logout</NuxtLink>
    </p>
    <p class="mb-4">currentUser: {{ currentUser }}</p>
    <p class="mb-4">currentUserProfile: {{ currentUserProfile }}</p>
  </div>
</template>
