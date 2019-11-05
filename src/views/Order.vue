<template>
  <div id="body">
    <!-- 头部 -->
    <div class="userT">
      <a href="javascript:void(0);">首页</a>
      > 用户中心
    </div>
    <div class="usercon">
      <!-- 左边部分 -->
      <div class="userL">
        <div class="userhead">
          <div class="userhead_pic">
            <img src="http://127.0.0.1:5050/order_admin/11.png_150_150.jpg" alt="" style="width:219px;height:219px;border:0;">
          </div>
          <span>Capon-MN146</span>
          <div class="userheadtxt">
            <a href="javascript:void(0);" @click="toggle($event)" data-i="0">订单管理</a>
            <a href="javascript:void(0);" @click="toggle($event)" data-i="3">个人信息</a>
          </div>
        </div>
        <div class="usidebar">
          <h4 style="color:#444">订单管理</h4>
          <ul>
            <li class="usidebarlibg1">
              <img src="http://127.0.0.1:5050/order_admin/folders.gif" alt="" style="width:18px;height:18px;">
              <a href="javascript:void(0);" @click="toggle($event)" data-i="0">订单管理</a>
              </li>
            <li>
              <img src="http://127.0.0.1:5050/order_admin/star.gif" alt="">
              <a href="javascript:void(0);" @click="toggle($event)" data-i="1">我的收藏</a>
              </li>
          </ul>
          <h4 style="color:#444">用户信息</h4>
          <ul>
            <li>
              <img src="http://127.0.0.1:5050/order_admin/icon_memeber.png" alt="">
              <a href="javascript:void(0);" @click="toggle($event)" data-i="2">我的会员</a>
              </li>
            <li>
              <img src="http://127.0.0.1:5050/order_admin/user_edit.gif" alt="">
              <a href="javascript:void(0);"  @click="toggle($event)" data-i="3">个人信息</a>
              </li>
              <li>
              <img src="http://127.0.0.1:5050/order_admin/database_user.gif" alt="">
              <a href="javascript:void(0);" @click="toggle($event)" data-i="4">我的优惠券</a>
              </li>
            <li>
              <img src="http://127.0.0.1:5050/order_admin/key.gif" alt="">
              <a href="javascript:void(0);" @click="toggle($event)" data-i="5">我的租币  </a>
              </li>
              <li>
              <img src="http://127.0.0.1:5050/order_admin/folders.gif" alt="">
              <a href="javascript:void(0);" @click="toggle($event)" data-i="6">密码修改</a>
              </li>
            <li>
              <img src="http://127.0.0.1:5050/order_admin/user_down.gif" alt="">
              <a href="javascript:void(0);" @click="toggle($event)" data-i="7">收款方式</a>
              </li>
              <li>
              <img src="http://127.0.0.1:5050/order_admin/comment_reply.gif" alt="">
              <a href="javascript:void(0);"  @click="toggle($event)" data-i="8">消息提醒</a>
              </li>
          </ul>
        </div>
      </div>
      <!-- 右边部分 -->
      <my-component :is="componentsList[componentsId]"></my-component>
      <!-- <order-adm></order-adm> -->
      <!-- <my-coll></my-coll> -->
      <!-- 3.我的会员 -->
      <!-- <my-member></my-member> -->
      <!-- 4. -->
      <!-- 5.我的优惠券 -->
      <!-- <my-coupon></my-coupon> -->
      <!-- 6.我的租币 -->
      <!-- <my-rent></my-rent> -->
      <!-- 7.修改密码 -->
      <!-- <chg-pwd></chg-pwd> -->
      <!-- 8.收款方式 -->
      <!-- <pay-way></pay-way> -->
      <!-- 9.消息提醒 -->
      <!-- <msg-alerts></msg-alerts> -->
    </div>
   
    <!-- 脚部 -->
  </div>
</template>
<script>
// 1.引入订单管理
import OrderAdm from '../components/Order/OrderAdm'
// 2.引入我的收藏
import MyColl from '../components/Order/MyColl'
// 3.引入我的会员
import MyMember from '../components/Order/MyMember'
// 4.引入个人信息
import PesInf from '../components/Order/PesInf'
// 5.引入我的优惠券
import MyCoupon from '../components/Order/MyCoupon'
// 6.引入我的租币
import MyRent from '../components/Order/MyRent'
// 7.引入密码修改
import ChgPwd from '../components/Order/ChgPwd'
// 8.引入收款方式
import PayWay from '../components/Order/PayWay'
// 9.引入消息提醒
import MsgAlerts from '../components/Order/MsgAlerts'
export default {
  data() {
   return{
     componentsId:0,
     componentsList:[ "order-adm","my-coll","my-member","my-coupon","my-rent","chg-pwd","pay-way","msg-alerts"]
   }
  },
methods: {
    toggle(e){
      var i = e.target.dataset.i;
      // console.log(i);
      this.componentsId = i;
    }
  },
watch: {
  
  },
computed: {
  
  },
created() {
  
  },
mouted() {
  
  },
  // 组件注册
  components:{
    "order-adm":OrderAdm,
    "my-coll":MyColl,
    "my-member":MyMember,
    "my-coupon":MyCoupon,
    "my-rent":MyRent,
    "chg-pwd":ChgPwd,
    "pay-way":PayWay,
    "msg-alerts":MsgAlerts
  }
}
</script>
<style scoped>
*{margin:0;padding:0;box-sizing: border-box;}
a{
  text-decoration: none;
}
ul{
  list-style-type: none;
}
  /* 主体 */
  #body{
    min-width:1240px;
    color: #666666;
    background: #f0f0f0;
    font-size: 12px;
  }
  /*导航栏 */
  .userT{
    height: 22px;
    line-height: 22px;
    width:1000px;
    border-bottom: 1px solid #eee;
    margin: 10px auto;
    text-align: left;
    font-size: 12px;
    color: #666;
  }
  .userT a{
    color: #333;
  }
  /* 左右部分的父元素 */
  .usercon{
    width: 1000px;
    height: auto;
    margin: auto;
  }
  .usercon::after{
    display: block;
    content:"";
    clear:both;
  }
  /* 左边 左浮动 */
  .userL{
    float: left;
  }
  /* 左边部分 */
  .userL{
    box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.25);
    margin-bottom: 30px;
    float: left;
    width: 219px;
    background: #fff;
    height: auto;
    padding-bottom :12px;
  }
  /* 左边头部分 */
  .userhead{
    width: 100%;
    text-align: center;
  }
  /* 图片部分 */
  .userhead_pic{
    width: 100%;
    margin-bottom: 5px;
  }
  /* 订单管理 和 个人信息 */
  .userheadtxt{
    width: 100%;
    height: 35px;
    border-bottom: 1px solid #ddd;
    padding-bottom:10px;
    margin-top: 10px;
    text-align: center;
  }
  /* a标签的样式 */
  .userheadtxt a{
    color:#f4650a;
    padding: 0 10px;
    line-height: 24px;
  }
  /* 下面的 订单管理 */
  .usidebar h4{
    color:#444;
    padding-left: 24px;
    margin-top:15px;
    margin-bottom:5px;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    height: 19px;
  }
  /* 设置所有的li */
  .usidebar ul li{
    width: 219px;
    height: 30px;
    padding: 7px 15px;
    font-size: 14px;
    text-align: left;
  }
  /* 选中的li的样式 */
  .usidebarlibg1{
    background: url(http://127.0.0.1:5050/order_admin/bg1.png) no-repeat 0px -104px;
  }
  /* 设置所有img的样式 */
  .usidebar ul li img{
    vertical-align: baseline;
    margin-right: 10px;
    margin-left:20px;
  }
  /* 设置所有a的样式 */
  .usidebar ul li a{
    vertical-align: top;
    color:#666; 
  }
  /* 下面的 用户信息 */
</style>