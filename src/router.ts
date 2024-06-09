import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import('../src/pages/Home.vue')
const Profile = () => import('../src/pages/Profile.vue')

const routes = [
  { path: '/', name: 'Home',  component: Home, alias: '/'},
  { path: '/profile', name: 'Profile', component: Profile, alias: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router