import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'; 

// Create a Vue app instance
const app = createApp(App);

// Define a Vue instance
app.config.globalProperties.$functions = {
  toggleMobileNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
  },
  closeMobileNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.remove('show');
  },
  smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  },
  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
  },
  initializeDarkMode() {
    const savedDarkMode = localStorage.getItem('dark-mode');
    const body = document.body;

    if (savedDarkMode === 'true') {
      body.classList.add('dark-mode');
    }
  }
};

// Use the router in the app
app.use(router);

// Mount the app
app.mount('#app');
