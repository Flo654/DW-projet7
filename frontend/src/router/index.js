import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import MainVue from '../views/MainVue.vue'
import Profile from '../views/Profile.vue'
import UsersList from '../views/UsersList.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'MainVue',
    component: MainVue
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    props: true
  },
  {
    path: '/users',
    name: 'UsersList',
    component: UsersList,
    props: true
  },
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
