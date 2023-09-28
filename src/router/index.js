import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyPortfolio from '../views/MyPortfolio.vue' // Import your MyPortfolio component
import MyExperiences from '../views/MyExperiences.vue' // Import your MyExperiences component
import GetinTouch from '../views/GetinTouch.vue' // Import your GetinTouch component
import NavigationMenu from '../views/NavigationMenu.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/my-portfolio',
    name: 'my-portfolio',
    component: MyPortfolio
  },
  {
    path: '/my-experiences',
    name: 'my-experiences',
    component: MyExperiences
  },
  {
    path: '/get-in-touch',
    name: 'get-in-touch',
    component: GetinTouch
  },
  // Add a comma here to separate the previous route from the new one
  {
    path: '/navigation-menu',
    component: NavigationMenu
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
