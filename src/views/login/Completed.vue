<template>
    <div class="container">
        <div class="completed">
            <div class="title">註冊完成</div>
            <img src="/assets/indexTop.png" alt="">
            <div class="check">
                <button>確認</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    padding:20px;
}
.completed{
    display:flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
}
.check button{
    min-width: 220px;
    min-height: 36px;
    background-color: rgb(183, 171, 161);
    color: white;
    border-radius: 5px;
    border: none;
}
</style>