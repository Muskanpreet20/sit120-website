<template>
  <div>
    <section id="portfolio">
      <h2 class="portfolio-title">My Portfolio</h2>
      <p class="portfolio-description">Welcome to my portfolio page, where I showcase some of my recent projects and work. Feel free to explore and get inspired!</p>

      <!-- Vue component for displaying projects -->
      <div class="project" v-for="project in projects" :key="project.id">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Todo App",
          description: "I developed a feature-rich Todo application that helps users stay organized and manage tasks efficiently. It includes features like task prioritization, due dates, and task categorization.",
        },
        {
          id: 2,
          title: "Fashion Designer Hub Website",
          description: "I contributed to the creation of a website for fashion designers to showcase their portfolios, connect with clients, and explore the latest fashion trends. This project involved front-end development and user interface design.",
        },
        {
          id: 3,
          title: "Game Project",
          description: "I worked on a game development project where I contributed to the development of an interactive 2D game. My role involved coding game mechanics, implementing character movement, and creating engaging gameplay experiences.",
        },
        {
          id: 4,
          title: "E-commerce Website Redesign",
          description: "I led the redesign of an e-commerce website, enhancing the user experience and improving the overall aesthetics. The project resulted in increased user engagement and higher conversion rates.",
        },
        {
          id: 5,
          title: "Blog Platform",
          description: "I built a blog platform from scratch, allowing users to create, edit, and publish blog posts. The platform features a user-friendly interface and integrates with social media for easy content sharing.",
        },
        {
          id: 6,
          title: "Responsive Web Design Project",
          description: "I designed and developed a responsive website that adapts seamlessly to various screen sizes and devices. This project showcased my skills in responsive design and cross-browser compatibility.",
        },
        {
          id: 7,
          title: "Data Visualization Dashboard",
          description: "I created a data visualization dashboard for a real-time data monitoring application. The dashboard displays critical data metrics and trends in an easily digestible format, helping users make informed decisions.",
        },
        // Add more projects here
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

/* Portfolio Page */
#portfolio {
  padding: 40px 20px;
  text-align: center;
}

.portfolio-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #007BFF; /* Add a color to the title */
  animation: fadeInUp 1s ease-in-out;
}

.portfolio-description {
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0;
  color: #333; /* Change the description color */
}

.project {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  text-align: left;
  animation: fadeIn 1s ease-in-out;
  transition: transform 0.3s ease-in-out;
}

.project:hover {
  transform: translateY(-5px);
}

.project-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #007BFF; /* Add a color to the project title */
}

.project-description {
  font-size: 16px;
  line-height: 1.6;
  color: #555; /* Change the project description color */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
