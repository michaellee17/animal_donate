<script setup>
import { ref, reactive } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'
const isOpen = ref(false);
const aboutOpen = ref(false);
const donateOpen = ref(false);
const publicOpen = ref(false);
const loginOpen = ref(false);

//點擊任何連結將手機版選單還原和子選單還原
const resetMenu = ((device) => {
  if (device === 'mobile') {
    isOpen.value = false
  }
  aboutOpen.value = false
  donateOpen.value = false
  publicOpen.value = false
  loginOpen.value = false
})


</script>
<template>
  <nav class="navbar">
    <!-- 桌機板 -->
    <div class="ham_tilte_wrap">
      <div class="hamburger" @click="isOpen = !isOpen"><img src="../../assets/hamburger.svg" alt=""></div>
      <div class="title"><router-link to="/"><img src="../../assets/title.svg" alt=""></router-link>></div>
      <div class="navbar_768">
        <ul class="navbar_768_title">
          <li><router-link to="/about" @click="resetMenu('pc')">關於協會</router-link><span class="more"
              @click="aboutOpen = !aboutOpen"><i class="fa-solid fa-greater-than"></i></span>
            <div class="submenu" v-if="aboutOpen">
              <ul>
                <li><router-link to="/about" @click="resetMenu('pc')">協會介紹</router-link></li>
                <li><router-link to="/about/questions" @click="resetMenu('pc')">常見問題</router-link></li>
                <li><router-link to="/about/report" @click="resetMenu('pc')">年度報告</router-link></li>
                <li><router-link to="/about/boxmap" @click="resetMenu('pc')">募捐箱地圖</router-link></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/donate" @click="resetMenu('pc')">線上捐款</router-link><span class="more"
              @click="donateOpen = !donateOpen"><i class="fa-solid fa-greater-than"></i></span>
            <div class="submenu" v-if="donateOpen">
              <ul>
                <li><router-link to="/donate" @click="resetMenu('pc')">線上刷卡</router-link></li>
                <li><router-link to="/donate/regular" @click="resetMenu('pc')">定期捐款</router-link></li>
                <li><router-link to="/donate/post" @click="resetMenu('pc')">郵政劃撥</router-link></li>
                <li><router-link to="/donate/atm" @click="resetMenu('pc')">ATM轉帳</router-link></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/food" @click="resetMenu('pc')">線上捐糧</router-link></li>
          <li><router-link to="/feed" @click="resetMenu('pc')">線上助養</router-link></li>
          <li><router-link to="/public" @click="resetMenu('pc')">公益義賣</router-link><span class="more"
              @click="publicOpen = !publicOpen"><i class="fa-solid fa-greater-than"></i></span>
            <div class="submenu" v-if="publicOpen">
              <ul>
                <li><router-link to="/public" @click="resetMenu('pc')">物資捐贈</router-link></li>
                <li><router-link to="/public/shopping" @click="resetMenu('pc')">線上購物</router-link></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/volunteer" @click="resetMenu('pc')">志工招募</router-link></li>
          <li><router-link to="/contact" @click="resetMenu('pc')">聯絡我們</router-link></li>
          <li><router-link to="/login" @click="resetMenu('pc')">登入</router-link><span class="more"
              @click="loginOpen = !loginOpen"><i class="fa-solid fa-greater-than"></i></span>
            <div class="submenu" v-if="loginOpen">
              <ul>
                <li><router-link to="/login" @click="resetMenu('pc')">個人檔案</router-link></li>
                <li><router-link to="/login/record" @click="resetMenu('pc')">會員紀錄</router-link></li>
                <li><router-link to="/login/logout" @click="resetMenu('pc')">登出</router-link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 手機板 -->
    <ul class="navbar-menu" v-if="isOpen">
      <li><router-link to="/about" @click="resetMenu('mobile')">關於協會</router-link><span class="more"
          @click="aboutOpen = !aboutOpen"><i class="fa-solid fa-greater-than"></i></span></li>
      <div class="submenu" v-if="aboutOpen">
        <ul>
          <li><router-link to="/about" @click="resetMenu('mobile')">協會介紹</router-link></li>
          <li><router-link to="/about/questions" @click="resetMenu('mobile')">常見問題</router-link></li>
          <li><router-link to="/about/report" @click="resetMenu('mobile')">年度報告</router-link></li>
          <li><router-link to="/about/boxmap" @click="resetMenu('mobile')">募捐箱地圖</router-link></li>
        </ul>
      </div>
      <li><router-link to="/donate" @click="resetMenu('mobile')">線上捐款</router-link><span class="more"
          @click="donateOpen = !donateOpen"><i class="fa-solid fa-greater-than"></i></span></li>
      <div class="submenu" v-if="donateOpen">
        <ul>
          <li><router-link to="/donate" @click="resetMenu('mobile')">線上刷卡</router-link></li>
          <li><router-link to="/donate/regular" @click="resetMenu('mobile')">定期捐款</router-link></li>
          <li><router-link to="/donate/post" @click="resetMenu('mobile')">郵政劃撥</router-link></li>
          <li><router-link to="/donate/atm" @click="resetMenu('mobile')">ATM轉帳</router-link></li>
        </ul>
      </div>
      <li><router-link to="/food" @click="resetMenu('mobile')">線上捐糧</router-link></li>
      <li><router-link to="/feed" @click="resetMenu('mobile')">線上助養</router-link></li>
      <li><router-link to="/public" @click="resetMenu('mobile')">公益義賣</router-link><span class="more"
          @click="publicOpen = !publicOpen"><i class="fa-solid fa-greater-than"></i></span></li>
      <div class="submenu" v-if="publicOpen">
        <ul>
          <li><router-link to="/public" @click="resetMenu('mobile')">物資捐贈</router-link></li>
          <li><router-link to="/public/shopping" @click="resetMenu('mobile')">線上購物</router-link></li>
        </ul>
      </div>
      <li><router-link to="/volunteer" @click="resetMenu('mobile')">志工招募</router-link></li>
      <li><router-link to="/contact" @click="resetMenu('mobile')">聯絡我們</router-link></li>
      <li><router-link to="/login" @click="resetMenu('mobile')">登入</router-link><span class="more"
          @click="loginOpen = !loginOpen"><i class="fa-solid fa-greater-than"></i></span></li>
      <div class="submenu" v-if="loginOpen">
        <ul>
          <li><router-link to="/login" @click="resetMenu('mobile')">個人檔案</router-link></li>
          <li><router-link to="/login/record" @click="resetMenu('mobile')">會員紀錄</router-link></li>
          <li><router-link to="/login/logout" @click="resetMenu('mobile')">登出</router-link></li>
        </ul>
      </div>
    </ul>
  </nav>
</template>
<style scoped>
.navbar_768_title {
  position: relative;
}

.navbar_768_title .submenu {
  padding: 10px;
  position: fixed;
  background-color: rgb(85, 37, 196);
}

.navbar-menu .submenu {
  padding: 10px;
  background-color: rgb(85, 37, 196);
}

.submenu ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.navbar_768 {
  display: none;
}

.ham_tilte_wrap {
  display: flex;
  padding: 10px;
}

.title {
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

.navbar-menu a {
  text-decoration-line: none;
  color: white;
  font-size: 20px;
  padding-top: 0px;
}

.navbar_768_title a {
  text-decoration-line: none;
  color: black;
}

.navbar {
  background-color: #fff;
}

.navbar-menu {
  padding: 5px;
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

@media (min-width: 768px) {
  .title {
    margin-bottom: 10px;
  }

  .hamburger {
    display: none;
  }

  .navbar_768 {
    display: block;
    width: 100%;
  }

  .navbar_768_title {
    display: flex;
    justify-content: space-around;
  }

  .ham_tilte_wrap {
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style-type: none;
  }
}

@media (min-width: 992px) {
  .title {
    margin-bottom: 0;
    width: 40%;
  }

  .ham_tilte_wrap {
    flex-direction: row;
  }
}

@media (min-width: 1200px) {}</style>