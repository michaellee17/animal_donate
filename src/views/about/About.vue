<script setup> 
import AboutTopVue from '../../components/Others/AboutTop.vue';
</script>
<template>
    <AboutTopVue pageTitle="協會介紹"
      imageSrc="/assets/about.png"/>
    <div class="text_section">
        <p class="one_p">關於台灣有點溫暖毛孩協會，只要每個人心中有那麼一點溫暖，就可以用愛照亮流浪動物們</p>
        <p>成立本協會宗旨在於幫助在外流浪的毛孩們，以及偏遠山區照顧流浪動物的弱勢人士給予協助</p>
    </div>

    <div class="video_div">
        <video class="video" controls autoplay muted>
            <source src="/assets/video.mp4" type="video/mp4">
        </video>
    </div>
</template>
<style scoped>


.video {
    width: 100%;
}

.vide-_div {
    width: 100%;
}

.one_p{
    margin-bottom: 15px;
}


.text_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0 30px 60px 30px;
}

.text_section p {
    font-size: 15px;
}
</style>