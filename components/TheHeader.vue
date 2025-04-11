<script setup>
const { setDarkMode, setLightMode, isDarkMode } = useDarkMode()
const currentUserProfile = useCurrentUserProfile()
</script>

<template>
  <header class="flex justify-between items-center">
    <NuxtLink to="/dashboard" class="plain clickable" aria-label="home">
      <img
        src="https://placehold.co/150x70?text=logo"
        alt="heavy petting logo"
        class="rounded-border"
      />
    </NuxtLink>
    <div class="flex justify-between items-center">
      <i
        v-if="isDarkMode"
        @click="setLightMode"
        class="pi pi-sun clickable mr-2"
      />
      <i v-else @click="setDarkMode" class="pi pi-moon clickable mr-2" />
      <NuxtLink
        to="/settings"
        class="plain clickable"
        aria-label="manage your profile and account settings"
      >
        <Avatar
          v-if="currentUserProfile && currentUserProfile.avatar_url"
          :image="currentUserProfile.avatar_url"
          size="large"
          shape="circle"
          aria-label="user avatar image"
        />
        <Avatar
          v-else
          size="large"
          shape="circle"
          icon="pi pi-user"
          aria-label="user avatar image"
        />
      </NuxtLink>
    </div>
  </header>
  <Divider class="mt-4 mb-12" />
</template>
