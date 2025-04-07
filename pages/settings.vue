<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <Html lang="en">
    <Head>
      <Title>Settings</Title>
    </Head>
  </Html>
  <div>
    <h1 class="mb-4">Settings</h1>
    <div id="image">
      <supabase-profile-image />
    </div>
    <Divider class="my-8" />
    <div id="profile">
      <manage-user-profile />
    </div>
    <Divider class="my-8" />
    <div id="password">
      <supabase-reset-password />
    </div>
    <Divider class="my-8" />
    <div id="delete">
      <h4 class="mb-4">Delete Account</h4>
      <p>
        Please <a href="mailto:help@heavypetting.com">contact us</a> if you wish
        to delete your account.
      </p>
    </div>
  </div>
</template>
