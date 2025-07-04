import { createRouter, createWebHistory } from 'vue-router'
import Messenger from '../views/Messenger.vue'
import HistoryView from '../views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Messenger,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
  ],
})

export default router
