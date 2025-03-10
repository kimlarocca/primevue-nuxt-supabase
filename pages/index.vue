<template>
  <div class="container p-6">
    <div class="hero mb-5">
      <img
        class="border-radius"
        alt="hero image"
        src="https://picsum.photos/1500/300?grayscale"
      />
    </div>
    <div class="grid">
      <div class="col col-12 md:col-6 lg:col-3">
        <VCard
          image="/images/severance-thumbnail.jpg"
          alt="alt text"
          title="Severance Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae."
          :rating="4.5"
          url="/severance"
        />
      </div>
      <div class="col col-12 md:col-6 lg:col-3">
        <VCard
          image="https://picsum.photos/768/400?grayscale"
          alt="alt text"
          title="Severance Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae."
          :rating="4.5"
          url="/severance"
        />
      </div>
    </div>
  </div>
</template>
