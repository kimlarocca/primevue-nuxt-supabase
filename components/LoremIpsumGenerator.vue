<template>
  <div>
    <div>
      <label>Number of Paragraphs</label>
      <select v-model="numParagraphs">
        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>

    <div>
      <label>Words per Paragraph</label>
      <input v-model.number="wordsPerParagraph" type="number" min="1" />
    </div>

    <button @click="generateLoremIpsum">Generate</button>
    <button @click="copyToClipboard">Copy Text</button>

    <div>
      <p v-for="(paragraph, index) in paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup>
const numParagraphs = ref(3)
const wordsPerParagraph = ref(30)
const paragraphs = ref([])
const words = ref(italian)

const generateLoremIpsum = () => {
  paragraphs.value = Array.from({ length: numParagraphs.value }, () => {
    return Array.from({ length: wordsPerParagraph.value }, () => {
      return words[Math.floor(Math.random() * words.length)]
    }).join(' ')
  })
}

const copyToClipboard = async () => {
  const textToCopy = paragraphs.value.join('\n\n')
  try {
    await navigator.clipboard.writeText(textToCopy)
    alert('Text copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<style lang="scss" scoped>
p::first-letter {
  text-transform: capitalize;
}
p::after {
  content: '.';
}
</style>
