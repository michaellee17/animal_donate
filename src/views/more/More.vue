<script setup>
import AboutTopVue from '../../components/Others/AboutTop.vue';

</script>
<template>
    <AboutTopVue pageTitle="專欄文章" imageSrc="/assets/contact.png" />
    <div class="card_section">
        <div class="card" @click="goToAboutPage">
            <img src="assets/indexCard1.png" alt="">
            <div class="card_text">詹順貴專欄：對於流浪動物的處理困境與
                建議看法</div>
            <hr class="tilte_date_hr">
            <div class="card_date">2023/04/11</div>
        </div>
        <div class="card" @click="goToAboutPage">
            <img src="assets/indexCard2.png" alt="">
            <div class="card_text">詹順貴專欄：對於流浪動物的處理困境與
                建議看法</div>
            <hr class="tilte_date_hr">
            <div class="card_date">2023/04/11</div>
        </div>
    </div>
    
</template>
<style scoped>
.card_text {
    font-size: 8px;
    
}
.tilte_date_hr {
    width: 100%;
    margin: 0 auto;
    
}
.card_date {
    font-size: 8px;
    color: rgb(128, 157, 165);
    
}
.card_section {
    display: flex;
    gap: 10px;
    padding:10px;
}
.card{
    display: flex;
    flex-direction: column;
    gap:10px;
    padding:10px;
}
img{
    width: 100%;
}
.card_text{
    font-size: 8px;
}
.card{
    padding:5px;
}

</style>