<script setup>
const currentUser = useSupabaseUser()
const currentUserProfile = useCurrentUserProfile()
const client = useSupabaseClient()

const fullName = ref(currentUserProfile.value.full_name || null)
const phone = ref(currentUserProfile.value.phone || null)
const successMessage = ref(false)

const updateProfile = async () => {
  successMessage.value = false
  const { error } = await client
    .from('profiles')
    .upsert({
      id: currentUser.value.id,
      updated_at: new Date().toISOString(),
      full_name: fullName.value,
      phone: phone.value
    })
    .match({ id: currentUser.value.id })
  if (error) {
    console.log('updateProfile error', error)
  } else {
    successMessage.value = true
    // update the state
    currentUserProfile.value.full_name = fullName.value
    currentUserProfile.value.phone = phone.value
  }
}
</script>

<template>
  <div v-if="currentUserProfile">
    <h4 class="mb-4">Your Profile</h4>
    <p class="mb-4">{{ currentUser?.email }}</p>
    <div class="mb-4">
      <label for="full_name" class="small mb-1">Name:</label>
      <InputText id="full_name" v-model="fullName" @change="updateProfile" />
    </div>
    <div class="mb-4">
      <label for="phone" class="small mb-1">Phone:</label>
      <InputMask
        id="phone"
        type="tel"
        v-model="phone"
        date="phone"
        mask="(999) 999-9999"
        placeholder="(999) 999-9999"
        @change="updateProfile"
      />
    </div>
  </div>
  <div class="toast">
    <Message
      v-if="successMessage"
      class="mb-4"
      severity="success"
      :closable="false"
      :life="3000"
    >
      Your changes have been saved.
    </Message>
  </div>
</template>
