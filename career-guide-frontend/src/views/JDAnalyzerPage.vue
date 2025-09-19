<template>
  <div>
    <h2 class="text-3xl font-semibold mb-6">Job Description Analyzer</h2>
    <textarea
      v-model="jdText"
      rows="10"
      class="w-full p-3 border rounded mb-6"
      placeholder="Paste the job description here..."
    ></textarea>

    <button
      @click="analyzeJD"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
    >
      Analyze
    </button>

    <div v-if="analyzed" class="bg-white p-6 rounded shadow max-w-4xl mx-auto">
      <h3 class="text-xl font-semibold mb-3">Analysis</h3>
      <p><strong>Missing Skills:</strong></p>
      <ul class="list-disc list-inside text-red-600">
        <li v-for="skill in missingSkills" :key="skill">{{ skill }}</li>
      </ul>

      <p class="mt-6"><strong>Job Description with highlights:</strong></p>
      <div v-html="highlightedJD" class="border p-4 rounded mt-2 whitespace-pre-wrap" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userSkills = [
  'JavaScript',
  'Vue.js',
  'Communication',
  'Team Collaboration',
  'Data Structures',
]

const jdText = ref('')
const analyzed = ref(false)
const missingSkills = ref([])
const highlightedJD = ref('')

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function analyzeJD() {
  if (!jdText.value.trim()) {
    alert('Please enter job description text')
    return
  }
  analyzed.value = true

  const lowerJD = jdText.value.toLowerCase()

  missingSkills.value = userSkills.filter(
    (skill) => !lowerJD.includes(skill.toLowerCase())
  )

  let processedText = jdText.value

  userSkills.forEach((skill) => {
    const regex = new RegExp(`(${escapeRegExp(skill)})`, 'gi')
    if (missingSkills.value.includes(skill)) {
      processedText = processedText.replace(
        regex,
        `<span class="underline decoration-red-500 decoration-2">${skill}</span>`
      )
    } else {
      processedText = processedText.replace(
        regex,
        `<span class="underline decoration-green-500 decoration-2">${skill}</span>`
      )
    }
  })

  highlightedJD.value = processedText.replace(/\n/g, '<br />')
}
</script>