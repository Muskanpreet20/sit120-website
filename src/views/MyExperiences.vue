<template>
  <section id="experiences">
    <h2 class="fade-in">My Experiences</h2>
    <p class="fade-in">Welcome to my experiences page where I'll share some of my academic and personal achievements as a Year 1 student pursuing a Bachelors of Information Technology.</p>

    <!-- Academic Achievements -->
    <h3 class="fade-in">Academic Achievements</h3>
    <ul>
      <li v-for="achievement in academicAchievements" :key="achievement.title" class="fade-in">
        <strong>{{ achievement.title }}</strong> - {{ achievement.description }}
      </li>
    </ul>

    <!-- Internship -->
    <h3 class="fade-in">Internship</h3>
    <p class="fade-in">{{ internship.description }}</p>

    <!-- Personal Projects -->
    <h3 class="fade-in">Personal Projects</h3>
    <ul>
      <li v-for="project in personalProjects" :key="project.title" class="fade-in">
        <strong>{{ project.title }}</strong> - {{ project.description }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      academicAchievements: [
        {
          title: 'High GPA',
          description: 'Maintained a GPA of 3.9 during my first year of studies.',
        },
        {
          title: 'Top of the Class',
          description: 'Ranked among the top 5% of students in my major.',
        },
      ],
      internship: {
        title: 'Web Development Intern',
        description: 'Gained hands-on experience in HTML, CSS, and JavaScript while assisting with website projects.',
      },
      personalProjects: [
        {
          title: 'Portfolio Website',
          description: 'Designed and developed my own portfolio website (the one you\'re viewing now).',
        },
        {
          title: 'Online Blog',
          description: 'Created a blog where I share insights on web development and programming.',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles for improved design */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

/* Experiences Page */
#experiences {
  padding: 40px 20px;
  text-align: center;
}

#experiences h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #007BFF; /* Blue color for the heading */
}

#experiences p {
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0;
}

/* Academic Achievements */
#experiences h3 {
  font-size: 24px;
  margin-top: 20px;
  color: #FF5733; /* Orange color for subheadings */
}

#experiences ul {
  list-style: none;
  padding: 0;
}

#experiences ul li {
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0;
}

/* Internship */
#experiences h3 {
  font-size: 24px;
  margin-top: 20px;
}

#experiences p {
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0;
}

/* Personal Projects */
#experiences h3 {
  font-size: 24px;
  margin-top: 20px;
}

#experiences ul {
  list-style: none;
  padding: 0;
}

#experiences ul li {
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0;
}

/* Animation */
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
