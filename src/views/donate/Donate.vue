<template>
    <div class="donate_navs">
        <div class="title">
            <h3>線上捐款方式</h3>
        </div>
        <div class="buttons">
            <router-link to="/donate/online"><button>線上刷卡</button></router-link>
            <router-link to="/donate/regular"><button>定期捐款</button></router-link>
            <router-link to="/donate/atm"><button>ATM轉帳</button></router-link>
            <router-link to="/donate/post"><button>郵政劃撥</button></router-link>
        </div>
    </div>
    <div class="form_img">
        <keep-alive><img src="/assets/donate_table.png" alt=""></keep-alive>
    </div>
    <div class="donate_text">
        <p>捐款捐款捐款捐款捐款捐款捐款捐款捐款</p>
        <p>捐款捐款捐款捐款捐款捐款捐款捐款捐款</p>
        <p>捐款捐款捐款捐款捐款捐款捐款捐款捐款</p>
        <p>捐款捐款捐款捐款捐款捐款捐款捐款捐款</p>
        <p>捐款捐款捐款捐款捐款捐款捐款捐款捐款</p>

    </div>
</template>
<style scoped>
.donate_text{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
}
img{width: 100%;}
.donate_navs {
    display: flex;
    flex-direction: column;
}
.title{
    display: flex;
    justify-content: center;
    padding:10px;
}
.buttons{
    display: flex;
    flex-direction: column;
    gap:10px;
    align-items: center;
    padding:5px 0px 10px 0px;
}
.buttons button{
    font-size: 16px;
    width: 200px;
    padding:5px 10px;
    border-radius: 5px;
    background-color: white;
}
</style>