import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Display from '../views/Display.vue'
import Sign from '../views/Sign'
import Contact from '../views/Contact.vue'
import Armenia from '../views/Armenia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/display/:id',
    name: 'display',
    component: Display
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/armenia',
    name: 'armenia',
    component: Armenia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
