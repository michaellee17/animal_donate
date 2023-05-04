<script setup>
import AboutTopVue from '../../components/Others/AboutTop.vue';
import FoodCard from '../../components/Others/FoodCard.vue';
</script>
<template>
    <AboutTopVue pageTitle="線上購物" imageSrc="/assets/shopping.jpg" />
    <div class="card_section">
        <FoodCard foodText="NOBD+ 真無線藍芽耳機 4980元" imageSrc="/assets/shopping02.png" />
    </div>
</template>
<style scoped>
.card_section{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:15px 0;
}
</style>