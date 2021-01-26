import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../components/Signup.vue'
import MainVue from '../views/MainVue.vue'
import CreateMessage from '../components/CreateMessage.vue'
import User from '../components/User.vue'
import ModifyMessage from '../components/ModifyMessage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Signup
  },
  {
    path: '/main',
    name: 'MainVue',
    component: MainVue,
    props: true
  },
  {
    path: '/message/create',
    name: 'Create',
    component: CreateMessage
  },
  {
    path: '/message/modify',
    name: 'Modify',
    component: ModifyMessage
  },

  {
    path: '/profil',
    name: 'Profil',
    component: User,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
