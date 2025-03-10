<template>
  <Card>
    <template #header>
      <img :alt="alt" :src="image" />
    </template>
    <template #content>
      <div v-if="tags?.length > 0" class="flex align-items-center gap-2">
        <div v-for="(tag, index) in tags" class="tag mb-1" :class="tag">
          {{ tag }}
        </div>
      </div>
      <h3 class="mb-2">{{ title }}</h3>
      <p class="mb-2">
        {{ description }}
      </p>
    </template>
    <template #footer v-if="url">
      <div class="flex gap-4 mt-2">
        <nuxt-link :to="url" target="_blank">
          <Button label="Visit Website" icon="pi pi-external-link" />
        </nuxt-link>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  alt: {
    type: String,
    required: false,
    default: null
  },
  description: {
    type: String,
    required: false,
    default: null
  },
  title: {
    type: String,
    required: false,
    default: null
  },
  image: {
    type: String,
    required: false,
    default: null
  },
  tags: {
    type: Array,
    required: false,
    default: 0
  },
  url: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<style lang="scss" scoped>
.nsfw {
  color: var(--red);
  border: solid 1px var(--red);
}
.tv {
  color: var(--green);
  border: solid 1px var(--green);
}
.places {
  color: var(--pink);
  border: solid 1px var(--pink);
}
</style>
