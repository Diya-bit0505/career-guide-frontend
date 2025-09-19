import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Auth/Login.vue')
const Register = () => import('../views/Auth/Register.vue')
const Quiz = () => import('../views/QuizPage.vue')
const Results = () => import('../views/ResultsPage.vue')
const CareerPack = () => import('../views/CareerPackPage.vue')
const JDAnalyzer = () => import('../views/JDAnalyzerPage.vue')
const Testimonials = () => import('../views/TestimonialsPage.vue')
const Alumni = () => import('../views/AlumniPage.vue')
const Evidence = () => import('../views/EvidencePage.vue')
const NotFound = () => import('../views/NotFound.vue')
const AccessDenied = () => import('../views/AccessDenied.vue')

const routes = [
  { path: '/', redirect: '/quiz' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/quiz', component: Quiz },
  { path: '/results', component: Results },
  { path: '/career-pack', component: CareerPack },
  { path: '/jd-analyzer', component: JDAnalyzer },
  { path: '/testimonials', component: Testimonials },
  { path: '/alumni', component: Alumni },
  { path: '/evidence', component: Evidence },
  { path: '/access-denied', component: AccessDenied },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router