<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/logo.png" alt="Logo" class="navbar-logo">
        <span class="navbar-title">My Website</span>
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
        <router-link to="/experiences" class="navbar-item">Experiences</router-link>
        <router-link to="/getintouch" class="navbar-item">Get in Touch</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add custom styles for the navigation menu */
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.navbar-title {
  font-size: 24px;
  font-weight: bold;
}

.navbar-menu {
  background-color: #333;
  color: #fff;
}

.navbar-item {
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.navbar-item:hover {
  background-color: #555;
}
</style>
