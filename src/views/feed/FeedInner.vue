<script setup>
import AboutTopVue from '../../components/Others/AboutTop.vue';
import { ref } from 'vue';
const cvisible = ref(true)
const lvisible = ref(false)
const showModal = (() => {
    cvisible.value = false
    lvisible.value = true
    document.documentElement.requestFullscreen();
})
const endModal = (()=>{
    cvisible.value = true
    lvisible.value = false
    document.exitFullscreen();
})

</script>
<template>
    <div class="container" v-if="cvisible">
        <div class="big_img">
            <img class="big" src="/assets/feed02.png" alt="">
            <img class="magnifier" src="/assets/big.svg" alt="" @click="showModal">
        </div>
        <div class="small_img">
            <img src="/assets/feed02.png" alt="">
            <img src="/assets/feed02.png" alt="">
            <img src="/assets/feed02.png" alt="">
        </div>
        <div class="info">
            <img class="left" src="/assets/left.png" alt="">
            <img class="right" src="/assets/right.png" alt="">
            <div class="details">
                <h5>Jeff</h5>
                <p>男生/2歲/新北市</p>
                <p>未被領養</p>
                <p>已施打疫苗</p>
            </div>
            <div class="cost">
                <p>每隻浪浪一個月的生活費大約3000元(包含吃/醫療)。
                    可以申請信用卡固定扣款，成為牠的助養主人。
                    於結帳畫面選取「定期捐款」，選擇一/二/三/五年。
                </p>
            </div>
            <div class="button_section">
                <router-link to="/donate"><button type="button">我要助養</button></router-link>
                <router-link to="/contact"><button type="button">我要領養</button></router-link>
            </div>
            <div class="discribe">
                <p>描述</p>
            </div>
            <div class="text">
                <p>今年一月原本在彰化流浪時就被套上橡皮筋的可憐大麥町，Jeff，愛媽接到彰化志工求助去電想要帶出幫忙醫療，但收容所說脖子的橡皮筋已經取下傷口不深，因為太多人詢問領養因此必須等待12天結紮後”抽籤”，愛媽想既然有這麼多人想照顧當然就不錦上添花。

                    定期定額助養主人：目前 10位陳O卉500.一間故事文理短期補習班500.龔O平3000.羅O馨1000(生活費尚缺 0位助養主人)
                    *此為志工手動更新，助養後資訊會於1周內更新完成

                    住院1個月後，目前已帶回狗場安置照顧，仍在吃藥進行焦
                    蟲療程中!
                    個性：親人
                </p>
            </div>
            <div class="vedio">
                <img class="big" src="/assets/feed02.png" alt="">
            </div>
            <div class="button_section">
                <router-link to="/donate"><button type="button">我要助養</button></router-link>
                <router-link to="/contact"><button type="button">我要領養</button></router-link>
            </div>
            <div class="rule">
                <h4>領養須知</h4>
                <p>
                    | 領養人需已年滿二十歲，且同住家人均同意飼養寵物。
                    | 開放認養犬貓皆已完成節育、植入晶片及施打預防針，日後由飼主自行定期進行狂犬病疫苗注射、驅蟲及健康檢查。
                    | 當犬貓有傷病情形，飼主應給予妥善醫療照護。
                    | 務必留下真實聯絡資訊，領養後仍需與志工保持聯繫，並同意不定期家訪或提供犬貓近況照片影片。
                    | 如已充份了解以上說明，請下載領養申請書，並詳實填寫資料後，以電子郵件回傳至 warmdog2021@gmail.com ，將由領養部門進行審核及評估。
                </p>
            </div>
        </div>
    </div>
    <div class="lightbox" v-if="lvisible">
        <div class="mask" @click="endModal">
            <img class="full" src="/assets/feed02.png" alt="" @click.stop>
        </div>
    </div>
</template>
<style scoped>
.mask{
    height: 100vh;
    width: 100%;
    background-color: grey;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}
.full{
    width: 100%;
}

.info {
    position: relative;
}

.left {
    width: 25px;
    position: absolute;
    left: 0;
    top: 0;
}

.right {
    width: 25px;
    position: absolute;
    right: 0;
    top: 0;
}

.rule {
    padding: 10px 0;
}

.rule h4 {
    padding-bottom: 6px;
}

.rule p {
    font-size: 8px;
}

.vedio img {
    width: 100%;
}

.text p {
    padding: 5px 0;
    font-size: 8px;
}

.discribe {
    text-align: center;
    border-bottom: 1px solid rgb(123, 128, 128);
}

.discribe p {
    font-size: 8px;
    padding-bottom: 5px;
}

.button_section {
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    gap: 10px;

}

.button_section button {
    background-color: white;
    font-size: 12px;
    padding: 10px 35px;
    border-radius: 5px;
    border: 1px solid rgb(123, 128, 128);
}

.cost {
    padding: 13px 40px;
    color: rgb(123, 128, 128);
}

.cost p {
    font-size: 8px;

}

.details {
    text-align: center;
}

.details h5 {
    padding-bottom: 3px;
}

.details p {
    font-size: 10px;
}

.container {
    padding: 10px 37px;
}

.big {
    width: 100%;
}

.big_img {
    position: relative;
}

.magnifier {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.small_img {
    padding: 5px 0;
    display: flex;
    gap: 15px;
    margin-bottom: 5px;
}

.small_img img {
    width: 30%;
}</style>