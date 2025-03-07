<template>
  <div class="lorem-ipsum-generator">
    <h1 class="capitalize mb-3">{{ category }} Ipsum</h1>

    <div class="flex align-items-center mb-3">
      <p>Give me</p>
      <InputNumber
        style="width: 60px"
        v-model="numberOfParagraphs"
        inputId="minmax"
        :min="1"
        class="mx-2 text-center"
      />
      <p>paragraphs(s) that are each</p>
      <Select
        style="width: 130px"
        class="mx-2"
        v-model="lengthOfParagraphs"
        :options="lengthOfParagraphsOptions"
      />
      <p>length, and</p>
      <Select
        style="width: 130px"
        class="mx-2"
        v-model="paragraphType"
        :options="paragraphTypeOptions"
      />
      <p>wrap them in &lt;p&gt; tags.</p>
    </div>

    <div class="flex align-items-center mb-4">
      <Checkbox
        v-model="beginWith"
        inputId="beginWith"
        name="beginWith"
        value="beginWith"
        binary
      />
      <label v-if="words?.length > 0" for="beginWith" class="ml-2">
        Begin with "{{ words[0] }}..."
      </label>
    </div>

    <Button @click="generateLoremIpsum" label="Generate" class="mr-2" />
    <Button
      @click="copyToClipboard"
      variant="outlined"
      v-if="paragraphs.length > 0"
      label="Copy Text"
    />

    <div class="mt-6">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        class="capitalize-first-letter mb-3"
      >
        <span v-if="paragraphType === 'Do'">&lt;p&gt;</span>{{ paragraph
        }}<span v-if="paragraphType === 'Do'">&lt;/p&gt;</span>
      </p>
    </div>
  </div>

  <div class="changes-saved-toast">
    <Message
      v-if="copied"
      class="mb-4"
      severity="success"
      :closable="false"
      :sticky="false"
    >
      Your text has been copied to your clipboard!
    </Message>
    <Message
      v-if="error"
      class="mb-4"
      severity="error"
      :closable="false"
      :sticky="false"
    >
      There was an error copying the text to your clipboard. Please try again!
    </Message>
  </div>
</template>

<script setup>
const beginWith = ref(true)
const copied = ref(false)
const error = ref(false)
const paragraphs = ref([])
const numberOfParagraphs = ref(3)
const lengthOfParagraphs = ref('Medium')
const lengthOfParagraphsOptions = ref(['Long', 'Medium', 'Short'])
const paragraphType = ref('Do Not')
const paragraphTypeOptions = ref(['Do', 'Do Not'])
const words = ref([])

const props = defineProps({
  category: {
    type: String,
    required: true,
    default: 'latin'
  }
})

// computed property that sets the wordsPerParagraph based on the lengthOfParagraphs
const wordsPerParagraph = computed(() => {
  if (lengthOfParagraphs.value === 'Long') {
    return 60
  } else if (lengthOfParagraphs.value === 'Medium') {
    return 30
  } else {
    return 15
  }
})

if (props.category === 'latin') {
  words.value = latin
}
if (props.category === 'italian') {
  words.value = italian
}
if (props.category === 'severance') {
  words.value = severance
}

const generateLoremIpsum = () => {
  paragraphs.value = Array.from(
    { length: numberOfParagraphs.value },
    (_, index) => {
      let paragraph = []
      if (beginWith.value && index === 0) {
        // Start with the first word
        paragraph.push(words.value[0])
        // Generate remaining words
        for (let i = 1; i < wordsPerParagraph.value; i++) {
          let newWord
          do {
            newWord =
              words.value[Math.floor(Math.random() * words.value.length)]
          } while (newWord === paragraph[i - 1]) // no repeats - keep trying if word is same as previous
          paragraph.push(newWord)
        }
      } else {
        // Generate all words
        for (let i = 0; i < wordsPerParagraph.value; i++) {
          let newWord
          do {
            newWord =
              words.value[Math.floor(Math.random() * words.value.length)]
          } while (i > 0 && newWord === paragraph[i - 1]) // no repeats - keep trying if word is same as previous
          paragraph.push(newWord)
        }
      }
      return paragraph.join(' ')
    }
  )
}

const copyToClipboard = async () => {
  const textToCopy = paragraphs.value.join('\n\n')
  try {
    await navigator.clipboard.writeText(textToCopy)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.capitalize-first-letter::first-letter {
  text-transform: capitalize;
}
.capitalize-first-letter::after {
  content: '.';
}
.p-inputtext,
.p-inputnumber-input {
  text-align: center !important;
}
</style>
