import { createApp } from 'vue'
import App from './App.vue'
import Welcome from './components/Welcome.vue'
import Portfolio from './components/Portfolio.vue'
import ContactForm from './components/ContactForm.vue'
import '@/styles/style.css';

const app = createApp(App);
app.component('welcome', Welcome);
app.component('portfolio', Portfolio);
app.component(' contact-form',  ContactForm);
app.mount('#app');
