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
          <div class="social">
            <img src="/assets/fb.png" alt="">
          </div>
          <div class="social">
            <img src="/assets/google.png" alt="">
          </div>
          <div class="social">
            <img src="/assets/line.png" alt="">
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
.register button a{
  text-decoration: none;
  color:black;
}
  .normal_login button{
    min-width:230px;
    min-height: 40px;
  }
  .social{
    width: 230px;
    height: 40px;
  }
  .social img{
    width: 100%;
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