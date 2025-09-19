<template>
  <div class="bg-white rounded p-6 shadow">
    <h3 class="text-xl font-semibold mb-4">Projects</h3>
    <ul class="space-y-4">
      <li
        v-for="project in projects"
        :key="project.name"
        class="border p-4 rounded hover:shadow-lg"
      >
        <h4 class="font-semibold">{{ project.name }}</h4>
        <p>{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
          class="text-blue-600 hover:underline"
        >
          View Repository
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'Vue Career Guide',
    description:
      'A comprehensive career guide built with Vue.js and TailwindCSS.',
    link: 'https://github.com/your-repo/vue-career-guide',
  },
  {
    name: 'Quiz App',
    description:
      'Interactive quiz application with radar chart results.',
    link: 'https://github.com/your-repo/vue-quiz-app',
  },
]
</script>