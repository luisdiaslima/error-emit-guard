import { createMemoryHistory, createRouter } from 'vue-router';
const Home = () => import('../src/pages/Home.vue')
const Profile = () => import('../src/pages/Profile.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router