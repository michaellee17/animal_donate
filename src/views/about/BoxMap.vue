<script setup> 
import AboutTopVue from '../../components/Others/AboutTop.vue';
import { ref } from 'vue';

const northActive = ref(true);
const middleActive = ref(false);
const southActvie = ref(false);

const ChangeArea = ((area) =>{
    if(area === 'n'){
        northActive.value = true
        middleActive.value = false
        southActvie.value = false
    }else if(area === 'm'){
        northActive.value = false
        middleActive.value = true
        southActvie.value = false
    }else{
        northActive.value = false
        middleActive.value = false
        southActvie.value = true
    }
})


</script>
<template>
    <AboutTopVue pageTitle="募款箱地圖"
      imageSrc="/assets/boxmap.png"/>
    <div class="areas">
       <div class="tabs">
            <div class="tab" :class="{ active: northActive }" @click="ChangeArea('n')">北區</div>
            <span>|</span>
            <div class="tab" :class="{ active: middleActive }" @click="ChangeArea('m')">中區</div>
            <span>|</span>
            <div class="tab" :class="{ active: southActvie }" @click="ChangeArea('s')">南區</div>
       </div>
       <div class="shops north" v-if="northActive">
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台北市長春路200號</p>
            </div>
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台北市長春路200號</p>
            </div>
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台北市長春路200號</p>
            </div>
       </div>
       <div class="shops middle" v-if="middleActive">
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台中市長春路200號</p>
            </div>
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台中市長春路200號</p>
            </div>
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台中市長春路200號</p>
            </div>
       </div>
       <div class="shops south" v-if="southActvie">
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台南市長春路200號</p>
            </div>
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台南市長春路200號</p>
            </div>
            <div class="shop">
                <p>寶島眼鏡仁愛店</p>
                <p>02-23456789</p>
                <p>台南市長春路200號</p>
            </div>
       </div>
    </div>
</template>
<style scoped>
.active{
    color:grey;
}
.areas{
    padding:15px;

}
.tabs{
    display: flex;
    padding-bottom: 5px;
}
.tab{
    padding:0px 5px;
}
.shops{
    display: flex;
    flex-direction: column;
    gap:15px;
    padding:5px;
}

</style>