import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto font-bold text-2xl">Career Guide (React)</div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-semibold">It works!</h1>
        <p className="text-gray-700">React + Vite + Tailwind starter. We can now integrate your Figma-derived screens.</p>
      </main>
      <footer className="bg-gray-200 p-4 text-center text-gray-600 text-sm">&copy; 2024 CareerGuide</footer>
    </div>
  )
}
