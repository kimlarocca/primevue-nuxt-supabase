<script setup>
definePageMeta({
  layout: 'blank'
})
</script>

<template>
  <Html lang="en">
    <Head>
      <Title>Success</Title>
    </Head>
  </Html>
  <div class="w-full p-20">
    <h1 class="mb-4 like-h2">Success!</h1>
    <p class="mb-6">
      Your email address change has been confirmed. Please login to your account
      using your new email address:
    </p>
    <supabase-login-with-email class="mb-6" />
  </div>
</template>
