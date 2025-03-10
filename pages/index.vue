<template>
  <div class="container p-6">
    <div class="hero mb-5">
      <img
        class="border-radius"
        alt="hero image"
        src="https://picsum.photos/1500/350?grayscale"
      />
    </div>
    <div class="grid">
      <div class="col col-12 md:col-6 lg:col-3">
        <VCard
          class="h-full"
          image="/images/latin-thumbnail.jpg"
          alt="alt text"
          title="OG Lorem Ipsum"
          description="Experience the original lorem ipsum generator that has been used for centuries as dummy and filler text."
          :tags="['places']"
          url="/latin"
        />
      </div>
      <div class="col col-12 md:col-6 lg:col-3">
        <VCard
          class="h-full"
          image="/images/severance-thumbnail.jpg"
          alt="alt text"
          title="Severance"
          description="The lorem ipsum generator that is both mysterious and important! Please try to enjoy each paragraph equally."
          :tags="['tv']"
          url="/severance"
        />
      </div>
      <div class="col col-12 md:col-6 lg:col-3">
        <VCard
          class="h-full"
          image="/images/nyc-thumbnail.jpg"
          alt="alt text"
          title="New York City"
          description="How you doin'? This is the lorem ipsum generator that never sleeps. Fuhgeddaboudit!"
          :tags="['places']"
          url="/nyc"
        />
      </div>
      <div class="col col-12 md:col-6 lg:col-3">
        <VCard
          class="h-full"
          image="/images/italian-thumbnail.jpg"
          alt="alt text"
          title="Italian Ipsum"
          description="Lorem ipsum text but with all the Italian stereotypes you can think of. Mama mia!"
          :tags="['places']"
          url="/italian"
        />
      </div>
    </div>
  </div>
</template>
