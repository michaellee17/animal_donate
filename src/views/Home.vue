<template>
    <div>
        <img src="../assets/indexTop.png" alt="">
        <div>
            <video width="100%" controls autoplay muted>
                <source src="../assets/video.mov" type="video/mp4">
            </video>
        </div>
        <section>
            <a href="" class="more_text">more ></a>
            <div>
                <div class="card">
                    <img src="../assets/indexCard1.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/indexCard2.png" alt="">
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
    section{
        /* display:flex; */
        padding: 0px 10px 10px 10px;
    }
    .more_text{
        color: #809da5;
        font-size: 9px;
        letter-spacing: 1px;
        text-align: right;
        cursor: pointer;
        display: block;
        text-decoration: none;
    }
    .card{
        width: 50%;
    }
    img{
        width: 100%;
    }
    
</style>