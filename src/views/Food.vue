<script setup>
import AboutTopVue from '../components/Others/AboutTop.vue';
import FoodCard from '../components/Others/FoodCard.vue';
</script>
<template>
    <AboutTopVue pageTitle="線上捐糧" imageSrc="/assets/indexTop.png" />
    <div class="card_section">
        <FoodCard foodText="狗狗營養飼料(小包5日份) 500元" imageSrc="/assets/indexTop.png" />
        <FoodCard foodText="狗狗營養飼料(小包5日份) 500元" imageSrc="/assets/indexTop.png" />
        <FoodCard foodText="狗狗營養飼料(小包5日份) 500元" imageSrc="/assets/indexTop.png" />
        <FoodCard foodText="狗狗營養飼料(小包5日份) 500元" imageSrc="/assets/indexTop.png" />
    </div>
</template>
<style scoped>
.card_section{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    padding:15px 0;
}
</style>