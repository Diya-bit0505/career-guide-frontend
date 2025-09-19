<template>
  <div>
    <h2 class="text-3xl font-semibold mb-4">Career Pack</h2>

    <div class="border-b mb-6 max-w-4xl mx-auto">
      <nav class="-mb-px flex space-x-8 justify-center">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
          :class="tab === currentTab ? activeClass : inactiveClass"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          type="button"
        >
          {{ tab }}
        </button>
      </nav>
    </div>

    <div class="max-w-4xl mx-auto">
      <SkillMap v-if="currentTab === 'Skill Map'" />
      <Projects v-if="currentTab === 'Projects'" />
      <Resources v-if="currentTab === 'Resources'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SkillMap from '../components/CareerPack/SkillMap.vue'
import Projects from '../components/CareerPack/Projects.vue'
import Resources from '../components/CareerPack/Resources.vue'

const tabs = ['Skill Map', 'Projects', 'Resources']
const currentTab = ref('Skill Map')

const activeClass = 'border-blue-600 text-blue-600'
const inactiveClass =
  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
</script>