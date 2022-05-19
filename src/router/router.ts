
import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/the-firm',
    name: 'Firm',
    component: () => import(/* webpackChunkName: "The-firm" */ '../views/Firm.vue')
  },
  {
    path: '/practice-areas',
    name: 'Practice-Areas',
    component: () => import(/* webpackChunkName: "Practice-Areas" */ '../views/Practice.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact-us',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/Contact-us.vue')
  }
]