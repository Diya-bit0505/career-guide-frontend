<template>
  <div class="max-w-md mx-auto border rounded p-6 shadow-md bg-white">
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <form @submit.prevent="login">
      <label class="block mb-2">
        Email:
        <input v-model="email" type="email" required class="w-full border rounded px-3 py-2 mt-1" />
      </label>
      <label class="block mb-4">
        Password:
        <input v-model="password" type="password" required class="w-full border rounded px-3 py-2 mt-1" />
      </label>
      <button :disabled="loading" type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
      <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref(null)

async function login() {
  loading.value = true
  error.value = null
  try {
    // For demo, we just simulate backend login validation:
    await new Promise(r => setTimeout(r, 1000))
    if(email.value === 'user@example.com' && password.value === 'password') {
      localStorage.setItem('token', 'demo-token')
      router.push('/quiz')
    } else {
      throw new Error('Invalid credentials')
    }
  } catch(e) {
    error.value = e.message || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>