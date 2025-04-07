<template>
  <div class="grid grid-cols-2">
    <div class="background-image p-6">
      <img
        src="https://placehold.co/150x70?text=logo"
        alt="heavy petting logo"
        class="rounded-border"
      />
    </div>
    <div class="flex items-center">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-image {
  background-image: url('/images/blank-layout-background.jpg');
  background-size: cover;
  background-position: left center;
  height: 100vh;
  width: 100%;
}
</style>
