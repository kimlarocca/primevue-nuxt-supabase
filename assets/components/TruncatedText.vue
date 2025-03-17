<script setup lang="ts">
import { ref, onMounted } from "vue"

const props = defineProps({
  lines: {
    type: Number,
    default: 3,
  },
  speed: {
    type: Number,
    default: 0.5,
  },
  chValue: {
    type: Number,
    default: 2.75,
  },
})

const contentRef = ref<HTMLElement | null>(null)
const maxHeight = ref<number | null>(0)
const isExpanded = ref(false)
const chValue = ref(props.chValue) // Approximate character height in 'ch' units
const expandSpeed = ref("0s") // Speed of the expansion animation in seconds

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
  updateMaxHeight()
}

const updateMaxHeight = () => {
  if (contentRef.value) {
    maxHeight.value = isExpanded.value
      ? contentRef.value.scrollHeight
      : props.lines * chValue.value
  }
}

onMounted(() => {
  updateMaxHeight()
  expandSpeed.value = `${props.speed}s` // Set the speed of the expansion animation
})
</script>

<template>
  <div>
    <div class="text-container" :class="{ expanded: isExpanded }">
      <div
        ref="contentRef"
        class="truncated-text"
        :style="{
          maxHeight: `${maxHeight}${isExpanded ? 'px' : 'ch'}`,
        }"
      >
        <slot name="content"></slot>
      </div>
    </div>
    <slot name="button" :toggleExpand="toggleExpand" :isExpanded="isExpanded">
      <button @click="toggleExpand">
        {{ isExpanded ? "Read less" : "Read more" }}
      </button>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.text-container {
  position: relative;
  overflow: hidden;
  &.expanded {
    .truncated-text {
      -webkit-line-clamp: none;
      line-clamp: none;
      &::after {
        display: none;
      }
    }
  }
  &:not(.expanded) {
    .truncated-text {
      animation: clampDelay 0s linear v-bind(expandSpeed) forwards;

      @keyframes clampDelay {
        100% {
          -webkit-line-clamp: v-bind(lines);
          line-clamp: v-bind(lines);
          mask: linear-gradient(to bottom, black, transparent);
          -webkit-mask: linear-gradient(to bottom, black, transparent);
        }
      }
    }
  }
}

.truncated-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  transition: max-height v-bind(expandSpeed) ease-in-out;
  max-height: 0;
  min-height: calc(v-bind(chValue) * v-bind(lines) * 1ch);
  text-overflow: ellipsis;
}

button {
  cursor: pointer;
}
</style>
