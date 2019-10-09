<template>
  <div class="userR">
    <!-- 头 -->
    <div class="uinfoT">
      <ul class="user-list">
        <li class="active">
          <a href="javascript:void(0);">我的租币▼</a>
        </li>
        <li>
          <a href="javascript:void(0);">租币明细</a>
        </li>
        <li>
          <a href="javascript:void(0);">提现记录</a>
        </li>
      </ul>
    </div>
    <!-- 主体 -->
    <div style="background-color:white;padding:30px;margin-bottom:30px;position:relative;">
      <div>
        <div id="div_rentmoney1" style="text-align:center;">
          <label style="font-size:16px;">租币余额：</label>
          <label style="font-size:18px;color:#ed2716;font-weight:bolder;">0.00</label>
          <div style="text-align:center;margin-top:20px;">
            <a href="javascript:void(0);" id="Submit1" class="userinfo_tijiao">申请提现</a>
          </div>
          <div style="text-align:left;padding:20px;background-color:#fcf3ed;border-radius:10px;">
            <label style="color:#f4650a;">
               温馨提示：
               <br>1. 具体到账时间依照您的收款方式而定，建议使用支付宝，到账时间为1-2个工作日，银行卡到账需2-5个工作日。以实际到账时间为准。
               <br>2. 如遇周末或法定节假日，到账时间自动顺延。
            </label>
          </div>
        </div>
      </div>
    </div>
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
*{margin:0;padding:0;}
a{
  text-decoration: none;
}
ul{
  list-style-type: none;
}
/* 最外层div */
.userR{
  float: right;
  width: 769px;
  height:auto;
}
.uinfoT{
  height:32px;
  border-bottom: 2px solid #f4650a;
}
  .user-list li{
    float: left;
    width: 120px;
    height: 31px;
    line-height: 32px;
    background-color: #fff;
    border-radius: 10px 10px 0 0 ;
    border-top: 1px solid #dadde4;
    border-left: 1px solid #dadde4;
    text-align: center;
  }
  .user-list li a{
    font-size: 14px;
    font-weight: bold;
    color:rgb(68, 68, 68);
  }
  /* 访问状态下的样式 */
  .user-list .active a{
    color: rgb(244, 101, 10);
  }
  /* 申请提现按钮样式 */
  .userinfo_tijiao{
    border-radius: 2px;
    font-size: 16px;
    width: 133px;
    height: 36px;
    line-height: 36px;
    background-color: #FF5C2E;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    display: inline-block;
    text-align: center;
    cursor: pointer;
    color: #fff;
    margin-left: 10px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
</style>