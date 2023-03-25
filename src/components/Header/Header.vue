<template>
    <div id="navs">
        <router-link to="/">home</router-link>
        <router-link to="/about">關於協會</router-link>
        <router-link to="/donate">線上捐款</router-link>
        <router-link to="/food">線上捐糧</router-link>
        <router-link to="/feed">線上助養</router-link>
        <router-link to="/public">公益義賣</router-link>
        <router-link to="/volunteer">志工招募</router-link>
        <router-link to="/contact">聯絡我們</router-link>
        <router-link to="/login">登入</router-link>
    </div>
</template>
<style scoped>
    #navs{
        display: flex;
        padding:10px;
    }
</style>