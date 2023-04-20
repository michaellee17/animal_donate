<template>
    <div class="login_section">
        <div class="normal_login">
          <div class="normal_title">
            <h3>會員登入</h3>
          </div>
          <div class="normal_input">
            <div class="inputs">
              <h6>E-mail</h6>
            <input type="text">
            </div>
            <div class="inputs">
              <h6>密碼</h6>
              <input type="text">
              <div class="forget">
                <router-link to="/forget">忘記密碼</router-link>
              </div>
            </div>
          </div>
          <div class="login">
            <button>會員登入</button>
          </div>
          <div class="fb">
            <button>Facebook登入</button>
          </div>
          <div class="google">
            <button>Google登入</button>
          </div>
          <div class="line">
            <button>Line登入</button>
          </div>
          <div class="or">
            <h2>或</h2>
          </div>
          <div class="register">
            <button><router-link to="/login/register">註冊會員</router-link></button>
          </div>
        </div>
    </div>
</template>
<style scoped>
  .normal_login button{
    min-width:230px;
    min-height: 40px;
  }
  .login_section{
    display: flex;
    justify-content: center;
    
  }
  .normal_title{
    text-align: center;
  }
  .normal_login{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:40px 0;
    gap:20px;
  }
  .normal_input{
    display:flex;
    flex-direction: column;
    gap: 10px;
  }
  .inputs input{
    border-radius: 5px;
    min-width:230px;
    min-height: 40px;
    border: 1px solid rgb(183, 171, 161);
  }
  .login button{
    background-color: white;
    border-radius: 5px;
   
    border: 1px solid grey;
  }
  .fb button {
    background-color: #3B59F3;
    border-radius: 5px;
    
    border: none;
    box-sizing: border-box;
    max-width: 293px;
  }
  .google button{
    background-color: white;
    border-radius: 5px;
    
    border: 1px solid grey;
  }
  .line button{
    background-color: green;
    border-radius: 5px;
    
    border: 1px solid grey;
  }
  .or{
    text-align: center;
    color:grey;
  }
  .forget{
    padding:5px 0px;
    display: flex;
    justify-content: flex-end;
  }
  .forget a{
    color:grey;
    font-size: 14px;
  }
  .register button{
    background-color: white;
    border-radius: 5px;
    padding: 12px 88px;
    border: 1px solid grey;
  }

</style>