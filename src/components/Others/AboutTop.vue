<script setup>


const props = defineProps({
    pageTitle: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class="container">
        <div class="top_wrapper">
            <div class="page_title">{{ pageTitle }}</div>
             <img :src="imageSrc" alt="">
        </div>
        <div class="donate_btn">
            <button type="button">立即線上捐款</button>
        </div>
    </div>
   
</template>
<style scoped>
img {
    width: 100%;
    display: block;
    
}
.container{
    width: 100%;
    position: relative;
}
.top_wrapper {
    width: 100%;
    position: relative;
    z-index:-1;
}

.page_title {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    color: white;
    text-align: center;
}

.donate_btn button {
    width: 125px;
    background-color: rgb(183, 171, 161);
    color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 5px 0;
    margin: 15px auto 8px auto;
}
</style>