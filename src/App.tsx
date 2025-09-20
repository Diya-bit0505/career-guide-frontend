import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav className="container mx-auto flex flex-wrap gap-4 items-center justify-between">
            <Link to="/" className="font-bold text-2xl">Career Guide</Link>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/quiz" className="hover:underline">Quiz</Link>
              <Link to="/results" className="hover:underline">Results</Link>
              <Link to="/skills-analyzer" className="hover:underline">Skills</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/interview-kit" className="hover:underline">Interview Kit</Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Routes />
        </main>
        <footer className="bg-gray-200 p-4 text-center text-gray-600 text-sm">&copy; 2024 CareerGuide</footer>
      </div>
    </BrowserRouter>
  )
}
