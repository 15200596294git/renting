<template>
  <div class="uwelcome">
    <!-- 头 -->
    <div class="unifoT">
      <h4>消息提醒</h4>
    </div>
    <!-- 主体 -->
    <div class="userR" style="background-color:white;margin-bottom:30px;">
      <!-- 1.实名认证 -->
      <div class="w_userzmbox">
        <div class="w_userzmtt">实名认证</div>
        <div class="w_userzmp">通过实名认证后可提升您的房源排名，并可获得更多订单。</div>
        <p>
          <a href="javascript:void(0);" class="w_userzma">点击验证>></a>
        </p>
      </div>
      <div class="w_userzmbox">
        <div class="w_userzmtt">
         <img src="http://127.0.0.1:5050/order_admin/userzhima_icon.png" alt="">
         芝麻信用
        </div>
        <div class="w_userzmp">
           “芝麻信用”通过分析大量的网络交易及行为数据，可对用户进行信用评估。
        </div>
        <p>
          <a href="javascript:void(0);" class="w_userzma">点击开通芝麻信用>></a>
        </p>
      </div>
      <!-- 管理提醒 -->
      <div class="usersT">
        <h4>管理提醒</h4>
        <span class="aOrange fLeft">（您今日有新的项目提醒）</span>
        <div class="clear"></div>
      </div>
      <div class="userscon" style="font-size:14px;padding-left:20px;">
        <ul>
          <li>
            <dl>
              <dd>
                <strong>订单提醒：&nbsp;&nbsp;</strong>
              </dd>
              <dd>
                <a href="#">今日预订 <strong class="aOrange">0</strong>单，&nbsp;&nbsp;
                </a>
              </dd>
              <dd>
                <a href="#">今日成单 <strong class="aOrange">0</strong>单</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl>
              <dd>
                <strong>求租提醒：&nbsp;&nbsp;</strong>
              </dd>
              <dd>
                <a href="#">今日新求租 <strong class="aOrange">0</strong>单，&nbsp;&nbsp;
                </a>
              </dd>
              <dd>
                <a href="#">所有求租 <strong class="aOrange">0</strong>单</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl>
              <dd>
                <strong>业务提醒：&nbsp;&nbsp;</strong>
              </dd>
              <dd>
                <a href="#">总订单 <strong class="aOrange">0</strong>单，&nbsp;&nbsp;
                </a>
              </dd>
              <dd>
                <a href="#">已完成 <strong class="aOrange">0</strong>单，</a>
              </dd>
              <dd>总金额 <strong class="aOrange">0.00</strong>元</dd>
              <div class="clear"></div>
            </dl>
          </li>
        </ul>
      </div>
      <div class="usersT">
        <h4>社交绑定信息</h4>
        <span class="aOrange fLeft">（绑定后，就可以直接用社交账号登陆木鸟短租啦！）</span>
        <div class="clear"></div>
      </div>
      <div class="userscon">
        <ul class="userbd">
          <li class="userbd_gray1">
            <a href="javascript:void(0);">去绑定</a>
          </li>
          <li class="userbd_gray3">
            <a href="javascript:void(0);">去绑定</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 清除浮动 -->
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  data() {
   return{}
  },
methods: {
  
  },
watch: {
  
  },
computed: {
  
  },
created() {
  
  },
mouted() {
  
  }
}
</script>
<style scoped>
  *{
    margin:0;padding:0;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style-type: none;
  }
  .uwelcome{
    float: right;
    width: 769px;
    height: auto;
  }
  /* 标题 */
  .unifoT{
    height:32px;
    border-bottom: 2px solid #f4650a;
  }
  /* 设置h4样式 */
  .unifoT h4{
    width: 110px;
    height:31px;
    line-height: 31px;
    border-top: 1px solid #dadde4;
    border-left: 1px solid #dadde4;
    border-right: 1px solid #dadde4;
    background: #f9f9f9;
    border-radius: 10px 10px 0 0 ;
    font-size: 14px;
    font-weight: bold;
  }
  /* 主体内容 */
  .userR{
    float: right;
    width: 769px;
    height: auto;
  }
  /* 第一部分 */
  .w_userzmbox{
    background-color: #fcf3ed;
    padding: 10px 25px;
    margin: 10px 10px;
    border-radius: 15px;
    text-align: left;
  }
  /* 字体样式 */
  .w_userzmtt{
    width: 100%;
    font: bold 14px/20px "宋体";
    color: #00864b;
  }
  .w_userzmp
  {
    font: 12px/20px "宋体";
    color: #666;
  }
  .w_userzma{
    font: bold 12px/20px "宋体";
    color: #0084ff;
    text-decoration: none;
    cursor: pointer;
  }
  .w_userzma:hover{
    text-decoration: underline;
  }
  /* 管理提醒 */
  .usersT{
    background: #fff8ec;
    border-top: 2px solid #f4650a;
    border-bottom: 1px solid #f4d0a5;
    height: 30px;
    padding-top: 10px;
    padding-left: 10px;
    text-align: left;   
  }
  /* 设置h4 */
  .usersT h4 {
    float: left;
    color: #333;
    font: 16px/18px "Microsoft YaHei";
  }
  .usersT span{
    font-size:12px/25px;
  }
  .fLeft{
    float: left;
  }
  .aOrange{
    color: #f4650a;
    text-decoration: none;
    line-height: 30px;
  }
  /* 管理提醒列表 */
  .userscon{
    width:100%;
    text-align: left;
  }
  /* 设置li */
  .userscon li{
    padding-left: 10px;
  }
  /* 设置dl */
  .userscon dl{
    height: 53px;
    line-height: 53px;
  }
  /* dd左浮 */
  .userscon dd{
    float:left;
  }
  /* 清除浮动 */
  .clear{
    clear:both;
  }
  /* 设置a标签样式 */
  .userscon dd a{
    color: #666;
    text-decoration: none;
  }
  /* 社交信息绑定 */
  .userbd{
    width: 100%;
    height:100%;
  }
  /* 设置li */
  .userbd li {
    width: 75px;
    padding-top: 60px;
    /* float: left; */
    display: inline-block;
    text-align: center;
    padding-left: 0;
    line-height: 30px;
  }
  /* 设置背景图 */
  .userbd_gray1 {
    background: url(http://127.0.0.1:5050/order_admin/userthird_grayicon.png) 22px 20px no-repeat;
  }
  /* 设置按钮样式 */
  .userbd li a {
    font: 12px/30px "����";
    color: #666;
    text-decoration: none;
    border: 1px solid #666;
    padding: 3px;
    border-radius: 3px;
  }
  /* 背景图 */
  .userbd_gray3 {
    background: url(http://127.0.0.1:5050/order_admin/userthird_grayicon.png) -96px 20px no-repeat;
  }

</style>