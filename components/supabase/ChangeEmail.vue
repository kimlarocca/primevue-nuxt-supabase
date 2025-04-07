<script setup>
const client = useSupabaseClient()
const currentUser = useSupabaseUser()

const tempEmail = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref(null)
const pending = ref(false)

// update the user's email with a message to confirm the change in an email
const changeEmail = async () => {
  pending.value = true
  const { error } = await client.auth.updateUser({
    email: tempEmail.value
  })
  pending.value = false
  if (error) {
    errorMessage.value = `Email update failed: ${error}`
  } else {
    successMessage.value = `A confirmation email has been sent to ${currentUser.value.email}. Please confirm the change to your email address.`
  }
}
</script>

<template>
  <div>
    <form class="email-reset" @submit.prevent="changeEmail">
      <h4 class="mb-4">Change Email Address TO DO - NOT WORKING YET</h4>
      <p v-if="currentUser.app_metadata.provider !== 'email'">
        <em>
          You are using your <strong>{{ currentUser.email }}</strong>
          {{ currentUser.app_metadata.provider }} account to login. To change
          your email address, you must do so through your
          {{ currentUser.app_metadata.provider }} account.
        </em>
      </p>
      <div v-else class="width400">
        <label class="mb-1">Current Email Address:</label>
        <p class="mb-4">
          <strong>{{ currentUser.email }}</strong>
        </p>
        <div class="mb-4">
          <span v-if="!successMessage" class="p-float-label inline">
            <label for="tempEmail" class="mb-1">New Email Address:</label>
            <InputText
              id="tempEmail"
              v-model="tempEmail"
              type="tempEmail"
              placeholder="Email Address"
              required
            />
          </span>
        </div>
        <div class="mb-4">
          <span v-if="!successMessage" class="p-float-label inline">
            <label for="password" class="mb-1">Enter Your Password:</label>
            <Password
              id="password"
              toggleMask
              :feedback="false"
              v-model="password"
              type="password"
              placeholder="Password"
              required
            />
          </span>
        </div>
        <input type="email" style="display: none" />
        <Button
          v-if="!successMessage"
          :loading="pending"
          type="submit"
          class="full-width"
          label="Update Email"
        />
      </div>
      <template v-if="errorMessage">
        <Message
          :sticky="false"
          :life="5000"
          class="mt-4"
          severity="error"
          @close="errorMessage = ''"
        >
          Sorry, there was an error updating your email: {{ errorMessage }}
        </Message>
      </template>
      <template v-if="successMessage">
        <Message
          :sticky="true"
          :life="5000"
          class="mt-4"
          severity="success"
          @close="successMessage = ''"
        >
          {{ successMessage }}
        </Message>
      </template>
    </form>
  </div>
</template>
