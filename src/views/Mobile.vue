<template>
<div>
  <!-- 头部 -->
  <header id="header"></header>
  <!-- 移动端 三个部分 -->
  <!-- 第一部分 -->
  <div class="w-download-top">
    <div class="w_download_box">
      <div class="w_download_txt">
        <div class="w_download_txttop">
            <span>木鸟短租</span>
          <br>
          出差旅行聚会住宿
          <br>
          随时随地轻松搞定
          <br>
          给您不一样的住宿体验
        </div>
        <div class="w_download_txtbutt">
            <div class="w_download_txtiosbutt">
              <a href="javascript:void(0);">
                <img src="http://127.0.0.1:5050/mobile/ios__download.png" alt="">
              </a>
            </div>
            <div class="w_download_txtiosbutt">
              <a href="javascript:void(0);">
                <img src="http://127.0.0.1:5050/mobile/android__download.png" alt="">
              </a>
            </div>
          </div>
      </div>
      <div class="w_download_focusbox">
          <ul class="w_download_focus">
            <li>
              <img src="http://127.0.0.1:5050/mobile/erweima2018.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 第二部分 -->
  <div class="w_download_fuctionbg">
    <div class="w_download_fuction">
      <div class="w_download_fuctionbox">
        <div class="w_download_fuctioname1">海量房源任你选</div>
        <div class="w_download_fuctionfb">木鸟短租在海内外500多个国家和地区，90万套房源，任你选择。</div>
      </div>
      <div class="w_download_fuctionbox">
        <div class="w_download_fuctioname2">一键定位找身边</div>
        <div class="w_download_fuctionfb">一键找附近房源，方便快捷，订房就是这么简单！</div>
      </div>
      <div class="w_download_fuctionbox">
        <div class="w_download_fuctioname3">一手掌握放心住</div>
        <div class="w_download_fuctionfb">移动APP方便快捷随时随地随心订房，更有木鸟短租千万资金房客保障计划陪伴，放心入住！</div>
      </div>
      <div class="w_download_fuctionbox">
        <div class="w_download_fuctioname4">安心民宿在指尖</div>
        <div class="w_download_fuctionfb">公开房东联系方式一键拨打房东电话，轻松订房，移动支付，订房就在弹指一挥间。</div>
      </div>
    </div>
  </div>
  <!-- 第三部分 -->
  <div class="w_download_helpbg">
    <div class="w_download_help">
      <div class="w_download_helptxt">
        <span>不知道怎么下载？</span>
        <br>
        各大应用市场搜索“木鸟短租”即可找到哦！
      </div>
    </div>
  </div>
  <!-- 脚部 -->
  <footer id="footer"></footer>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

ul {
  list-style: none; }

a {
  text-decoration: none; }

.w-download-top {
  width: 100%;
  height: 560px;
  background: url(http://127.0.0.1:5050/mobile/app__downlodd_03.jpg) no-repeat;
  background-size: 100% 100%; }

.w_download_box {
  width: 980px;
  height: 560px;
  margin: 0 auto; }

.w_download_txt {
  float: left;
  padding-top: 85px;
  color: #fff;
  width: 638px;
  font: 24px/35px "microsoft yahei"; }

.w_download_txttop {
  width: 100%; }

.w_download_txttop > span {
  width: 100%;
  font: 60px/154px "microsoft yahei";
  font-weight: 700;
  letter-spacing: 18px;
  color: #fff; }

.w_download_txtbutt {
  padding-top: 40px;
  width: 100%;
  height: 160px; }

.w_download_focusbox {
  float: left;
  width: 342px;
  height: 494px;
  margin-top: 66px;
  background: url(http://127.0.0.1:5050/mobile/download_focus.png) no-repeat; }

.w_download_focus {
  padding: 80px 24px 0 24px;
  width: 294px;
  height: 414px; }

.w_download_fuctionbg {
  width: 100%;
  background: #ffffff; }

.w_download_fuction {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px; }

.w_download_fuction::after {
  display: block;
  content: "";
  clear: both; }

.w_download_fuctionbox {
  float: left;
  width: 180px;
  margin: 30px 50px;
  color: #555;
  font: 12px "microsoft yahei"; }
  .w_download_fuctionbox .w_download_fuctioname1 {
    background: url(http://127.0.0.1:5050/mobile/fkapp_icon.png) left 20px no-repeat; }
  .w_download_fuctionbox .w_download_fuctioname2 {
    background: url(http://127.0.0.1:5050/mobile/fkapp_icon.png) -180px 20px no-repeat; }
  .w_download_fuctionbox .w_download_fuctioname3 {
    background: url(http://127.0.0.1:5050/mobile/fkapp_icon.png) -360px 20px no-repeat; }
  .w_download_fuctionbox .w_download_fuctioname4 {
    background: url(http://127.0.0.1:5050/mobile/fkapp_icon.png) -540px 20px no-repeat; }

.w_download_fuctioname1,
.w_download_fuctioname2,
.w_download_fuctioname3,
.w_download_fuctioname4 {
  padding-top: 200px;
  width: 100%;
  height: 240px;
  text-align: center;
  font: 20px/40px "microsoft yahei"; }

.w_download_fuctionfb {
  width: 100%;
  font: 14px/28px "microsoft yahei";
  text-indent: 30px; }

.w_download_helpbg {
  background: #333;
  padding: 55px 0;
  width: 100%; }

.w_download_help {
  width: 1200px;
  margin: 0 auto;
  height: 195px;
  border-bottom: 1px solid #444; }

.w_download_helptxt {
  width: 580px;
  padding-left: 120px;
  float: left;
  font: 16px/30px "microsoft yahei";
  color: #fff;
  margin-top: 40px; }
  .w_download_helptxt span {
    font-size: 28px; }

</style>