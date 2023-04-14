import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

import About from '../views/about/About.vue';
import Questions from '../views/about/Questions.vue';
import Report from '../views/about/Report.vue';
import BoxMap from '../views/about/BoxMap.vue';

import Donate from '../views/donate/Donate.vue';
import Regular from '../views/donate/Regular.vue';
import Post from '../views/donate/Post.vue';
import ATM from '../views/donate/ATM.vue';

import Food from '../views/Food.vue';

import Feed from '../views/Feed.vue';

import Public from '../views/public/Public.vue';
import Shopping from '../views/public/Shopping.vue';

import Volunteer from '../views/Volunteer.vue';

import Contact from '../views/Contact.vue';

import Login from '../views/login/Login.vue';
import Record from '../views/login/Record.vue';
import Logout from '../views/login/Logout.vue';

import More from '../views/More.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/about/questions',
    name: ' Questions',
    component: Questions
  },
  {
    path: '/about/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/about/boxMap',
    name: 'BoxMap',
    component: BoxMap
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/donate/regular',
    name: 'Regular',
    component: Regular
  },
  {
    path: '/donate/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/donate/atm',
    name: 'ATM',
    component: ATM
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
    path: '/public/shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/login/record',
    name: 'Record',
    component: Record
  },
  {
    path: '/login/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
