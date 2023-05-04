<script setup> 
import AboutTopVue from '../../components/Others/AboutTop.vue';
</script>
<template>
    <AboutTopVue pageTitle="常見問題"
      imageSrc="/assets/questions.jpg"/>
    <div class="text_section">
        <p>關於捐款</p>
        <p>關於捐款關於捐款關於捐款關於捐款關於捐款關於捐款關於捐款關於捐款</p>
    </div>
</template>
<style scoped>

.text_section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 30px 60px 30px;
}

.text_section p {
    font-size: 15px;
}

</style>