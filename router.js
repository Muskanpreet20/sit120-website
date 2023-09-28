import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/HomePage.vue';
import Portfolio from './components/MyPortfolio.vue';
import Experiences from './components/MyExperiences.vue';
import GetInTouch from './components/GetInTouch.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/experiences', component: Experiences },
  { path: '/getintouch', component: GetInTouch },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
