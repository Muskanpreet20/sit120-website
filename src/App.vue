<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link> |
      <router-link to="/my-portfolio" class="nav-link">Portfolio</router-link> |
      <router-link to="/my-experiences" class="nav-link">Experiences</router-link> |
      <router-link to="/get-in-touch" class="nav-link">Get in Touch</router-link>
    </nav>
    <router-view/>
  </div>
</template>
const app = createApp(App);

app.component('contact-form', ContactForm); // Register the ContactForm component

app.use(router).mount('#app');


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: #ffcccb; /* Baby pink background color */
  padding: 10px 0;
}

.nav-link {
  font-weight: bold;
  color: #333; /* Darker text color */
  text-decoration: none;
  margin: 0 10px;
}

.nav-link:hover {
  text-decoration: underline;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
