<template>
    <div>
        <div class="container">
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
                <div class="info">
                    <span>加入時間</span>
                    <input type="text">
                </div>
            </div>
            <div class="join">
                <button><router-link to="/login/completed">確認修改</router-link></button>
            </div>
        </div>    
    </div>
</template>
<style scoped>
.join button a{
    text-decoration: none;
    color:black;
}
.personal_info{
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);
    padding: 20px 20px;
    border:none;
    background-color: white;
}

.required::after {
  content: "*";
  color: red;
}
.join{
    padding:20px 0;
}
.join button{
    min-width: 220px;
    min-height: 36px;
    background-color: rgb(183, 171, 161);
    color: white;
    border-radius: 5px;
    border: none;

}



.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px;
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
    gap:5px;
    font-size: 13px;
}

.info input {
    min-width: 220px;
    min-height: 36px;
    border-radius: 5px;
    border: 1px solid grey
}
</style>