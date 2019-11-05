<template>
<div>
  <!-- 左中右三部分 -->
  <div class="d-flex">
    <!-- 左边图片 -->
    <div class="left">
      <img src="http://127.0.0.1:5050/header/pc_new_logo.png" alt="">
    </div>
    <!-- 中间导航 -->
    <div class="middle">   
      <ul class="middle-ul">
        <li>
          <router-link to="/Index" class="middle-ul-link">首页</router-link>
        </li>
        <li>
          <router-link to="/Features" class="middle-ul-link">特色短租</router-link>
        </li>
        <li>
          <router-link to="/Story" class="middle-ul-link">发现</router-link>
        </li>
        <li>
          <router-link to="/Mobile" class="middle-ul-link">
            手机木鸟
            <i class="give">
              <img src="http://127.0.0.1:5050/index/give88.png" alt="">
            </i>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 右边登录/注册 -->
    <div class="right" v-if="!isLogin">
      <button class="right-btn" @click="login">免费发布房源</button>
      <span class="right-txt" @click="login">登录&nbsp;/&nbsp;注册</span>
      <!-- <span>/</span>
      <span class="right-txt">注册</span> -->
    </div>
    <!-- 登录成功后样式 -->
    <div v-else class="s_mn_userbox">
      <span>Hi,欢迎回来！</span>
      <a href="javascript:void(0);" class="s_mu_username" @mouseenter="toggle_username(1)" @mouseleave="toggle_username(0)">Capon-MN146</a>
      <!-- 选项 -->
      <div class="s_mu_usermenubox" v-show="option_user" @mouseenter="toggle_username(1)" @mouseleave="toggle_username(0)">
        <ul class="s_mu_usermenu">
          <li>
            <a href="javascript:void(0);">我的订单</a>
          </li>
          <li>
            <a href="javascript:void(0);">木鸟APP</a>
          </li>
          <li>
            <a href="javascript:void(0);">退出</a>
          </li>
        </ul>
      </div>
      <a href="javascript:void(0);" class="s_mn_navbutt">我要成为房东</a>
    </div>
  </div>
   <!-- 0.1添加灰色背景 -->
   <div :class="mask"></div>
   <!-- 0.1登录注册窗口 -->
   <div :class="loginInp">
     <a href="javascript:void(0);" class="newa_close" @click="close"></a>
     <ul class="newa_login_tab">
       <li :class="{newa_login_t_active:logTog}" @click="logMethod(true)">
         <span>快捷登录</span>
       </li>
       <li :class="{newa_login_t_active:!logTog}" @click="logMethod(false)">

         <span>普通登录</span>
       </li>
     </ul>
     <!-- 快捷登录 -->
     <div class="newa_login_con" v-if="logTog">
       <ul class="newa_login_input">
         <li>
           <i class="newa_kj_icon"></i>
           <input type="text" placeholder="手机号">
         </li>
         <li>
           <i class="newa_piccode_icon"></i>
           <input type="text" placeholder="图形验证码">
           <a href="javascript:void(0);" class="newa_piccode">
             <img src="http://127.0.0.1:5050/index/VerifyCode.gif" alt="">
           </a>
         </li>
         <li>
           <i class="newa_code_icon"></i>
           <input type="text" placeholder="短线验证码">
           <span class="newa_code">获取短信验证码</span>
         </li>
         </ul>
       <div class="newa_foget">
           <a href="javascript:void(0);">忘记密码?</a>
       </div>
       <a href="javascript:void(0);" class="newa_login_btn"></a>
       <p class="newa_zc">验证通过即登录，未注册手机号将创建木鸟账号</p>
       <div class="newa_coop">
         <a href="javascript:void(0);" class="newa_sina"></a>
         <a href="javascript:void(0);" class="newa_qq"></a>
       </div>
     </div>
     <!-- 普通登录 -->
     <div class="newa_login_con" v-else>
      <ul class="newa_login_input">
        <li>
            <i class="newa_email_tel_icon"></i>
            <input type="text" id="Login_Email_Tel_M" placeholder="手机号" @focus="switch_test_pho(1)" @blur="switch_test_pho(0)" v-model="phone">
            <small class="marked_words" v-text="please_pho" :style="please_pho_sty"></small>
        </li>
        <li>
            <i class="newa_l_password_icon"></i>
            <input type="password" id="Login_Pwd" placeholder="密码"  v-model="pwd" @focus="switch_test_pwd(1)" @blur="switch_test_pwd(0)">
            <small class="marked_words" v-text="please_pwd" :style="please_pwd_sty" ></small>
        </li>
        <li>
            <i class="newa_piccode_icon"></i>
            <input type="text" id="login_ValidCodes" name="newa_piccode" placeholder="图形验证码">
            <a class="newa_piccode" href="javascript:void(0);"><img id="ValidImgs" src="http://127.0.0.1:5050/header/VerifyCode.gif" onclick="getImageCodes(this)"></a>
        </li>
    </ul>
    <div class="newa_foget">
        <a class="newa_foget_m" href="http://user2.muniao.com/forgetpass">忘记密码？</a>
        <input id="newa_auto_l" type="checkbox">
        <label for="newa_auto_l">下次自动登录</label>
    </div>
    <a @click="login_user" class="newa_login_btn newa_ordinary" href="javascript:void(0);"></a>

    <div class="newa_coop">
        <a class="newa_sina" href="https://api.weibo.com/oauth2/authorize?state=http%3A%2F%2Fwww.muniao.com%2Fuser%2Fcenter&amp;client_id=3437054643&amp;response_type=code&amp;redirect_uri=http%3A%2F%2Fwww.muniao.com%2FHome%2FCallBack%3Fchannel%3Dweibo"></a>
        <a class="newa_qq" href="http://openapi.qzone.qq.com/oauth/show?which=Login&amp;response_type=code&amp;client_id=101214959&amp;redirect_uri=http%3A%2F%2Fwww.muniao.com%2Fuser%2Fcenter&amp;scope=get_user_info,get_fanslist,get_idollist,add_idol"></a>
     </div>
   </div>
</div>
</div>
</template>
<script>
export default {
  data(){
    return{
      // 1.保存登录框灰色背景的类名
      mask:{
        bgAllDark:true,
        "d-none":true
      },
      // 2.保存登录框的显示与隐藏
      loginInp:{
        newa_login_main:true,
        "d-none":true
      },
      // 3.登录方式
      logTog:false,
      // 4.保存提示语
      please_pho:"",
      please_pwd:"",
      // 5.保存样式
      please_pho_sty:{
        color:"red"
      },
      please_pwd_sty:{
        color:"red"
      },
      // 6.保存用户输入的手机号
      phone:"",
      // 7.保存用户输入的密码
      pwd:"",
      // 8.保存选项的显示隐藏
      option_user:false,
      // 9.是否登录
      isLogin:false
    }
  },
  methods:{
    // 显示输入框
    login(){
      this.logToggle(false)
    },
    // 隐藏输入框
    close(){
      this.logToggle(true);
    },
    // 触发显示/隐藏输入框
    logToggle(bool){
      // 点击显示登录框
      this.mask = {"bg-all-dark":true,"d-none":bool};
      this.loginInp = {newa_login_main:true,
        "d-none":bool}
    },
    // 登录方式的切换
    logMethod(bool){
      this.logTog = bool;
    },
    // 获取焦点
    switch_test_pho(num){
      if(num){
        // 获取焦点，显示提示文本
        this.please_pho = "请输入手机号";
        this.please_pho_sty = {color:"red"};
      }else{
        // 失去焦点，验证
        // 创建正则表达式
        var reg = /^1[3-9]\d{9}$/;
        // 如果验证通过，提示绿色文字，格式正确
        if(reg.test(this.phone)){
          this.please_pho = "手机号格式正确";
          this.please_pho_sty.color = "green";
        }else{
          // 验证未通过
          // 判断是否为空
          if(this.phone.trim()!=""){
            // 提示格式不正确
            this.please_pho = "手机号格式不正确";
            this.please_pho_sty = {color:"red"};
          }
        }
      }
    },
    // 密码验证
    switch_test_pwd(num){
      if(num){
        // 获取焦点，显示提示文本
        this.please_pwd = "请输入密码";
        this.please_pwd_sty = {color:"red"};
      }else{
        // 失去焦点，验证密码格式
        // 创建正则表达式(6~12位数字或者密码)
        var reg = /^[0-9a-zA-Z]{6,12}$/;
        // 如果验证通过，格式正确，颜色为绿色
        if(reg.test(this.pwd)){
          this.please_pwd = "密码格式正确";
          this.please_pwd_sty = {color:"green"};
        }else{
          // 否则，验证为通过
          // 当用户输入了内容，提示格式不正确
          if(this.pwd.trim()!=""){
            this.please_pwd = "密码格式不正确";
            this.please_pwd_sty = {color:"red"};
          }
        }
      }
    },
    // 选项的显示隐藏
    toggle_username(bool){
      if(bool){
        // 当鼠标移入时，显示
        this.option_user = true;
      }else{
        // 当鼠标移出，隐藏
        this.option_user = false;
      }
    },
    // 登录
    login_user(){
      // 获取用户输入的手机号
      var phone = this.phone;
      var pwd = this.pwd;
      // 获取用户输入的密码
      this.axios.get("login",{params:{phone,pwd}}).then(res=>{
        // 判断
        var res = res.data;
        if(res.code>0){
          // 登录成功，隐藏登录框
          this.logToggle(true);
          // 显示个人信息
          this.isLogin = true;
        }
        console.log(res);
      })
    }
  },
  mounted(){
    // this.toggle(li,0);
  }
}
</script>
<style scoped>
  @charset "UTF-8";
/* 简单css reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

ul {
  list-style: none; }

a {
  text-decoration: none; }

body {
  background: #fff; }

/* 头部最外层div */
.d-flex {
  display: flex;
  border-top: 1px solid #c4c2c3;
  justify-content: space-between;
  padding: 0 32px;
  min-width: 1200px; }

/* 左边部分样式 */
.left {
  margin: 16px 0 0 0;
  height: 42px; }

.left > img {
  width: 230px;
  height: 27px; }

/* 中间部分样式 */
.middle {
  margin: 0 -50px 0 0; }

/* 设置li浮动 */
.middle-ul > li {
  float: left;
  text-align: center;
  line-height: 58px; }

/* 清除浮动带来的影响 */
.middle-ul::after {
  display: block;
  content: "";
  clear: both; }

/* 设置a的样式 */
.middle-ul-link {
  display: block;
  width: 90px;
  height: 58px;
  color: #86929c;
  font-size: 15px;
  position: relative; 
   border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  }

.middle-ul .router-link-active {
  background: #f2f2f2;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  color: #fe7b6a;
  border-bottom: 1px solid #ff6c5c; }

/* hover时的样式 */
.middle-ul-link:hover {
  background: #f2f2f2;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  color: #fe7b6a;
  /* border-bottom: 1px solid #ff6c5c;  */
  }

/* 右边部分样式 */
/* .right{

  margin:

} */
.right {
  margin: 0 40px 0 0; 
  width:380px;
  }

/* 发布房源按钮样式 */
.right-btn {
  width: 128px;
  height: 39px;
  border: 0;
  border-radius: 6px;
  background: #ff9180;
  color: #fff;
  font-size: 16px;
  margin: 3px 6px 0 0;
  cursor: pointer;
  outline: none; }

/* 字体大小 */
.right-txt {
  display: inline-block;
  font-size: 15px;
  color: #555;
  margin-top: 3px;
  cursor: pointer; }

.right span:hover {
  color: #fd6b5c; }

.bg-all-dark {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .36;
  z-index: 9999;
  top: 0;
  left: 0; }

.d-none {
  display: none; }

.newa_login_main {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 380px;
  padding: 0 50px 16px;
  background: #fff;
  z-index: 9999;
  margin-left: -190px;
  margin-top: -219px; }

.newa_close {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 16px;
  left: 93%;
  background: url(http://127.0.0.1:5050/index/newa_close.png) no-repeat; }

.newa_login_tab {
  width: 220px;
  height: 32px;
  margin: 29px auto 37px; }
  .newa_login_tab li {
    float: left;
    width: 110px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    color: #777;
    cursor: pointer; }

.newa_login_t_active span {
  display: inline-block;
  width: 73px;
  border-bottom: 2px solid #ff9180; }

.newa_login_con {
  width: 280px; }
  .newa_login_con li {
    position: relative;
    margin-bottom: 18px; }
    .newa_login_con li i {
      position: absolute;
      display: inline-block; }
  .newa_login_con input {
    width: 282px;
    height: 44px;
    font-size: 14px;
    border: 1px solid #eeeeee;
    padding-left: 35px;
    padding-right :118px;
     }
/* 提示语 */
.marked_words{
  position: absolute;
  width:118px;
  top:14px;
  left:157px;
  z-index:0;
}
.newa_kj_icon {
  background: url(http://127.0.0.1:5050/index/login_icon.png) no-repeat 0 -74px;
  width: 14px;
  height: 18px;
  top: 14px;
  left: 9px; }

.newa_piccode_icon {
  background: url(http://127.0.0.1:5050/index/login_icon.png) no-repeat 0 -97px;
  width: 17px;
  height: 14px;
  top: 14px;
  left: 9px; }

.newa_code_icon {
  background: url(http://127.0.0.1:5050/index/login_icon.png) no-repeat 0 -116px;
  width: 16px;
  height: 14px;
  top: 14px;
  left: 9px; }

.newa_piccode {
  display: block;
  position: absolute;
  width: 80px;
  height: 36px;
  right: 0;
  top: 2px; }
  .newa_piccode img {
    width: 80px;
    height: 36px; }

.newa_code {
  display: block;
  position: absolute;
  right: 0px;
  top: 0;
  color: #f37e71;
  height: 40px;
  line-height: 44px;
  padding: 0 10px;
  cursor: pointer;
  font-size: 14px; }

.newa_foget {
  height: 14px;
  line-height: 14px;
  margin-bottom: 28px; }
  .newa_foget a {
    float: right;
    font-size: 14px;
    color: #f37e71; }

.newa_login_btn {
  display: block;
  width: 310px;
  height: 70px;
  background: url(http://127.0.0.1:5050/index/login_btn.png) no-repeat;
  margin-left: -15px; }
  .newa_login_btn:hover {
    background: url(http://127.0.0.1:5050/index/login_btn.png) -310px 0 no-repeat; }

.newa_zc {
  color: #999;
  font-size: 14px; }

.newa_coop {
  margin-top: 28px; }
  .newa_coop a {
    display: inline-block; }

.newa_sina {
  background: url(http://127.0.0.1:5050/index/login_icon.png) no-repeat 0 -25px;
  width: 28px;
  height: 23px; }

.newa_qq {
  background: url(http://127.0.0.1:5050/index/login_icon.png) no-repeat -1px 0;
  width: 18px;
  height: 20px;
  margin-left: 25px; }

.newa_login_input li {
  position: relative;
  margin-bottom: 18px; }
  .newa_login_input li i {
    position: absolute;
    display: inline-block;
    top: 14px;
    left: 9px; }

.newa_email_tel_icon {
  background: url(http://127.0.0.1:5050/header/login_icon.png) no-repeat 0 -53px;
  width: 13px;
  height: 17px; }

.newa_l_password_icon {
  background: url(http://127.0.0.1:5050/header/login_icon.png) no-repeat -18px -53px;
  width: 13px;
  height: 17px; }

.newa_foget {
  height: 14px;
  line-height: 14px;
  margin-bottom: 28px; }
  .newa_foget label {
    color: #999999;
    font-size: 14px; }

.newa_foget_m {
  float: right;
  color: #ff9180;
  font-size: 14px; }

#newa_auto_l {
  width: 13px;
  height: 13px; }
/* 头部小图标 */
.give{
  position: absolute;
  top:-12px;
  left:44px;
  transform: translateY(0px);
  animation: icon .8s ease infinite;
}
@keyframes icon{
  from{
    transform:translateY(0px)
  }
  50%{transform:translateY(2.5px)}
  75%{transform:translateY(2.5px)}
  to{
    transform: translateY(0px)
  }
}
/* 登录成功后的样式 */
.s_mn_userbox{
  position: relative;
}
.s_mn_userbox span{
  margin-right: 2px;
  line-height: 59px;
  color:#777;
}
.s_mu_username{
  line-height: 59px;
  color: #f30;
  padding-right: 20px;
  font: 15px/45px Microsoft YaHei;
  margin-right: 15px;
  background: url(http://127.0.0.1:5050/header/bgli.png) right center no-repeat;
}
.s_mn_navbutt{
  border: 2px solid #FF6C5C;
  color:#f30;
  border-radius: 14px;
  padding: 5px 10px; 
}
.s_mn_navbutt:hover{
  color:#fff;
  background: #FF6C5C;
}
.s_mu_usermenubox{
  
  position: absolute;
  left:145px;
  top:36px;
  color:#fff;
  z-index: 1;
}
/* 设置ul的背景 */
.s_mu_usermenu{
  opacity: 0.8;
  background-color: rgb(191, 82, 13);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 3px;
  width: 80px;  
}
.s_mu_usermenu li{
  
  width: 100%;
  height: 30px;
}
.s_mu_usermenu li:hover{
  background: #f30;
}
.s_mu_usermenu li a{
  font-size: 12px;
  font-family: 微软雅黑;
  color:#fff;
  line-height: 30px;
}
</style>