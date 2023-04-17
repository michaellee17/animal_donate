<script setup>
 
</script>
<template>
    <div class="footer">
        <div class="footer_text">
            <div class="notice">
                <div>如有需要救援、中途安置、弱勢園區請聯繫我們</div>
                <div>E-mail：warmdog2021@gmail.com</div>
                <div>LINE@：@warm.tw</div>
            </div>
            <div class="company">
                <div>社團法人台灣有點溫暖毛孩協會&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                <div>協會立案字號：台內團字第1090074606號</div>
                <div>勸募許可文號：衛部救字第1101361315號</div>
            </div>
        </div>
        <div class="flogo">
            <img src="assets/footer.svg" alt="">
        </div>
        <div class="socials">
            <div class="icons">
                <img src="assets/ig.svg" alt="">
                <img src="assets/fb.svg" alt="">
                <img src="assets/line.svg" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .socials{
        padding-top: 0px;
        display: flex;
        justify-content: center;
    }
    .icons{
        display: flex;
        gap:14px;
    }
    .icons img{
     width: 24px;
     height: 24px;   
    }
    .flogo{
        display: flex;
        justify-content: center;
        margin: 20px 0 10px 0;
    }
    .logof img{
        width: 92px;
        height: 18px;
    }
    .footer{
        height: 100%;
        width: 100%; 
        background-color:rgb(217, 208, 199);
        padding: 22px 0;
    }
    .notice{
        line-height: 18px;
        font-size: 13px;
        text-align: left;
        color: white;
        margin-bottom: 15px;
    }
    .company{
        line-height: 18px;
        font-size: 13px;
        text-align: left;
        color: white;
    }
    .footer_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) { 
        .footer_text{
        flex-direction: row;
        gap: 10%;
        align-items: baseline;
    }
    }
</style>