<script setup>
import { ref } from 'vue';
const number = ref(1);

const addNumber = (() =>{
    number.value +=1
})
const reduceNumber = (() =>{
    number.value -=1
})


const props = defineProps({
    foodText: {
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
    <div class="card">
        <div class="card_img">
            <img :src="imageSrc" alt="">
        </div>
        <div class="card_text">{{ foodText }}</div>
        <div class="number_section">
            <div class="input_section">
                <button @click="reduceNumber"> - </button>
                <input type="number" v-model="number">
                <button @click="addNumber"> + </button>
            </div>
            <button type="button" class="send_btn">我要捐糧</button>
        </div>
    </div>
   
</template>
<style scoped>
.card{
    padding:10px;
    width: 150px;
}
.card_img{
    display: flex;
    justify-content: center;
}
.card_img img{
    width: 150px;
    height: 200px;
}
.card_text{
    text-align: center;
}
img{
    width: 100%;
}
.input_section button{width: 20px;}
.input_section{
    display: flex;
    gap:3px;
}
.number_section{
    display: flex;
    justify-content: center;
    gap:10px;
}

.input_section input{
    width: 40px;
}
.send_btn{
    background-color: rgb(183, 171, 161);
    color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 5px;
 
}
</style>