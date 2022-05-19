
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
]