<template>
  <div>
    <h2 class="text-3xl font-semibold mb-6">Alumni Stories & Q/A</h2>

    <section class="mb-8 max-w-3xl mx-auto">
      <h3 class="text-2xl font-semibold mb-3">Alumni Stories</h3>
      <ul
        class="list-disc list-inside space-y-2 bg-white p-6 rounded shadow max-w-2xl mx-auto"
      >
        <li
          v-for="(story, idx) in stories"
          :key="idx"
          class="border-b last:border-none pb-3"
        >
          <h4 class="font-semibold">{{ story.title }}</h4>
          <p>{{ story.content }}</p>
          <p class="text-sm italic text-gray-500">- {{ story.author }}</p>
        </li>
      </ul>
    </section>

    <section class="max-w-3xl mx-auto">
      <h3 class="text-2xl font-semibold mb-3">Q/A Threads</h3>

      <div
        v-for="thread in threads"
        :key="thread.id"
        class="mb-6 bg-white p-4 rounded shadow max-w-2xl mx-auto"
      >
        <h4 class="font-semibold mb-2">{{ thread.question }}</h4>
        <ul class="list-disc list-inside space-y-1">
          <li v-for="(answer, idx) in thread.answers" :key="idx">{{ answer }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
const stories = [
  {
    title: 'From Intern to Frontend Lead',
    content:
      'I started as an intern and with guidance completed many projects, leading to senior roles.',
    author: 'John Doe',
  },
  {
    title: 'Switching Careers Successfully',
    content:
      'My career transition was seamless thanks to careful planning and skills development.',
    author: 'Jane Smith',
  },
]

const threads = [
  {
    id: 1,
    question: 'How to prepare for Vue.js interviews?',
    answers: [
      'Focus on understanding reactivity system',
      'Build simple projects to explain concepts',
      'Practice common interview questions',
    ],
  },
  {
    id: 2,
    question: 'What are good resources for data science?',
    answers: [
      'Coursera courses',
      'Kaggle competitions',
      'Books like "Python for Data Analysis"',
    ],
  },
]
</script>