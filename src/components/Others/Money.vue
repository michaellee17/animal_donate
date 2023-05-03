<script setup>


const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
});



</script>
<template>
    <div class="container">
        <div class="title">
            <h4>{{title}}</h4>
        </div>
        <div class="process">
            <keep-alive><img src="/assets/process.png" alt=""></keep-alive>
        </div>
        <div class="money">
            <div class="money_title">
                <h4>{{ subtitle }}</h4>
            </div>
            <div class="money_input">
                <input type="text" placeholder="請輸入金額，金額需為台幣100元以上">
                <span>元</span>
            </div>
        </div>
        <div class="info">
            <div class="info_title">
                <h4>捐款人資料</h4>
            </div>
            <div class="notice">
                <h6>(若你不願提供個資，請選擇不具名捐款，<span>將無法索取收據</span>)</h6>
            </div>
            <div class="anonymous">
                <button>不具名捐款</button>
            </div>
            <div class="member">
                <button>註冊會員</button>
                <button>會員登入</button>
            </div>
            <div class="name">
                <h6 class="required">姓名</h6>
                <input type="text" placeholder="若多名款人請以半形逗點區分">
            </div>
            <div class="appellation">
                <div class="row">
                    <div class="column"><label for=""><img src="/assets/check.png" alt="" width="15px"
                                height="15px"><span>君</span></label></div>
                    <div class="column"><img src="/assets/check.png" alt="" width="15px" height="15px"><span>公司</span></div>
                    <div class="column"><img src="/assets/check.png" alt="" width="15px" height="15px"><span>先生</span></div>
                </div>
                <div class="row">
                    <div class="column"><img src="/assets/check.png" alt="" width="15px" height="15px"><span>小姐</span></div>
                    <div class="column"><img src="/assets/check.png" alt="" width="15px" height="15px"><span>伉儷</span></div>
                    <div class="column"><img src="/assets/check.png" alt="" width="15px" height="15px"><span>女生</span></div>
                </div>
            </div>
            <div class="infos">
                <span class="required">手機</span>
                <input type="phone" placeholder="手機僅限數字，請勿輸入符號">
            </div>
            <div class="infos">
                <span>身分證字號/居留證號</span>
                <input type="text">
            </div>
            <div class="infos">
                    <span class="required">電子郵件</span>
                    <input type="email" placeholder="請輸入E-mail">
            </div>
            <div class="infos">
                <span>地址</span>
                <input type="text" placeholder="請輸入聯絡地址">
            </div>
        </div>
        <div class="receipt">
            <h4>收據資料及說明</h4>
            <p>發票預設皆為捐贈，如果您需要可抵扣稅額的正式捐款收據，請這「聯絡我們」索取收據。</p>
            <p>請依序提供收據抬頭/身分證字號或統編/電子郵件/手機/收件人資訊，我們將盡快為您寄出。</p>

            <p>捐款前先註冊/登入會員，可於會員專區查詢線上捐款紀錄。</p>
        </div>
        <div class="next">
            <button>下一步</button>
        </div>
    </div>
</template>
<style scoped>
.next button{
    border-radius: 5px;
    width: 230px;
    height: 35px;
    background-color:  rgb(183, 171, 161);
    border: 0.3pt solid #bebcbc;
    text-align: center;
    color:white;

}
.next{
    text-align: center;
}
.receipt p{
    font-size:6px;
    color:grey;
}
.receipt h4{
    padding-bottom: 5px;
}
.receipt{
    padding:10px 10px;
}
.infos {
    display: flex;
    flex-direction: column;
    gap:5px;
    font-size: 13px;
}


.infos input {
    width: 100%;
    min-height: 36px;
    border-radius: 5px;
    border: 0.3pt solid #bebcbc;
}
.appellation {
    padding: 5px 0;
}

.column span {
    font-size: 13px;
}

.column img {
    vertical-align: bottom;
}

.row {
    display: flex;
    gap: 40px
}

.column {
    flex: 1;
}

.required::after {
    content: "*";
    color: red;
}

.name {
    padding: 5px 0;
}

.name h6 {
    padding-bottom: 5px;
}

.name input {

    border-radius: 5px;
    width: 100%;
    height: 35px;
    background-color: white;
    border: 0.3pt solid #bebcbc;
    text-align: center;
}

.member {
    padding: 5px 0;
    display: flex;
    gap: 23px;
}

.member button {

    border-radius: 5px;
    width: 95px;
    height: 35px;
    background-color: white;
    border: 0.3pt solid #bebcbc;


}

.anonymous {
    padding: 5px 0;
}

.anonymous button {
    width: 100%;
    border-radius: 5px;
    width: 100%;
    height: 35px;
    background-color: white;
    border: 0.3pt solid #bebcbc;
}

.info {
    padding: 0px 50px 16px;
}

.notice {
    text-align: left;
}

.notice span {
    color: orange;
}

.info_title {
    padding: 13px 0;
    text-align: center;
}

.money_title {
    padding: 13px 0;
    text-align: center;
}

.money_input {
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    padding-bottom: 23px;
}

.money_input input {
    width: 237px;
    height: 35px;
    border-radius: 5px;
    border: 0.3pt solid #bebcbc;
    text-align: center;
}

.process {
    padding: 24px 0;
}

.process img {
    width: 100%;
}

.container {
    padding: 10px 32px;

}

.title {
    padding-top: 20px;
    text-align: center;
}</style>