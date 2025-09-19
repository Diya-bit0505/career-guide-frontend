<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <nav class="container mx-auto flex flex-wrap justify-between items-center gap-4">
        <router-link to="/" class="font-bold text-2xl">CareerGuide</router-link>
        <div class="flex flex-wrap gap-4">
          <router-link to="/login" class="hover:underline">Login</router-link>
          <router-link to="/register" class="hover:underline">Register</router-link>
          <router-link to="/quiz" class="hover:underline">Quiz</router-link>
          <router-link to="/results" class="hover:underline">Results</router-link>
          <router-link to="/career-pack" class="hover:underline">Career Pack</router-link>
          <router-link to="/jd-analyzer" class="hover:underline">JD Analyzer</router-link>
          <router-link to="/testimonials" class="hover:underline">Testimonials</router-link>
          <router-link to="/alumni" class="hover:underline">Alumni</router-link>
          <router-link to="/evidence" class="hover:underline">Evidence</router-link>
        </div>
      </nav>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <router-view />
    </main>
    <footer class="bg-gray-200 p-4 text-center text-gray-600 text-sm">
      &copy; 2024 CareerGuide. All rights reserved.
    </footer>
  </div>
</template>