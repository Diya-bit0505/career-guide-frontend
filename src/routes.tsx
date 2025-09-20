import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Landing = React.lazy(() => import('./screens/LandingScreen'))
const Login = React.lazy(() => import('./screens/LoginScreen'))
const Quiz = React.lazy(() => import('./screens/QuizScreen'))
const Results = React.lazy(() => import('./screens/ResultsScreen'))
const Skills = React.lazy(() => import('./screens/SkillsAnalyzerScreen'))
const About = React.lazy(() => import('./screens/AboutUsScreen'))
const InterviewKit = React.lazy(() => import('./screens/InterviewKitScreen'))

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<div className="p-6">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/skills-analyzer" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/interview-kit" element={<InterviewKit />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Suspense>
  )
}
