<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>
<template>
    <nav class="navbar">
        <button class="navbar-toggle" @click="isOpen = !isOpen" :class="{ open: isOpen }">
            <span class="hamburger" >
                <div></div>
                <div></div>
                <div></div>
            </span>
           
        </button>
        <ul class="navbar-menu"  v-show="isOpen">
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/about">關於協會</router-link></li>
            <li><router-link to="/donate">線上捐款</router-link></li>
            <li><router-link to="/food">線上捐糧</router-link></li>
            <li><router-link to="/feed">線上助養</router-link></li>
            <li><router-link to="/public">公益義賣</router-link></li>
            <li><router-link to="/volunteer">志工招募</router-link></li>
            <li><router-link to="/contact">聯絡我們</router-link></li>
            <li><router-link to="/login">登入</router-link></li>
        </ul>
    </nav>
</template>
<style scoped>
a {
  text-decoration-line: none; /* 拿掉底線 */
  color:white;
}
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #333;
  color: #fff;
  padding: 10px;
}
.navbar-menu{
    display: flex;
    flex-direction: column;
    gap:10px;
}
.navbar-menu li{
    list-style: none;
    color:#fff;
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