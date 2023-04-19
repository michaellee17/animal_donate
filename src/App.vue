<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const hideFooter = computed(() => {
      return route.meta.hideFooter || false
})
</script>

<template>
 
  <Header/>
  
  <router-view/>

  <Footer v-if="!hideFooter"/>

</template>

<style>
*{
  margin:0;
  padding:0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
