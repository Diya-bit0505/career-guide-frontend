<template>
  <div>
    <h2 class="text-3xl font-semibold mb-6">Testimonials</h2>

    <form
      @submit.prevent="addTestimonial"
      class="max-w-md mb-8 p-6 border rounded shadow bg-white"
    >
      <h3 class="text-xl font-semibold mb-4">Add Testimonial</h3>
      <input
        v-model="newTestimonial.name"
        type="text"
        required
        placeholder="Your Name"
        class="w-full border p-2 rounded mb-3"
      />
      <textarea
        v-model="newTestimonial.message"
        required
        placeholder="Your testimonial"
        class="w-full border p-2 rounded mb-3"
      ></textarea>
      <button
        :disabled="submitting"
        type="submit"
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </form>

    <section v-if="testimonials.length" class="space-y-6 max-w-3xl mx-auto">
      <div
        v-for="(t, idx) in testimonials"
        :key="idx"
        class="p-4 bg-white rounded shadow"
      >
        <p class="italic">"{{ t.message }}"</p>
        <p class="mt-2 font-semibold text-right">- {{ t.name }}</p>
      </div>
    </section>

    <p v-else>No testimonials yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const testimonials = ref([])
const newTestimonial = ref({ name: '', message: '' })
const submitting = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('testimonials')
  testimonials.value = stored ? JSON.parse(stored) : []
})

function saveTestimonials() {
  localStorage.setItem('testimonials', JSON.stringify(testimonials.value))
}

async function addTestimonial() {
  submitting.value = true
  try {
    testimonials.value.push({ ...newTestimonial.value })
    saveTestimonials()

    newTestimonial.value.name = ''
    newTestimonial.value.message = ''
  } catch {
    alert('Failed to submit testimonial')
  } finally {
    submitting.value = false
  }
}
</script>