<template>
  <div class="styleguide">
    <Html lang="en">
      <Head>
        <Title>Styleguide</Title>
      </Head>
    </Html>
    <div class="container p-4">
      <h1>Styleguide</h1>
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
        <nuxt-link to="/">This is an inline link.</nuxt-link>
      </p>
      <p class="mb-3">
        Text with a tooltip!
        <i
          class="pi pi-info-circle cursor-pointer"
          v-tooltip.right="'Here is the tooltip!'"
        />
      </p>
      <p class="mb-3">
        Here is some <strong>bold text</strong> and some <em>italic text</em>.
      </p>
      <p class="mb-3 small">Here is a paragraph with small text.</p>
      <div class="tag mb-3">this is a tag</div>
      <Divider class="my-7" />
      <InputText
        placeholder="Email Address"
        v-model="value"
        class="block mb-3"
      />
      <div class="mb-3">
        <Password toggleMask placeholder="Password" v-model="value" />
      </div>
      <InputText disabled placeholder="Disabled" class="block mb-3" />
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class="mb-3"
      />
      <InputGroup>
        <InputText placeholder="Search" />
        <InputGroupAddon>
          <Button icon="pi pi-search" />
        </InputGroupAddon>
      </InputGroup>
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
      <Button label="Disabled" disabled class="block mb-6" />
      <ProgressSpinner class="mb-6" />
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
  </div>
</template>

<script setup>
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])
const value = ref('sample text')
</script>
