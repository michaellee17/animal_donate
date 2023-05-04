<script setup>
import AboutTopVue from '../../components/Others/AboutTop.vue';
import FoodCard from '../../components/Others/FoodCard.vue';
</script>
<template>
    <AboutTopVue pageTitle="物資捐贈" imageSrc="/assets/item02.jpg" />
    <div class="card_section">
        <FoodCard foodText="寵物護理凝膠 200元" imageSrc="/assets/item.png" />
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