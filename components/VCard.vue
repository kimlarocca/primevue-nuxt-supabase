<template>
  <Card>
    <template #header>
      <img :alt="alt" :src="image" />
    </template>
    <template #title>{{ title }}</template>
    <template #content>
      <Rating v-model="starRating" class="mb-3" />
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
  rating: {
    type: Number,
    required: false,
    default: 0
  },
  url: {
    type: String,
    required: false,
    default: null
  }
})

const starRating = ref(props.rating)
</script>
