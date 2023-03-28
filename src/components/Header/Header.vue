<script setup>
import { ref } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'
const isOpen = ref(false);
const aboutOpen = ref(false);
const donateOpen = ref(false);
const publicOpen = ref(false);
const loginOpen = ref(false);

</script>
<template>
  <nav class="navbar">
    <button class="navbar-toggle" @click="isOpen = !isOpen" :class="{ open: isOpen }">
      <span class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </span>
    </button>
    <span class="title">台灣有點溫暖毛孩協會</span>
    <ul class="navbar-menu" v-show="isOpen">
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/about">關於協會</router-link><span class="more" @click="aboutOpen = !aboutOpen"><i
            class="fa-solid fa-greater-than"></i></span></li>
      <div v-if="aboutOpen">subMenu</div>
      <li><router-link to="/donate">線上捐款</router-link><span class="more" @click="donateOpen = !donateOpen"><i
            class="fa-solid fa-greater-than"></i></span></li>
      <div v-if="donateOpen">subMenu</div>
      <li><router-link to="/food">線上捐糧</router-link></li>
      <li><router-link to="/feed">線上助養</router-link></li>
      <li><router-link to="/public">公益義賣</router-link><span class="more" @click="publicOpen = !publicOpen"><i
            class="fa-solid fa-greater-than"></i></span></li>
      <div v-if="publicOpen">subMenu</div>
      <li><router-link to="/volunteer">志工招募</router-link></li>
      <li><router-link to="/contact">聯絡我們</router-link></li>
      <li><router-link to="/login">登入</router-link><span class="more" @click="loginOpen = !loginOpen"><i
            class="fa-solid fa-greater-than"></i></span></li>
      <div v-if="loginOpen">subMenu</div>
    </ul>
  </nav>
</template>
<style scoped>
.title{
  margin-left:70px;
}
.more {
  padding-top: 2px;
  margin-left: 10px;
  font-weight: bold;
  padding-bottom: 0px;

}
i {
  font-size: 28px;
}
a {
  text-decoration-line: none;
  /* 拿掉底線 */
  color: white;
  font-size: 20px;
  padding-top: 0px;
}

.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px;

}

.navbar-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.navbar-menu li {
  list-style: none;
  color: #fff;
  width: 160px;
  display: flex;
  justify-content: space-between;
  vertical-align: bottom;
}

.navbar-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.hamburger {
  display: block;
  width: 24px;
  height: 16px;
  position: relative;
}

.hamburger div {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
}

.hamburger div:nth-child(1) {
  top: 0;
}

.hamburger div:nth-child(2) {
  top: 7px;
}

.hamburger div:nth-child(3) {
  bottom: 0;
}

.open .hamburger div:nth-child(1) {
  transform: rotate(45deg);
  top: 7px;
}

.open .hamburger div:nth-child(2) {
  opacity: 0;
}

.open .hamburger div:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 7px;
}
</style>