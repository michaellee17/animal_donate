<template>
    <div>
        <img src="../assets/indexTop.png" alt="">
        <div>
            <video width="100%" controls autoplay muted>
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
                    <div class="card_date">2023/04/11</div>
                </div>
                <div class="card">
                    <img src="../assets/indexCard2.png" alt="">
                    <div class="card_text">詹順貴專欄：對於流浪動物的處理困境與
                        建議看法</div>
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
    padding: 21px;
}

.foods {
    padding-top: 13px;
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
    height: 20px;
    background-color: rgb(183, 171, 161);
    color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
}

.donate_food img {
    width: 78px;
    height: 83px;
}

.donate_img {
    display: flex;
    justify-content: center;
}

.donate_img img {
    width: 187px;
    height: 47px;
}

.card_section {
    display: flex;
    gap: 10px;
}

.card_text {
    padding-top: 12.6px;
    text-align: left;
    font-size: 8px;
    line-height: 14.6px;
    height: 32px;
    border-bottom: 1px solid #f5f5f5;
}

.card_date {
    padding-top: 12.4px;
    text-align: left;
    font-size: 8px;
    line-height: 9.6px;
    color: rgb(128, 157, 165)
}

section {
    /* display:flex; */
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
}

.card {
    width: 50%;
}

img {
    width: 100%;
}</style>