import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Donate from '../views/Donate.vue';
import Food from '../views/Food.vue';
import Feed from '../views/Feed.vue';
import Public from '../views/Public.vue';
import Volunteer from '../views/Volunteer.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/public',
    name: 'Public',
    component: Public
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer
  },
  {
    path: '/contact',
    name: 'Vontact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
