<script setup>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '~/tailwind.config'

import { $dt } from '@primeuix/themes'

const { setDarkMode, setLightMode, isDarkMode } = useDarkMode()

const fullConfig = resolveConfig(tailwindConfig)
const jsScreenSize = ref(fullConfig.theme.screens)

const primaryColor = $dt('primary.color')

const checked = ref(false)
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' },
  { name: 'Berlin', code: 'BER' },
  { name: 'Madrid', code: 'MAD' },
  { name: 'Moscow', code: 'MSC' },
  { name: 'Beijing', code: 'BJS' }
])
const date = ref(new Date())
const ingredient = ref('Cheese')
//const isDarkMode = useIsDarkMode()
const options = ref(['Long', 'Medium', 'Short'])
const selectButtonValue = ref('Medium')
const selectedCity = ref()
const starRating = ref(4)
const value = ref('sample text')
const valueNumber = ref(12345)
</script>

<template>
  <div class="container p-4">
    <Head>
      <Title>Styleguide</Title>
    </Head>
    <h1>
      Styleguide
      <i v-if="isDarkMode" @click="setLightMode" class="pi pi-sun clickable" />
      <i v-else @click="setDarkMode" class="pi pi-moon clickable mr-2" />
    </h1>
    <p>{{ isDarkMode ? ' (Dark Mode)' : ' (Light Mode)' }}</p>
    <p class="dark:bg-primary-600">Tailwind dark mode has a blue background</p>

    <div class="dark-mode">
      <p class="dark:bg-primary-600">force dark mode</p>
    </div>
    <p class="im-test">
      Include-media example for css media queries less than md will be primary
      blue
    </p>

    <p>
      responsive size =
      <span class="inline sm:hidden">xs</span>
      <span class="hidden sm:inline md:hidden">sm</span>
      <span class="hidden md:inline lg:hidden">md</span>
      <span class="hidden lg:inline xl:hidden">lg</span>
      <span class="hidden xl:inline xxl:hidden">xl</span>
      <span class="hidden xxl:inline">xxl</span>
    </p>
    <p>Javascript access to the Tailwind responsive sizes in the config=</p>
    <pre>{{ jsScreenSize }}</pre>
    <p>Javascript access to the PrimeVue theme primary color=</p>
    <p>
      light: <span>{{ primaryColor.value.light.value }}</span>
    </p>
    <p>
      dark: <span>{{ primaryColor.value.dark.value }}</span>
    </p>

    <h2>Context menu (Right-click/long press)</h2>
    <ContextMenuExample />

    <p class="reduce-to-three-lines mt-4">
      This paragraph will truncated to three lines. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Fuga ex quisquam vero sunt exercitationem
      pariatur sint, qui minus ut eos repellat reprehenderit dolorum delectus
      officia, sapiente consequatur corporis reiciendis ratione. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Unde quia placeat fuga
      dolorem libero sint molestias, vel voluptas incidunt omnis nisi ratione
      aliquam alias cupiditate natus? Numquam rem possimus omnis. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Tempore, libero a explicabo
      harum ab necessitatibus in eligendi repellat aut quae non aspernatur,
      excepturi eveniet. Rerum sapiente earum molestiae magnam quasi? Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Quam eaque quod
      provident nihil, praesentium sed tenetur, doloribus officia placeat
      molestias quibusdam corrupti. Nam qui doloribus temporibus commodi? Nam,
      fugit quae.
    </p>

    <TruncatedText class="mt-6" :lines="2">
      <template #content>
        <p>
          This paragraph will truncated to three lines. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fuga ex quisquam vero sunt
          exercitationem pariatur sint, qui minus ut eos repellat reprehenderit
          dolorum delectus officia, sapiente consequatur corporis reiciendis
          ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Unde quia placeat fuga dolorem libero sint molestias, vel voluptas
          incidunt omnis nisi ratione aliquam alias cupiditate natus? Numquam
          rem possimus omnis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempore, libero a explicabo harum ab necessitatibus in eligendi
          repellat aut quae non aspernatur, excepturi eveniet. Rerum sapiente
          earum molestiae magnam quasi? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quam eaque quod provident nihil, praesentium sed
          tenetur, doloribus officia placeat molestias quibusdam corrupti. Nam
          qui doloribus temporibus commodi? Nam, fugit quae
        </p>
      </template>
      <template #button="slotProps">
        <div class="text-center">
          <Button
            :label="`${slotProps.isExpanded ? 'Read less' : 'Read more'}`"
            class="mt-2"
            @click="slotProps.toggleExpand"
          />
        </div>
      </template>
    </TruncatedText>

    <Divider class="my-7" />
    <h1 class="mb-3">H1 Lorem Ipsum Dolor Sit Amet</h1>
    <h2 class="mb-3">H2 Lorem Ipsum Dolor Sit Amet</h2>
    <h3 class="mb-3">H3 Lorem Ipsum Dolor Sit Amet</h3>
    <h4 class="mb-3">H4 Lorem Ipsum Dolor Sit Amet</h4>
    <h5 class="mb-3">H5 Lorem Ipsum Dolor Sit Amet</h5>
    <p class="mb-3">
      This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Asperiores, esse eum ex explicabo facere maiores minus mollitia
      nulla qui saepe tempora veritatis. Dolore ducimus fuga provident sed
      temporibus. Ab, perspiciatis.
    </p>
    <p class="mb-3">
      <NuxtLink to="/">This is an inline link.</NuxtLink>
    </p>
    <p class="mb-3">
      Text with a tooltip!
      <i
        class="pi pi-info-circle clickable"
        v-tooltip.right="'Here is the tooltip!'"
      />
    </p>
    <p class="mb-3">
      Here is some <strong>bold text</strong> and some <em>italic text</em>.
    </p>
    <p class="mb-3 small">Here is a paragraph with small text.</p>
    <Divider class="my-7" />

    <div class="mb-3">
      <InputText placeholder="Email Address" v-model="value" />
    </div>
    <div class="mb-3">
      <Password
        toggleMask
        placeholder="Password"
        v-model="value"
        class="w-full"
      />
    </div>
    <div class="mb-3">
      <InputText disabled placeholder="Disabled" />
    </div>
    <div class="mb-3">
      <InputNumber v-model="valueNumber" inputId="integeronly" prefix="$" />
    </div>
    <div class="mb-3">
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
      />
    </div>
    <div class="mb-3">
      <InputGroup>
        <InputText placeholder="Search" />
        <InputGroupAddon>
          <Button icon="pi pi-search" />
        </InputGroupAddon>
      </InputGroup>
    </div>
    <div class="flex align-items-center mb-3">
      <Checkbox
        v-model="checked"
        inputId="checkbox"
        name="checkbox"
        value="checkbox"
        binary
      />
      <label for="checkbox" class="ml-2"> Checkbox </label>
    </div>
    <div class="flex flex-wrap gap-4 mb-3">
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="ingredient"
          inputId="ingredient1"
          name="pizza"
          value="Cheese"
        />
        <label for="ingredient1">Cheese</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="ingredient"
          inputId="ingredient2"
          name="pizza"
          value="Mushroom"
        />
        <label for="ingredient2">Mushroom</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="ingredient"
          inputId="ingredient3"
          name="pizza"
          value="Pepper"
        />
        <label for="ingredient3">Pepper</label>
      </div>
    </div>
    <Textarea v-model="value" rows="5" cols="30" class="mb-3" />
    <div class="flex justify-center mb-3">
      <SelectButton v-model="selectButtonValue" :options="options" />
    </div>
    <ToggleSwitch v-model="checked" />
    <divider class="my-7" />
    <Button label="Example Button" class="block mb-3" />
    <Button icon="pi pi-home" label="Button With Icon" class="mb-3 mr-2" />
    <Button
      icon="pi pi-check"
      label="Button With Icon"
      iconPos="right"
      class="mb-3 mr-2"
    />
    <Button icon="pi pi-heart" aria-label="Favorite" />
    <Button label="Outlined Button" class="block mb-3" variant="outlined" />
    <Button
      label="Loading State"
      icon="pi pi-check"
      :loading="true"
      class="mb-3"
    />
    <Button label="Disabled" disabled class="block mb-3" />
    <Button label="small button" size="small" class="mr-2" />
    <Button icon="pi pi-external-link" size="small" class="mb-3" />
    <Button
      label="Small Outlined Button"
      class="block mb-3"
      size="small"
      variant="outlined"
    />
    <Tag value="Primary"></Tag>
    <Tag severity="secondary" value="Secondary"></Tag>
    <Tag severity="success" value="Success"></Tag>
    <Tag severity="info" value="Info"></Tag>
    <Tag severity="warn" value="Warn"></Tag>
    <Tag severity="danger" value="Danger"></Tag>
    <Tag severity="contrast" value="Contrast"></Tag>
    <divider class="my-7" />
    <ProgressSpinner class="mb-3" />
    <Rating v-model="starRating" class="mb-3" />
    <Card style="width: 400px" class="mb-3">
      <template #header>
        <img alt="user header" src="https://picsum.photos/400/300?grayscale" />
      </template>
      <template #title>Card Example</template>
      <template #subtitle>This is the card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-2">
          <Button label="Learn More" />
        </div>
      </template>
    </Card>
    <divider class="my-7" />
    <Message severity="info" class="mb-3" closable>
      An informative message goes here.
    </Message>
    <Message severity="warn" class="mb-3" closable>
      A warning message goes here.
    </Message>
    <Message severity="error" class="mb-3" closable>
      Sorry, there was a problem logging in to your account.
    </Message>
    <Message class="mb-3" severity="success" closable>
      Success! Please check your email for the magic link.
    </Message>
  </div>
</template>
<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.im-test {
  @include media('<md') {
    color: var(--p-primary-500);
    font-weight: bolder;
  }
}

.reduce-to-three-lines {
  @include truncate;
  @include lineClamp(3);
}
</style>
