<template>
    <div>
        <div class="container">
            <div class="text_section">
                <textarea class="scrollable" readonly>
                    1111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111
                </textarea>
                   
                   
            </div>
            <div class="agree_section">
                <input type="checkbox">
                <span>同意並接收</span>
            </div>
            <div class="personal_info">
                <div class="title">
                    <h3>帳號資料</h3>
                </div>
                <div class="info">
                    <span class="required">電子郵件</span>
                    <input type="email">
                </div>
                <div class="info">
                    <span class="required">姓名</span>
                    <input type="text">
                </div>
                <div class="info">
                    <span class="required">密碼</span>
                    <input type="password">
                </div>
                <div class="info">
                    <span class="required">確認密碼</span>
                    <input type="password">
                </div>
                <div class="info">
                    <span class="required">手機</span>
                    <input type="phone">
                </div>
                <div class="info">
                    <span>身分證字號/居留證號</span>
                    <input type="text">
                </div>
                <div class="info">
                    <span>地址</span>
                    <input type="text">
                </div>
            </div>
            <div class="join">
                <button>加入會員</button>
            </div>
        </div>

    </div>
</template>
<style scoped>
.required::after {
  content: "*";
  color: red;
}
.join{
    padding-top: 20px;
}
.join button{
    min-width: 220px;
    min-height: 36px;
    background-color: rgb(183, 171, 161);
    color: white;
    border-radius: 5px;
    border: none;

}

.scrollable {
    overflow-y: scroll;
    /* 可選擇性地設置高度和寬度 */
    height: 100px;
    width: 300px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.personal_info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    text-align: center;
}

.info {
    display: flex;
    flex-direction: column;
}

.info input {
    min-width: 220px;
    min-height: 36px;
    border-radius: 5px;
    border: 1px solid grey
}</style>