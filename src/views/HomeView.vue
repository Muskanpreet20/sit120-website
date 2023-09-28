<template>
  <section id="home" class="fade-in">
    <div class="home-content">
      <div class="home-intro">
        <h1>Hello, I'm Muskan</h1>
        <h3>Year 1 | Bachelors of Information Technology</h3>
      </div>
      <div class="home-summary">
        <p>Welcome to my journey in the world of Information Technology. As a Year 1 student, I'm building a strong foundation in this dynamic field.</p>
        <p>Here are some of the skills and qualities that define me:</p>
        <ul>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
    <div class="home-cta">
      <p>Ready to explore more about my journey? Feel free to check out my portfolio and connect with me!</p>
      <router-link to="/my-portfolio" class="btn">Explore Portfolio</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        'HTML & CSS Proficiency',
        'Basic JavaScript Knowledge',
        'Problem-Solving Skills',
        'Attention to Detail',
        'Effective Communication',
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles for improved design */

/* ... (existing styles) ... */

/* New styles for animation */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
