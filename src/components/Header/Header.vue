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
    <!-- <button class="navbar-toggle" @click="isOpen = !isOpen" :class="{ open: isOpen }">
      <span class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </span>
    </button> -->
    <div class="ham_tilte_wrap">
      <div @click="isOpen = !isOpen"><img src="../../assets/hamburger.svg" alt=""></div>
      <div class="title"><img src="../../assets/title.svg" alt=""></div>
    </div>
    <ul class="navbar-menu" v-if="isOpen">
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

.ham_tilte_wrap{
  display: flex;
  padding: 10px;
}
.title{
  width: 100%;
  text-align: center;
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
  background-color: #fff;
}

.navbar-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(15, 15, 15);
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
  width: 14px;
  height: 11px;
  position: relative;
}



</style>