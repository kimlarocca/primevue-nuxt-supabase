<template>
  <div class="card flex sm:justify-center">
    <ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
      <li v-for="user in users" :key="user.id"
        :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
        @contextmenu="onRightClickUser($event, user)">
        <div class="flex flex-1 items-center gap-2">
          <img :alt="user.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${user.image}`"
            class="w-8 h-8" />
          <span class="font-bold">{{ user.name }}</span>
        </div>
        <Tag class="unselectable" :value="user.role" :severity="getBadge(user)"
          @contextmenu="onRightClickRole($event, user)" />
      </li>
    </ul>
    <ContextMenu ref="menu" :model="items" @hide="selectedUser = null" />
    <ContextMenu ref="menuUser" :model="userItems" @hide="selectedUser = null" />
    <Toast />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from "primevue/usetoast"

const toast = useToast()
const selectedUser = ref()
const menu = ref()
const menuUser = ref()
const users = ref([
  { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
  { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
  { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
  { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
  { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
])
const items = ref([

  {
    label: 'Admin',
    command: () => {
      selectedUser.value.role = 'Admin'
    }
  },
  {
    label: 'Member',
    command: () => {
      selectedUser.value.role = 'Member'
    }
  },
  {
    label: 'Guest',
    command: () => {
      selectedUser.value.role = 'Guest'
    }
  }
])

const userItems = ref([

  {
    label: 'Delete User',
    command: () => {
      toast.add({ severity: 'error', summary: 'Deleted', detail: 'The user has been deleted!', life: 3000 })
    }
  },
  {
    label: 'Move User to another hospital',
    command: () => {
      toast.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 })
    }
  },
  {
    label: 'View Profile',
    command: () => {
      toast.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 })
    }
  }
])

const onRightClickRole = (event, user) => {
  selectedUser.value = user
  menu.value.show(event)
}

const onRightClickUser = (event, user) => {
  selectedUser.value = user
  menuUser.value.show(event)
}

const getBadge = (user) => {
  if (user.role === 'Member') return 'info'
  else if (user.role === 'Guest') return 'warn'
  else return null
}
</script>
