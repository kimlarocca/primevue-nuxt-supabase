<script setup lang="ts">
import useDarkMode from "~/composables/useDarkMode"
const { checkColorMode } = useDarkMode()
onMounted(() => {
  checkColorMode()
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
