<template>
    <div>
        <img src="../assets/indexTop.png" alt="">
        <div>
            <video class="video" controls autoplay muted>
                <source src="../assets/video.mov" type="video/mp4">
            </video>
        </div>
        <section>
            <router-link to="/more" class="more_text">more ></router-link>
            <div class="card_section">
                <div class="card">
                    <img src="../assets/indexCard1.png" alt="">
                    <div class="card_text">詹順貴專欄：對於流浪動物的處理困境與
                        建議看法</div>
                        <hr class="tilte_date_hr">
                    <div class="card_date">2023/04/11</div>
                </div>
                <div class="card">
                    <img src="../assets/indexCard2.png" alt="">
                    <div class="card_text">詹順貴專欄：對於流浪動物的處理困境與
                        建議看法</div>
                        <hr class="tilte_date_hr">
                    <div class="card_date">2023/04/11</div>
                </div>
            </div>
        </section>
        <section>
            <div class="donate_img">
                <img src="../assets/indexDonate.png" alt="">
            </div>
            <div class="foods">
                <div class="donate_food">
                    <div class="wrapper">
                        <img src="../assets/donate01.png" alt="">
                    </div>
                    <button type="button">線上捐糧</button>
                </div>
                <div class="donate_food">
                    <div class="wrapper">
                        <img src="../assets/donate02.png" alt="">
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

.video{
    width: 100%;
}

.foods {
    display: flex;
    justify-content: center;
    gap: 40px;
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
    margin: 5px 0 8px 0;
}

.donate_food img {
    width: 78px;
    height: 83px;
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

.tilte_date_hr{
    width: 90%;
    margin: 0 auto;
}

img {
    width: 100%;
    object-fit: contain;
}
</style>