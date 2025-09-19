<template>
  <div>
    <h2 class="text-3xl font-semibold mb-4">Your Career Results</h2>

    <section class="mb-8 p-6 bg-white rounded shadow max-w-3xl mx-auto">
      <h3 class="text-2xl font-semibold mb-3">Top 3 Tracks</h3>
      <ul class="list-disc list-inside space-y-2">
        <li v-for="track in topTracks" :key="track">{{ track }}</li>
      </ul>
    </section>

    <section class="p-6 bg-white rounded shadow max-w-3xl mx-auto">
      <h3 class="text-2xl font-semibold mb-3">Job Openings</h3>
      <div v-if="loading">Loading job openings...</div>
      <div v-else>
        <template v-for="jobTrack in jobData" :key="jobTrack.track">
          <div v-if="topTracks.includes(jobTrack.track)" class="mb-6 border-b pb-4">
            <h4 class="text-xl font-semibold mb-2">{{ jobTrack.track }}</h4>
            <ul class="space-y-2">
              <li v-for="job in jobTrack.openings" :key="job.title" class="border p-3 rounded hover:bg-gray-100">
                <a :href="job.link" target="_blank" class="font-semibold text-blue-600 hover:underline">{{ job.title }}</a>
                <p>{{ job.company }} - {{ job.location }}</p>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import jobOpeningsData from '../data/jobOpenings.json'

const topTracks = ref(['Frontend Developer', 'Data Scientist', 'DevOps Engineer'])
const jobData = ref([])
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    jobData.value = jobOpeningsData
    loading.value = false
  }, 500)
})
</script>