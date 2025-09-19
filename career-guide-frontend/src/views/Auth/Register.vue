<template>
  <div class="max-w-md mx-auto border rounded p-6 shadow-md bg-white">
    <h2 class="text-2xl font-semibold mb-4">Register</h2>
    <form @submit.prevent="register">
      <label class="block mb-2">
        Name:
        <input v-model="name" type="text" required class="w-full border rounded px-3 py-2 mt-1" />
      </label>
      <label class="block mb-2">
        Email:
        <input v-model="email" type="email" required class="w-full border rounded px-3 py-2 mt-1" />
      </label>
      <label class="block mb-4">
        Password:
        <input v-model="password" type="password" required class="w-full border rounded px-3 py-2 mt-1" />
      </label>
      <button :disabled="loading" type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Register</button>
      <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
      <p v-if="success" class="text-green-600 mt-2">Registration successful! Please login.</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref(null)
const success = ref(false)

async function register() {
  loading.value = true
  error.value = null
  success.value = false
  try {
    // Simulate success
    await new Promise(r => setTimeout(r, 1000))
    if(email.value && password.value && name.value) {
      success.value = true
      name.value = ''
      email.value = ''
      password.value = ''
    } else {
      throw new Error('Invalid data')
    }
  } catch(e) {
    error.value = e.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>