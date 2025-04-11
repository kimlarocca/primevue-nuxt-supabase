<script setup>
definePageMeta({
  layout: 'blank'
})

const currentUser = useSupabaseUser()
const client = useSupabaseClient()
const user = await client.auth.getUser()
const session = await client.auth.getSession()

// check supabase session for a logged in user
if (user?.data?.user) {
  currentUser.value = user?.data?.user
} else if (session?.data?.session?.user) {
  currentUser.value = session?.data?.session?.user
}

onMounted(() => {
  // redirect to the dashboard if the user is already logged in
  if (currentUser.value) {
    window.location.href = '/dashboard'
  }
})
</script>

<template>
  <div class="w-full p-20">
    <img
      src="https://placehold.co/150x70?text=logo"
      alt="heavy petting logo"
      class="rounded-border mb-4"
      width="150"
      height="70"
    />
    <h1 class="mb-6 like-h2">Welcome Back</h1>
    <supabase-login-with-email class="mb-6" />
    <p class="small">
      <NuxtLink to="/forgot-password">Forgot Password?</NuxtLink>
    </p>
  </div>
</template>
