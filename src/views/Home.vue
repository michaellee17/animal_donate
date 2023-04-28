<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import { useRouter } from 'vue-router'
import 'swiper/css';
import { onMounted, reactive } from 'vue';
import axios from 'axios';
const banners = reactive({});
onMounted(() => {
    axios.get('https://www.warmwarm.tw/api/banner', {})
        .then(response => {
            console.log(response.data.results);
            Object.assign(banners, response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
});



const router = useRouter()
const goToAboutPage = () => {
    router.push('/more/inner')
}

const modules = [Autoplay];
</script>
<template>
    <div>
        <swiper :slides-per-view="1" :modules="modules" :autoplay="{ delay: 3000 }">
            <swiper-slide v-for="banner in banners" :key="banner.id">
                <img :src="banner.image" alt="">
            </swiper-slide>
        </swiper>

        <div class="video_section">
            <div class="video_div">
                <video class="video" controls autoplay muted>
                    <source src="assets/video.mp4" type="video/mp4">
                </video>
            </div>
            <section class="top_section">
                <router-link to="/more" class="more_text">more ></router-link>
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
            </section>
        </div>
        <section>
            <div class="donate_img">
                <img src="assets/indexDonate.png" alt="">
            </div>
            <router-link to="/more" class="more">more..</router-link>
            <div class="foods">
                <div class="donate_food">
                    <div class="wrapper">
                        <img src="assets/donate01.png" alt="">
                    </div>
                    <button type="button">線上捐糧</button>
                </div>
                <div class="donate_food">
                    <div class="wrapper">
                        <img src="assets/donate02.png" alt="">
                    </div>
                    <button type="button">線上捐糧</button>
                </div>
                <div class="donate_food">
                    <div class="wrapper">
                        <img src="assets/donate02.png" alt="">
                    </div>
                    <button type="button">線上捐糧</button>
                </div>
                <div class="donate_food">
                    <div class="wrapper">
                        <img src="assets/donate02.png" alt="">
                    </div>
                    <button type="button">線上捐糧</button>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
.wrapper {
    padding: 25px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.05);
}

.video {
    width: 100%;
}

.more {
    color: red;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: right;
    cursor: pointer;
    display: block;
    text-decoration: none;
    width: 90%;
    margin: 5px auto;
}

.foods {
    display: flex;
    justify-content: center;
    gap: 5%;
    width: 90%;
    margin: 0 auto;
}

.donate_food {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.donate_food button {
    width: 125px;
    background-color: rgb(183, 171, 161);
    color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 5px 0;
    margin: 5px auto 8px auto;
}

.donate_food img {
    text-align: center;
}

.donate_img {
    display: flex;
    justify-content: center;
    margin: 8px 0;
}

.donate_img img {
    width: 188px;
    height: 48px;
    object-fit: contain;
}

.card_section {
    display: flex;
    gap: 10px;
}

.card_text {
    font-size: 8px;
    padding: 10px 15px;
}

.card_date {
    padding: 20.4px 0px 15.5px 15px;
    font-size: 8px;
    line-height: 9.6px;
    color: rgb(128, 157, 165)
}

section {
    padding: 0px 10px 10px 10px;
}

.more_text {
    color: #809da5;
    font-size: 9px;
    letter-spacing: 1px;
    text-align: right;
    cursor: pointer;
    display: block;
    text-decoration: none;
    margin-bottom: 5px;
}

.card {
    width: 50%;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.05);
}

.tilte_date_hr {
    width: 90%;
    margin: 0 auto;
}

img {
    width: 100%;
    object-fit: contain;
}

.donate_food:nth-of-type(n+3) {
    display: none;
}

@media (min-width: 576px) {
    .donate_food:nth-of-type(n-3) {
        display: block;
    }

    .donate_food:nth-of-type(n+4) {
        display: none;
    }
}

@media (min-width: 768px) {
    .donate_food:nth-of-type(n-4) {
        display: block;
    }

    .donate_food:nth-of-type(n+5) {
        display: none;
    }
}

@media (min-width: 992px) {
    .video_div {
        flex: 1;
        margin-top: 20px;
        padding-left: 2px;
    }

    .video_section {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: stretch;
    }

    .top_section {
        flex: 1;
    }

    .card_text {
        padding: 17px 25px;
        font-size: 14px;
    }
}

@media (min-width: 1100px) {
    .foods {
        display: flex;
        justify-content: space-between;
        gap: 5%;
        width: 80%;
    }

    .more {
        width: 80%;
    }
}

@media (min-width: 1200px) {
    .foods {
        display: flex;
        justify-content: space-between;
        gap: initial;
        width: 75%;
    }

    .more {
        width: 75%;
    }
}

@media (min-width: 1600px) {
    .foods {
        display: flex;
        justify-content: space-between;
        gap: initial;
        width: 60%;
    }

    .more {
        width: 60%;
    }
}
</style>