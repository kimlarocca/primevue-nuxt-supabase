<template>
  <div class="severance">
    <div class="severance-container">
      <!-- <h1 class="capitalize mb-3">Severance Lorem Ipsum</h1> -->
      <img
        alt="Severance Lorem Ipsum macrodata refinement background image"
        src="/images/severance.png"
        class="mb-4"
      />
      <div class="lorem-ipsum-container">
        <LoremIpsumGenerator category="severance" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.severance {
  --lighter-blue: #86e3ee;
  --light-blue: #118492;
  --dark-blue: #021c31;
  --button-background-color: var(--light-blue);
  --forms-input-background-color: var(--light-blue);
  --forms-input-border: 1px solid var(--light-blue);
  --forms-input-color: var(--white);
  --forms-input-focus-border: 1px solid var(--white);

  background-color: var(--dark-blue);
  background-image: url('/images/severance-background.png');
  background-repeat: repeat-x;
  color: var(--lighter-blue);
  height: 100vh;

  @media all and (max-width: 1224px) {
    background-image: none;
  }
}
.severance-container {
  max-width: 1225px;
  width: 100%;
  margin: auto;
}
.lorem-ipsum-container {
  @media all and (max-width: 1224px) {
    padding: 0 1rem;
  }
}
</style>
