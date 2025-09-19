<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded shadow">
    <h2 class="text-3xl font-semibold mb-6">Evidence</h2>
    <form @submit.prevent="addEvidence" class="mb-8 space-y-4">
      <div>
        <label class="block font-semibold mb-1">Repository Link <span class="text-red-500">*</span></label>
        <input v-model="newEvidence.repo" type="url" required placeholder="https://github.com/your-repo" class="w-full border p-2 rounded"/>
      </div>
      <div>
        <label class="block font-semibold mb-1">Screenshot URL</label>
        <input v-model="newEvidence.screenshot" type="url" placeholder="https://example.com/screenshot.png" class="w-full border p-2 rounded"/>
      </div>
      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded" :disabled="submitting">Add Evidence</button>
    </form>

    <section v-if="evidences.length" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div v-for="(evidence, idx) in evidences" :key="idx" class="border p-4 rounded shadow">
        <p><strong>Repository:</strong> <a :href="evidence.repo" target="_blank" class="text-blue-600 hover:underline break-all">{{ evidence.repo }}</a></p>
        <p v-if="evidence.screenshot" class="mt-3"><strong>Screenshot:</strong></p>
        <img v-if="evidence.screenshot" :src="evidence.screenshot" alt="Screenshot" class="mt-2 rounded max-h-52 object-contain"/>
      </div>
    </section>

    <p v-else class="text-center text-gray-500">No evidences added yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const newEvidence = ref({ repo: '', screenshot: '' })
const evidences = ref([])
const submitting = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('evidences')
  evidences.value = saved ? JSON.parse(saved) : []
})

function saveEvidences() {
  localStorage.setItem('evidences', JSON.stringify(evidences.value))
}

async function addEvidence() {
  submitting.value = true
  try {
    evidences.value.push({ ...newEvidence.value })
    saveEvidences()
    newEvidence.value.repo = ''
    newEvidence.value.screenshot = ''
  } catch {
    alert('Error adding evidence')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  display: block;
}
</style>