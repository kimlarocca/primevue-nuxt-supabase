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
    <img
      src="https://placehold.co/150x70?text=logo"
      alt="heavy petting logo"
      class="rounded-border mb-4"
      width="150"
      height="70"
    />
    <h1 class="mb-4 like-h2">Success!</h1>
    <p class="mb-6">
      Your email address change has been confirmed. Please login to your account
      using your new email address:
    </p>
    <supabase-login-with-email class="mb-6" />
  </div>
</template>
