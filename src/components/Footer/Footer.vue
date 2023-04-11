<script setup>
 
</script>
<template>
    <div class="footer">
        <div class="notice">
            <p>如有需要救援、中途安置、弱勢園區請聯繫我們</p>
            <p>E-mail：warmdog2021@gmail.com</p>
            <p>LINE@：@warm.tw</p>
        </div>
        <div class="company">
            <p>社團法人台灣有點溫暖毛孩協會</p>
            <p>協會立案字號：台內團字第1090074606號</p>
            <p>勸募許可文號：衛部救字第1101361315號</p>
        </div>
        <div class="flogo">
            <img src="../../assets/footer.svg" alt="">
        </div>
        <div class="socials">
            <div class="icons">
                <img src="../../assets/ig.svg" alt="">
                <img src="../../assets/fb.svg" alt="">
                <img src="../../assets/line.svg" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .socials{
        padding-top: 0px;
        display: flex;
        justify-content: center;
        padding-bottom: 22px;
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
        padding-bottom: 10px;
        padding-top: 10px;
    }
    .logof img{
        width: 92px;
        height: 18px;
    }
    .footer{
        height: 100%;
        width: 375px; 
        background-color:rgb(217, 208, 199) ;    
    }
    .notice{
        line-height: 18px;
        font-size: 12px;
        text-align: left;
        color: white;
        padding: 16px 55px 9px 55px;
    }
    .company{
        line-height: 18px;
        font-size: 12px;
        text-align: left;
        color: white;
        padding: 0px 55px 0px 55px;
    }
</style>