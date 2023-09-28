<template>
    <section id="getintouch">
      <h2>Get in Touch</h2>
      <p>If you have any questions or would like to connect, feel free to reach out to me using the contact form below:</p>
  
      <!-- Vue component for the contact form -->
      <contact-form></contact-form>
  
      <!-- Contact Information Table -->
      <table>
        <tr>
          <th>Name</th>
          <td class="black-text">Muskanpreet Kaur</td>
        </tr>
        <tr>
          <th>Email</th>
          <td><a href="mailto:muskkann.20@gmail.com">muskkann.20@gmail.com</a></td>
        </tr>
        <tr>
          <th>Student ID</th>
          <td class="black-text">s223047441</td>
        </tr>
        <tr>
          <th>LinkedIn</th>
          <td><a href="https://au.linkedin.com/in/muskanpreet-kaur-574381271">Muskan's LinkedIn</a></td>
        </tr>
      </table>
    </section>
  </template>
  
  <script>
  export default {
    components: {
      'contact-form': {
        data() {
          return {
            name: '',
            email: '',
            message: ''
          };
        },
        methods: {
          submitForm() {
            // Handle form submission here
            alert(`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
            // You can also send the form data to a server using AJAX or fetch
          }
        },
        template: `
          <form @submit.prevent="submitForm">
            <label for="name">Your Name:</label>
            <input type="text" id="name" v-model="name" required>
  
            <label for="email">Your Email:</label>
            <input type="email" id="email" v-model="email" required>
  
            <label for="message">Your Message:</label>
            <textarea id="message" v-model="message" rows="4" required></textarea>
  
            <button type="submit">Send</button>
          </form>
        `
      }
    }
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
  
  /* Get in Touch Page */
  #getintouch {
    padding: 40px 20px;
    text-align: center;
  }
  
  #getintouch h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  #getintouch p {
    font-size: 18px;
    line-height: 1.6;
    margin: 20px 0;
  }
  
  #getintouch table {
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
  }
  
  #getintouch th,
  #getintouch td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  #getintouch th {
    background-color: #333;
    color: #fff;
  }
  
  #getintouch .black-text {
    color: #000;
  }
  </style>
  