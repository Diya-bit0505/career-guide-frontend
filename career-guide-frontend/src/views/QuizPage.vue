<template>
  <div>
    <h2 class="text-3xl font-semibold mb-4">Career Quiz</h2>

    <div v-if="loading" class="text-center">Loading questions...</div>

    <form v-if="questions.length && !result" @submit.prevent="submitQuiz" class="space-y-6 border p-6 rounded shadow bg-white">
      <div v-for="(q, index) in questions" :key="q.id" class="mb-4">
        <p class="font-semibold">{{ index + 1 }}. {{ q.question }}</p>
        <div class="space-x-4 mt-2">
          <label v-for="opt in q.options" :key="opt" class="inline-flex items-center space-x-2">
            <input type="radio" :name="'q'+q.id" :value="opt" v-model="answers[q.id]" required />
            <span>{{ opt }}</span>
          </label>
        </div>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" :disabled="submitting">Submit</button>
    </form>

    <div v-if="result" class="mt-8 bg-white p-6 rounded shadow">
      <h3 class="text-xl font-semibold mb-4">Your Skill Radar Chart</h3>
      <Radar :chart-data="chartData" :options="chartOptions" />
      <button @click="resetForm" class="mt-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Retake Quiz</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const loading = ref(false)
const submitting = ref(false)
const result = ref(null)
const questions = ref([])
const answers = reactive({})
const chartData = ref(null)
const chartOptions = {
  responsive: true,
  scales: {
    r: {
      angleLines: { display: true },
      suggestedMin: 0,
      suggestedMax: 5
    }
  }
}

onMounted(() => {
  loading.value = true
  questions.value = [
    {
      id: 1,
      question: 'Proficiency in JavaScript',
      options: ['1', '2', '3', '4', '5']
    },
    {
      id: 2,
      question: 'Proficiency in Data Structures',
      options: ['1', '2', '3', '4', '5']
    },
    {
      id: 3,
      question: 'Comfort with Vue.js',
      options: ['1', '2', '3', '4', '5']
    },
    {
      id: 4,
      question: 'Experience in Team Projects',
      options: ['1', '2', '3', '4', '5']
    },
    {
      id: 5,
      question: 'Communication Skills',
      options: ['1', '2', '3', '4', '5']
    }
  ]
  loading.value = false
})

function submitQuiz() {
  submitting.value = true
  const dataSet = questions.value.map(q => ({
    skill: q.question,
    value: Number(answers[q.id] || 0)
  }))

  chartData.value = {
    labels: dataSet.map(d => d.skill),
    datasets: [
      {
        label: 'Your Skill Level',
        data: dataSet.map(d => d.value),
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        borderColor: 'rgba(59, 130, 246, 1)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
      }
    ]
  }
  result.value = dataSet
  submitting.value = false
}

function resetForm() {
  for (const key in answers) {
    answers[key] = ''
  }
  result.value = null
}
</script>