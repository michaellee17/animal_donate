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
  if (device === 'mobile' || device === 'logo') {
    isOpen.value = false
  }
  aboutOpen.value = false
  donateOpen.value = false
  publicOpen.value = false
  loginOpen.value = false
})
// chat gpt 給的版本 我覺得可以更好
// const resetMore = (type) => {
//   const resetValues = {
//     about: [aboutOpen, false],
//     donate: [donateOpen, false],
//     public: [publicOpen, false],
//     login: [loginOpen, false]
//   };
  
//   for (const [key, value] of Object.entries(resetValues)) {
//     console.log(key);
//     console.log(value);
//     if (key !== type) {
//       value[0].value = value[1];
//     }
//   }

//   resetValues[type][0].value = !resetValues[type][0].value;
// };

//我的版本
const resetMore = (type) => {
  const resetValues = {
    about: aboutOpen,
    donate: donateOpen,
    public: publicOpen,
    login: loginOpen
  };
  
  for (const [key, value] of Object.entries(resetValues)) {
    if (key !== type) {
      value.value = false;
    }
  }

  resetValues[type].value = !resetValues[type].value;
};


</script>
<template>
  <nav class="navbar">
    <!-- 桌機板 -->
    <div class="ham_tilte_wrap">
      <div class="hamburger" @click="isOpen = !isOpen"><img src="/assets/hamburger.svg" alt=""></div>
      <div class="title"><router-link to="/" @click="resetMenu('logo')"><img src="/assets/title.svg" alt=""></router-link></div>
      <div class="navbar_768">
        <ul class="navbar_768_title">
          <li><router-link to="/about" @click="resetMenu('pc')">關於協會</router-link><span class="more" @click="resetMore('about')"
             ><img src="/assets/arrow.svg" alt=""></span>
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
            @click="resetMore('donate')"><img src="/assets/arrow.svg" alt=""></span>
            <div class="submenu" v-if="donateOpen">
              <ul>
                <li><router-link to="/donate/online" @click="resetMenu('pc')">線上刷卡</router-link></li>
                <li><router-link to="/donate/regular" @click="resetMenu('pc')">定期捐款</router-link></li>
                <li><router-link to="/donate/post" @click="resetMenu('pc')">郵政劃撥</router-link></li>
                <li><router-link to="/donate/atm" @click="resetMenu('pc')">ATM轉帳</router-link></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/food" @click="resetMenu('pc')">線上捐糧</router-link></li>
          <li><router-link to="/feed" @click="resetMenu('pc')">線上助養</router-link></li>
          <li><router-link to="/public" @click="resetMenu('pc')">公益義賣</router-link><span class="more"
            @click="resetMore('public')"><img src="/assets/arrow.svg" alt=""></span>
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
            @click="resetMore('login')"><img src="/assets/arrow.svg" alt=""></span>
            <div class="submenu" v-if="loginOpen">
              <ul>
                <li><router-link to="/login/personal" @click="resetMenu('pc')">個人檔案</router-link></li>
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
      <div class="icoClose_div" @click="isOpen = !isOpen">
        <img src="/assets/icoClose.png" alt="">
      </div>
      <li><router-link to="/about" @click="resetMenu('mobile')">關於協會</router-link><span class="more"
          @click="aboutOpen = !aboutOpen"><img src="/assets/arrow.svg" alt=""></span></li>
      <div class="submenu" v-if="aboutOpen">
        <ul>
          <li><router-link to="/about" @click="resetMenu('mobile')">協會介紹</router-link></li>
          <li><router-link to="/about/questions" @click="resetMenu('mobile')">常見問題</router-link></li>
          <li><router-link to="/about/report" @click="resetMenu('mobile')">年度報告</router-link></li>
          <li><router-link to="/about/boxmap" @click="resetMenu('mobile')">募捐箱地圖</router-link></li>
        </ul>
      </div>
      <li><router-link to="/donate" @click="resetMenu('mobile')">線上捐款</router-link><span class="more"
          @click="donateOpen = !donateOpen"><img src="/assets/arrow.svg" alt=""></span></li>
      <div class="submenu" v-if="donateOpen">
        <ul>
          <li><router-link to="/donate/online" @click="resetMenu('mobile')">線上刷卡</router-link></li>
          <li><router-link to="/donate/regular" @click="resetMenu('mobile')">定期捐款</router-link></li>
          <li><router-link to="/donate/post" @click="resetMenu('mobile')">郵政劃撥</router-link></li>
          <li><router-link to="/donate/atm" @click="resetMenu('mobile')">ATM轉帳</router-link></li>
        </ul>
      </div>
      <li><router-link to="/food" @click="resetMenu('mobile')">線上捐糧</router-link></li>
      <li><router-link to="/feed" @click="resetMenu('mobile')">線上助養</router-link></li>
      <li><router-link to="/public" @click="resetMenu('mobile')">公益義賣</router-link><span class="more"
          @click="publicOpen = !publicOpen"><img src="/assets/arrow.svg" alt=""></span></li>
      <div class="submenu" v-if="publicOpen">
        <ul>
          <li><router-link to="/public" @click="resetMenu('mobile')">物資捐贈</router-link></li>
          <li><router-link to="/public/shopping" @click="resetMenu('mobile')">線上購物</router-link></li>
        </ul>
      </div>
      <li><router-link to="/volunteer" @click="resetMenu('mobile')">志工招募</router-link></li>
      <li><router-link to="/contact" @click="resetMenu('mobile')">聯絡我們</router-link></li>
      <li><router-link to="/login" @click="resetMenu('mobile')">登入&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link><span class="more"
          @click="loginOpen = !loginOpen"><img src="/assets/arrow.svg" alt=""></span></li>
      <div class="submenu" v-if="loginOpen">
        <ul>
          <li><router-link to="/login/personal" @click="resetMenu('mobile')">個人檔案</router-link></li>
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
  z-index: 100;
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
  font-size: 16px;
}

.navbar-menu a {
  text-decoration-line: none;
  color: black;
  font-size: 18px;
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
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  box-sizing: border-box;
}

.navbar-menu li {
  list-style: none;
  color: #000;
  display: flex;
  align-items: center;
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

.icoClose_div{
  width: 15px;
  margin-left: -40px;
}

.icoClose_div img{
  width: 100%;
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