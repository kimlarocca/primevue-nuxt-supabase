<script setup>
definePageMeta({
  layout: 'blank'
})
</script>

<template>
  <Html lang="en">
    <Head>
      <Title>Forgot Password</Title>
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
    <h1 class="mb-4 like-h2">Forgot Your Password?</h1>
    <p class="mb-6">
      Enter your email address below and we'll send you a magic link you can use
      to sign in. Once you are logged in, you may reset your password.
    </p>
    <supabase-login-with-magic-link class="mb-6" />
    <p class="small">
      Already have an account?
      <NuxtLink to="/" class="like-h6">Sign In</NuxtLink>
    </p>
  </div>
</template>
