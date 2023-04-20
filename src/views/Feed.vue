<script setup>
import AboutTopVue from '../components/Others/AboutTop.vue';

</script>
<template>
    <AboutTopVue pageTitle="線上助養" imageSrc="/assets/feed.png" />
    <div class="card_section">
       <div class="feed_card">
            <div class="img_section">
                <img src="/assets/feed02.png" alt="">
            </div>
            <div class="text_section">
                <h3>Jeff</h3>
                <h4>男生/2歲/新北市</h4>
                <h4>未被領養</h4>
                <p>今年一月原本在彰化流浪時被到下橡皮筋的Jeff，愛媽接到彰化志工求助去電想要帶出幫忙醫療...</p>
                <div class="button_section">
                    <button type="button">我要助養</button>
                    <button type="button">我要領養</button>
                </div>
            </div>
       </div>
    </div>
</template>
<style scoped>
.button_section{
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    gap:10px;
    
}
.button_section button{
    background-color: white;
    font-size: 16px;
    padding: 8px 25px;
    border-radius: 5px;
}
.card_section{
    display: flex;
    justify-content: center;
    padding:20px 0;
}
.feed_card{
   width: 70%;
   padding:15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   box-shadow: 0 0 5px 2px #D3D3D3;
}
.img_section img{
  width: 300px;
  height: 200px;  
}
.text_section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;
    padding: 10px 25px;
}
.text_section p{
    font-size: 12px;
    color:grey;
}

</style>